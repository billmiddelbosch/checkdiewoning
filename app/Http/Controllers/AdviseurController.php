<?php

namespace App\Http\Controllers;

use App\Models\Woning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\Arr;
use App\Http\Controllers\whereDate;


class AdviseurController extends Controller
{
    public function index()
    {
        return Inertia::render('Adviseur/adviseurHome');   
    }


    public function aanbodOnDate(Request $request)
    {
        $zoek = $request->postcode . '%';

        return Inertia::render('Adviseur/adviseurHome', [
            'woningen' => woning::where([
                ['postcode', 'like', $zoek],
                ['status', '1'],
                ['datum', '>=', $request->datum]
                ])
                ->get()
        ]);

    }

}
