<?php

namespace App\Http\Controllers;

use App\Models\Woning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;


class xmlController extends Controller
{

    public function dailyRun()
    {
        //DB::connection()->enableQueryLog();
        
        // SET variabelen
        $woningen = [];
        $datum = substr(now()->toDateTimeString(), 0, 10);
        // $datumtijd = substr(now()->toDateTimeString(), 0, 10) . "T" . "14";
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
                $adresquery = "$straat $nummer$addition";
                $woningdetails = $this->getPostcode($adresquery);

                // Als Jumba woning details beschikbaar zijn 
                if ($woningdetails != NULL) {
                    $status = $woningdetails[0]['Parameters']['Forsale'];
                    $postcode = $woningdetails[0]['Payload']['Main']['Postcode']['P6'];
                    $jumbaId = $woningdetails[0]['Payload']['ID'];

                    $item = woning::where('jumbaId', $jumbaId)->get();

                    // Als woning nog niet in DB staat
                    if (!$item->isEmpty()) {
                        woning::where('jumbaId', $jumbaId)->update(
                            [
                                'status' => $status,
                                'datum' => $datum,
                                'updated_at' => $datum
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
                                'created_at' => $datum,
                                'updated_at' => $datum
                            ]
                        );
                        }
                }
            }
        }

    }

    public function createXMLlist($aantal)
    {
        $woningen = [];
        $allWoningen = [];

        for ($i = $aantal; $i > 0; $i--) {
            $xmlString = file_get_contents('https://www.jumba.nl/assets/sitemap/map-' . $i . '.xml');
            $xmlObject = simplexml_load_string($xmlString);

            $json = json_encode($xmlObject);
            $phpArray = json_decode($json, true);

            $woningen = Arr::collapse($phpArray['url']);

            // $woningen = Arr::except($woningen, ['lastmod']);

            ARR::prepend($allWoningen, $woningen);
            }

            return $allWoningen;

    }

    public function getPostcode($adresquery)
    {
        $response = Http::withHeaders([
            'api-key' => 'xA1uNvEKgkmKGzN5HySnK5xeY8x3EFs3'
        ])->get('https://api.jumba.nl/v1/search?q=' . $adresquery);

        if ($response->successful() && $response['Items'] !== NULL) {
            return $response['Items'];
        } else {
            echo "helaas";
        }
        
    }

}