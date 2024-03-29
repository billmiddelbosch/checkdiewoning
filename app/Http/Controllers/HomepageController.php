<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use PHPUnit\Logging\JUnit\JunitXmlLogger;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use PHPUnit\Framework\Constraint\Count;

class HomepageController extends Controller
{

    public function findWoningen(Request $request)
    {
        $adresquery = $request->postcode . "_" . $request->huisnummer;
        $jumbaAantal = $this->suggestJumbadata($adresquery);
        if ( Count($jumbaAantal) > 0) {
            $adresquery = $jumbaAantal[0]['Filter']['Street'] . " " . $jumbaAantal[0]['Payload']['Main']['Number'] . " " . $jumbaAantal[0]['Filter']['Postcode'] . " " . $jumbaAantal[0]['Filter']['City'];
            $jumbaDetails = $this->searchJumbadata($adresquery);
            Session::put('woning', $jumbaDetails);
            Session::put('woningDetails', $jumbaDetails['Items'][0]['Input']['Fulltext']);
            Session::put('jumbaId', $jumbaDetails['Items'][0]['Payload']['ID']);
            $products = $this->getCMSdata('products');
            Session::put('cmsProducts', $products['stories']);

            return redirect()->route('woning');

        } else
        {
            $msg = "Helaas geen woning gevonden";
            return Inertia::render('Home', [
                'Message' => $msg,
            ]);
        }
        
    }

    public function suggestJumbadata($adresquery)
    {
        {
            // return $adresquery;
            $response = Http::withHeaders([
                'api-key' => 'xA1uNvEKgkmKGzN5HySnK5xeY8x3EFs3'
            ])->get('https://api.jumba.nl/v1/suggest?q=' . $adresquery);
    
            if ($response->successful() && $response !== NULL) {
                return $response->json();
            } else {
                echo "helaas";
            }
        }
    
    }

    public function searchJumbadata($adresquery)
    {
        $response = Http::withHeaders([
            'api-key' => 'xA1uNvEKgkmKGzN5HySnK5xeY8x3EFs3'
        ])->get('https://api.jumba.nl/v1/search?q=' . $adresquery);

        if ($response->successful() && $response['Items'] !== NULL) {
            return $response->json();
        } else {
            echo "helaas";
        }
    }

    //GET STORYBLOK CMS DATA
    public function getCMSdata($type) {
        {
            $token = 'kD1G3GtuNRRdPBrXtmBY7wtt';
            $response = Http::withHeaders([])->get('https://api.storyblok.com/v2/cdn/stories?token=' . $token . '&starts_with=' . $type);
            if ($response->successful() && $response !== NULL) {
                return $response->json();
            } else {
                echo "helaas";
            }
        }
    }

    //RETURN DETAIL PAGINA (NOT USED)
    public function searchDetails(Request $request)
    {
        return redirect()->route('woningdetails-finddetails', array('plaats' => $request->plaats, 'straat' => $request->straat, 'nr' => $request->nr));
    }

}
