<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// default name space for all routes is 'App\Http\Controllers\Api'
$api_version = config('api.api_version');

Route::post('users/signin', 'Api\Auth\LoginController@login');

Route::group(["prefix" => "{$api_version}"], function() {
    Route::prefix('products')
        ->group(base_path('routes/api/products.php'));
    Route::prefix('taxonomies')
        ->group(base_path('routes/api/taxonomies.php'));
});

Route::group(['middleware' => 'auth:api'], function() { 
    Route::post('users/logout', 'Api\Auth\LoginController@logout');
});