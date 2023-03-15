<?php

namespace App\Http\Controllers;

use App\Mail\aankoopRapport;
use App\Mail\productOnbekend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



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

        Mail::to('bill@jumba.nl')  // NOG AANPASSEN NAAR SANDER
        ->send(new productOnbekend($request));
    }

    public function jumba()
    {
        return redirect()->away('https://www.jumba.nl');
    }



}
