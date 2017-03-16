<?php

// Step 6: Last step of our Laravel API

// this routes all of our views into our angular routing engine
Route::get('/', function () {
    return view('index'); // this file is in public/views/index.php
});

// https://laravel.com/docs/5.4/controllers#resource-controllers
// resource includes 7 pre-configured routes that you can learn about in the above link

// Route::resource('url', 'controllerName'); automatically routes the url to the methods in the controllers

// putting the prefix 'api' means we the index method for employee will be located at /api/employee
Route::group(array('prefix' => 'api'), function() {
    Route::resource('employee', 'EmployeesController');
    Route::resource('accident', 'AccidentsController');
    Route::resource('claim', 'ClaimsController');
    Route::resource('usstate', 'USStatesController');
    Route::resource('country', 'CountriesController');
});


// CATCH ALL ROUTE =============================
// all routes that are not home or api will be redirected to the frontend
// this allows angular to route them
Route::any('{path?}', function()
{
    return view("index");
})->where("path", ".+");