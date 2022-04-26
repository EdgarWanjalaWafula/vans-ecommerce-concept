<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductTaxonomy;

class ProductTaxonomyController extends Controller
{
    public function allTaxonomies(){
        $taxonomies = ProductTaxonomy::with('productCategories')->get();

        return response()->json($taxonomies, 200);
    }
}