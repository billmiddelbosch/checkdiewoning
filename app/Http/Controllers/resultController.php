<?php

namespace App\Http\Controllers;

use App\Mail\aankoopRapport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class resultController extends Controller
{
    public function index(Request $request)
    {
        // $request->email

        Mail::to($request->email)->send(new aankoopRapport());

    }

}
