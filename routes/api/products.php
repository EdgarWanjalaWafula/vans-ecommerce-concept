<?php

use Illuminate\Support\Facades\Route;

Route::get('get-products', 'Api\ProductsController@allProducts');