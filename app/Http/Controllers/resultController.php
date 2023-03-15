<?php

namespace App\Http\Controllers;

use App\Mail\aankoopRapport;
use App\Mail\productOnbekend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class resultController extends Controller
{
    public function index(Request $request)
    {   
        if ($request->selected == 'Aankoop Rapport') {
            Mail::to('bill@jumba.nl')  // NOG AANPASSEN NAAR SUPPORT
            // ->cc($request->email)   // NOG ACTIVEREN
            ->send(new aankoopRapport($request));
            return;
        }
        
        if ($request->selected == 'Verkoop woning') {
            // Redirect::away('https://jumba.nl/verkoper-registratie')->with('_blank');
            // return redirect()->away('https://jumba.nl/verkoper-registratie');
            return Redirect::to('https://jumba.nl/verkoper-registratie')->with('_blank');

            // return redirect('https://jumba.nl/verkoper-registratie');
            return;
        }

        Mail::to('bill@jumba.nl')  // NOG AANPASSEN NAAR SANDER
        ->send(new productOnbekend($request));
    }

}
