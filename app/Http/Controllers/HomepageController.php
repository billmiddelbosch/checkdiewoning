<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use PHPUnit\Logging\JUnit\JunitXmlLogger;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;

class HomepageController extends Controller
{
    public function index()
    {
        return view('homepage');
    }

    public function searchDetails(Request $request)
    {
        return redirect()->route('woningdetails-finddetails', array('plaats' => $request->plaats, 'straat' => $request->straat, 'nr' => $request->nr));
    }

    public function findWoningen(Request $request)
    {
        $adresquery = $request->postcode . "_" . $request->huisnr;
        $jumbaDetails = $this->suggestJumbadata($adresquery);
        return Inertia::render('Home', [
            'jumbaData' => $jumbaDetails
        ]);
        
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

}
