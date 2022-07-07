<?php

use Illuminate\Support\Facades\Route;

Route::get('get-products', 'Api\ProductsController@allProducts');
Route::get('get-product/{slug}', 'Api\ProductsController@productBySlug');