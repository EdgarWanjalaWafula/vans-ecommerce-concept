<?php

use Illuminate\Support\Facades\Route;

Route::get('get-taxonomies', 'Api\ProductTaxonomyController@allTaxonomies');