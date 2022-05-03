<?php

use Illuminate\Support\Facades\Route;

Route::get('get-categories', 'Api\ProductCategoryController@allCategories');