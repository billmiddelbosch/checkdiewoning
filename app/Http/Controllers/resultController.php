<?php

namespace App\Http\Controllers;

use App\Mail\aankoopRapport;
use App\Mail\productOnbekend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Models\agentOrders;
use Illuminate\Support\Facades\Session;
use Symfony\Component\Translation\Catalogue\TargetOperation;

class resultController extends Controller
{
    public function index(Request $request)
    {   
        // AFHANDELEN 'Aankoop Rapport' product
        if ($request->selected == 'Aankoop Rapport') {

            $this->storeOrder($request);

            Mail::to('bill@jumba.nl')
            ->cc('bill@jumba.nl')
            ->send(new aankoopRapport($request));
            return;
        }

        if ($request->selected == 'Jumba account') {

            $naam = explode(' ', $request->naam);
            $url = 'https://jumba.nl/registratie?e-mailadresadviseur=' . Auth::user()->email . '&e-mailadresklant=' . $request->email . '&voornaamklant=' . $naam[0] . '&achternaamklant=' . $naam[1];
            return Inertia::location($url);
        }

        // AFHANDELEN LEADOUT PRODUCTEN
        foreach (Session::get('cmsProducts') as $product) {
            if ($product['content']['naam'] == $request->selected && $product['content']['leadout']) {

                $this->storeOrder($request);

                $url = $product['content']['leadoutUrl']['cached_url'];
                return Inertia::location($url);
            };

        }

        // if ($request->selected == 'Verkoop woning') {
        //     $url = 'https://api-test.isalu.nl:8443/register';

        //     $body = 
        //         `{
        //             "username": "test1603v2@mailinator.com",
        //             "password": "Test1603!",
        //             "name": "John",
        //             "phone": "0621238545",
        //             "address":
        //             {
        //                 "number": "4",
        //                 "numberExtra": "BIS",
        //                 "postalCode": "3572 HH",
        //                 "country": "Nederland"
        //             } 
        //         }`;

        //     $response = Http::withHeaders([
        //         'Content-Type' => 'application/json',
        //         'Authorization' => 'e56f8bf7-3363-4ccb-8f16-92fef672e5f8'
        //         ])->POST($url, ['body' => json_encode($body, true)]); 

        //     return $response->json();
                
        //     if ($response->successful()) {
        //         return $response->json();
        //     } else {
        //         return;
        //     }

        //     return Inertia::location($url);
        // }

        // Afhandeling indien product niet gespecificeerd is
        Mail::to('bill@jumba.nl')
        ->send(new productOnbekend($request));

    }

    public function storeOrder($request) 
    {
        $order = new agentOrders();

        foreach (Session::get('cmsProducts') as $product) {
            if ($product['content']['naam'] == $request->selected) {
                $prijs = $product['content']['prijs'];
            };
        }
 
        $order->agentNaam = Auth::user()->name;
        $order->agentEmail = Auth::user()->email;
        $order->productNaam = $request->selected;
        $order->productPrijs = $prijs;
        $order->datum = substr(now()->toDateTimeString(), 0, 10);
        $order->jumbaId = Session::get('jumbaId');
        $order->gefactureerd = false;

        $order->save();
 
        return;

    }

    public function jumba()
    {
        return redirect()->away('https://www.jumba.nl');
    }



}
