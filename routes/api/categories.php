<?php

use Illuminate\Support\Facades\Route;

Route::get('get-categories', 'App\Http\Controllers\Api\ProductCategoryController@allCategories');