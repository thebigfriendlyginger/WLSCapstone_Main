<?php

namespace App\Http\Controllers;

use App\Claim;
use Illuminate\Http\Request;

class ClaimsController extends Controller
{

    public function index()
    {
        $claims = Claim::all();
        return compact('claims');
    }

    public function store(Request $request)
    {
        $claim = new Claim;

        $claim->AccidentID = $request->input('AccidentID');
        $claim->ClaimDate = $request->input('ClaimDate');
        $claim->ClaimDescription = $request->input('ClaimDescription');
        $claim->ClaimState = $request->input('ClaimState');
        $claim->ClaimCountry = $request->input('ClaimCountry');
        $claim->ClaimAmount = $request->input('ClaimAmount');
        $claim->save();

        return $claim->id;
    }
    public function update(Request $request, $id)
    {
        $claim = Claim::find($id);

        $claim->AccidentID = $request->input('AccidentID');
        $claim->ClaimDate = $request->input('ClaimDate');
        $claim->ClaimDescription = $request->input('ClaimDescription');
        $claim->ClaimState = $request->input('ClaimState');
        $claim->ClaimCountry = $request->input('ClaimCountry');
        $claim->ClaimAmount = $request->input('ClaimAmount');
        $claim->save();

        return $claim->id;
    }
    public function show(Claim $claim)
    {
        return compact('claim');
    }
    public function destroy(Claim $claim)
    {
        $claim->delete();
    }
}
