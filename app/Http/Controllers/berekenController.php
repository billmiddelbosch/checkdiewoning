<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\berekenMeerinfo;
use Inertia\Inertia;


class berekenController extends Controller
{

    public function meerInfo() 
    {
        Mail::to('sander@jumba.nl')
        ->send(new berekenMeerinfo());
        return;
    }

}
