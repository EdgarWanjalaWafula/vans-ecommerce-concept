<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductsController extends Controller
{
    public function allProducts(){
        $products = Product::all();

        return response()->json($products, 200);
    }

    public function productBySlug($request){
        $product = Product::where('slug', $request)->first();
        return response()->json($product, 200);
    }
}
