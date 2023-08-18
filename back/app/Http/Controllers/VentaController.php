<?php

namespace App\Http\Controllers;
use App\Models\Venta;

use Illuminate\Http\Request;

class VentaController extends Controller
{
    public function index()
    {
       $venta = Venta::all(); 
          
       // Return Json Response
       return response()->json([
            'results' => $venta
       ],200);
    }
}
