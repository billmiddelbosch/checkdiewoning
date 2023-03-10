<?php

namespace App\Http\Controllers;

use App\Models\Woning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Carbon\Carbon;


class xmlController extends Controller
{

    public function dailyRun()
    {        
        // SET variabelen
        $woningen = [];
        $datum = substr(now()->toDateTimeString(), 0, 10);
        $datumtijd = substr(now()->toDateTimeString(), 0, 10) . "T" . substr(now()->toDateTimeString(), 11, 2);

        // XML to Array 
        $xmlString = file_get_contents('https://www.jumba.nl/assets/sitemap/map-1.xml');
        $xmlObject = simplexml_load_string($xmlString);
        
        $json = json_encode($xmlObject);
        $phpArray = json_decode($json, true);
        
        $woningen = $phpArray['url'];


        // Loop voor elke woning in array 
        for ($a = 0; $a < count($woningen); $a++) {
            
            // SET variabelen gebruikt in loop 
            $datumLastmod = substr($woningen[$a]['lastmod'], 0, 13);
            $item = "";
            $woningdetails = [];
            
            // Functionaliteit als woning in laatste uur is aangepast in XML 
            if ($datumLastmod == $datumtijd) {

                // Haal adres gegevens uit url voor woning die laatste uur is aangepast in XML 
                $adres = substr($woningen[$a]['loc'], 17);

                $adresarray = explode('/', $adres);

                $plaats = str_replace('%27', '', str_replace('%20', ' ', $adresarray[0]));
                $straat = str_replace('%27', '', str_replace('%20', ' ', $adresarray[1]));
                $nummer = preg_replace('/[^0-9]/', '', $adresarray[2]);
                $addition = preg_replace('/[^a-zA-Z]/', '', $adresarray[2]);
                
                // Haal Jumba informatie op voor die woning die laatste uur is aangepast in XML
                $adresquery = "$straat $nummer$addition $plaats";
                $woningdetails = $this->getPostcode($adresquery);
                
                // Als Jumba woning details beschikbaar zijn 
                if ($woningdetails['NotFound'] == false) {
                    $status = $woningdetails['Items'][0]['Parameters']['Forsale'];
                    $postcode = $woningdetails['Items'][0]['Payload']['Main']['Postcode']['P6'];
                    $jumbaId = $woningdetails['Items'][0]['Payload']['ID'];

                    $item = woning::where('jumbaId', $jumbaId)->get();

                    // Als woning nog niet in DB staat
                    if (!$item->isEmpty()) {
                        woning::where('jumbaId', $jumbaId)->update(
                            [
                                'status' => $status,
                                'updated_at' => now()
                            ]
                        );
                    } else {
                        DB::table('woning')->insert(
                            [
                                'plaats' => $plaats,
                                'straat' => $straat,
                                'nr' => $nummer,
                                'addition' => $addition,
                                'datum' => $datum,
                                'status' => $status,
                                'postcode' => $postcode,
                                'jumbaId' => $jumbaId,
                                'created_at' => now(),
                                'updated_at' => now()
                            ]
                        );
                        }
                }
            }
        }
        
    }


    public function houseKeeping()
    {
        $checkDatum = Carbon::now()->subMonth(2);
        
        $woningenDB = woning::where([
            ['status', '1'],
            ['updated_at', '<', $checkDatum]
            ])
            ->get();

        for ($a = 0; $a < count($woningenDB); $a++) {

            // Verse Jumba data ophalen
            $adresquery = $woningenDB[$a]->straat . " " . $woningenDB[$a]->nr . $woningenDB[$a]->addition . " " . $woningenDB[$a]->plaats;
            $woningdetails = $this->getPostcode($adresquery);

            // Update status in DB obv verse Jumba data
            if ($woningdetails != NULL) {
                $status = $woningdetails[0]['Parameters']['Forsale'];

                woning::where('jumbaId', $woningdetails[0]['Payload']['ID'])->update(
                    [
                        'status' => $status,
                        'updated_at' => now()
                    ]
                );
            }

        }

    }

    
    public function getPostcode($adresquery)
    {
        $response = Http::withHeaders([
            'api-key' => 'xA1uNvEKgkmKGzN5HySnK5xeY8x3EFs3'
            ])->get('https://api.jumba.nl/v1/search?q=' . $adresquery);
            
            if ($response->successful() && $response['Items'] !== NULL) {
                return $response;
            } else {
                return;
            }
            
        }

    }