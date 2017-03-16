<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use App\Country;

class CountriesController extends Controller
{
    public function index()
    {
        $countries = Country::all();
        return compact('countries');
    }
}
