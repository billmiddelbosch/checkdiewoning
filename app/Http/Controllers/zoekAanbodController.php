<?php

namespace App\Http\Controllers;

use App\Models\Woning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\Arr;
use App\Http\Controllers\whereDate;


class zoekAanbodController extends Controller
{
    public function index()
    {
        return Inertia::render('Adviseur/zoekAanbod');   
    }


    public function aanbodOnDate(Request $request)
    {
        $zoek = $request->postcode . '%';

        return Inertia::render('Adviseur/zoekAanbod', [
            'woningen' => woning::where([
                ['postcode', 'like', $zoek],
                ['status', '1']])
                // ->whereDate(
                // 'datum', '<=' , $request->datum)
                ->get()
        ]);

    }

}
