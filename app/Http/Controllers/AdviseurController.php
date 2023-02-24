<?php

namespace App\Http\Controllers;

use App\Models\Woning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Http\Controllers\Arr;
use App\Http\Controllers\xmlController;
use PhpParser\Node\Stmt\Return_;

class AdviseurController extends Controller
{
    public function index()
    {
        return Inertia::render('Adviseur/adviseurHome');   
    }


    public function aanbodOnDate(Request $request)
    {
        $zoek = $request->postcode . '%';

        // Refresh data
        // $woningenDB = woning::where([
        //     ['postcode', 'like', $zoek],
        //     ['status', '1'],
        //     ['datum', '<=', $request->datum]
        //     ])
        //     ->get();
        
        // for ($a = 0; $a < count($woningenDB); $a++) {

        //     // Verse Jumba data ophalen
        //     $adresquery = $woningenDB[$a]->straat . " " . $woningenDB[$a]->nr . $woningenDB[$a]->addition;

        //     $woningdetails = app('App\Http\Controllers\xmlController')->getPostcode($adresquery);

        //     // Update status in DB obv verse Jumba data
        //     $status = $woningdetails[0]['Parameters']['Forsale'];
        //     woning::where('jumbaId', $woningdetails[0]['Payload']['ID'])->update(
        //         [
        //             'status' => $status,
        //             'updated_at' => now()
        //         ]
        //     );
        // }
        
        // Return requested data
        return Inertia::render('Adviseur/adviseurHome', [
            'woningen' => woning::where([
            ['postcode', 'like', $zoek],
            ['status', '1'],
            ['datum', '<=', $request->datum]
            ])
            ->get(),
            'results' => true
            ]);
    }

}
