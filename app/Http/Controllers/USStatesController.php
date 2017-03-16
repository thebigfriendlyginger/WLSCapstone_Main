<?php
namespace App\Http\Controllers;

use App\USState;

class USStatesController extends Controller
{

    public function index()
    {
        $usstates = USState::all();
        return compact('usstates');
    }
}
