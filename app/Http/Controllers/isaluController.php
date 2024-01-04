<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class isaluController extends Controller
{


    public function index()
    {
        // query woningdetails at iSalu API
        $isaluDetails = $this->getToken();

        // open page
        return Inertia::render('Isalu/iSaluPage', [
            'isaluData' => $isaluDetails
        ]);
    }

    public function getToken()
    {
        $url = $_ENV['VITE_ISALU_ROOT_API'];

        $response = Http::post($url . ' /login', 
            ['username' => Auth::user()->email,
            'password' => 'Bmidde01!'
            ]);
            
        if ($response->successful()) {
            $details = Http::withToken($response->json('token'))->
            get($url . '/property/current'); 
                
            if ($details->successful()) {
                var_dump($details->body('items'));
                return;
            } else {
                return;
            }
        } else {
            return;
        }
            
    }
    
}