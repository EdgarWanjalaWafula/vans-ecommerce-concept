<?php

namespace App\Http\Controllers;

use App\Models\ProductTaxonomy;
use App\Http\Requests\StoreProductTaxonomyRequest;
use App\Http\Requests\UpdateProductTaxonomyRequest;

class ProductTaxonomyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductTaxonomyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductTaxonomyRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductTaxonomy  $productTaxonomy
     * @return \Illuminate\Http\Response
     */
    public function show(ProductTaxonomy $productTaxonomy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductTaxonomy  $productTaxonomy
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductTaxonomy $productTaxonomy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductTaxonomyRequest  $request
     * @param  \App\Models\ProductTaxonomy  $productTaxonomy
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductTaxonomyRequest $request, ProductTaxonomy $productTaxonomy)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductTaxonomy  $productTaxonomy
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductTaxonomy $productTaxonomy)
    {
        //
    }
}
