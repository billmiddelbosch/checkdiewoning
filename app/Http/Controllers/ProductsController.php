<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\agentOrders;
use Inertia\Inertia;


class ProductsController extends Controller
{
    public function index()
    {
        $teFactureren = agentOrders::all()->where('gefactureerd', 0);
        return Inertia::render('Admin/adminProducts', [
            'products' => $teFactureren,
        ]);

    }

    public function select(Request $request)
    {
        $teFactureren = agentOrders::all()
            ->where('agentNaam', $request->naam)
            ->where('gefactureerd', 0);
            
        return Inertia::render('Admin/adminProducts', [
            'products' => $teFactureren,
        ]);

    }
}
