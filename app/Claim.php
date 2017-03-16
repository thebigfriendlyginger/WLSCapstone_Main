<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Claim extends Model
{
    protected $fillable = array (
        'AccidentID',
        'ClaimDate',
        'ClaimDescription',
        'ClaimState',
        'ClaimCountry',
        'ClaimAmount'
    );
}
