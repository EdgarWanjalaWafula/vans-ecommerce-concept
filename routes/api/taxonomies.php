<?php

use Illuminate\Support\Facades\Route;

Route::get('get-taxonomies', 'App\Http\Controllers\Api\ProductTaxonomyController@allTaxonomies');