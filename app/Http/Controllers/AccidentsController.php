<?php

namespace App\Http\Controllers;

use App\Accident;
use Illuminate\Http\Request;


class AccidentsController extends Controller
{
    public function index()
    {
        $accidents = Accident::all();
        return compact('accidents');
    }

    public function store(Request $request)
    {
        $accident = new Accident;

        $accident->EmployeeID = $request->input('EmployeeID');
        $accident->AccidentDate = $request->input('AccidentDate');
        $accident->AccidentDescription = $request->input('AccidentDescription');
        $accident->AccidentState = $request->input('AccidentState');
        $accident->AccidentCountry = $request->input('AccidentCountry');
        $accident->save();

        return $accident->id;
    }

    public function update(Request $request, $id) {
        $accident = Accident::find($id);

        $accident->EmployeeID = $request->input('EmployeeID');
        $accident->AccidentDate = $request->input('AccidentDate');
        $accident->AccidentDescription = $request->input('AccidentDescription');
        $accident->AccidentState = $request->input('AccidentState');
        $accident->AccidentCountry = $request->input('AccidentCountry');
        $accident->save();

        return $accident->id;
    }
    public function show(Accident $accident)
    {
        return compact('accident');
    }
    public function destroy(Accident $accident)
    {
        $accident->delete();
    }
}
