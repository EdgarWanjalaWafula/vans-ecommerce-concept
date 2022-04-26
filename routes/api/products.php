<?php

use Illuminate\Support\Facades\Route;

Route::get('get-products', 'App\Http\Controllers\Api\ProductsController@allProducts');