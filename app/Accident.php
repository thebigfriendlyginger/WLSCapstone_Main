<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accident extends Model
{
    protected $fillable = array (
        'EmployeeID',
        'AccidentDate',
        'AccidentDescription',
        'AccidentState',
        'AccidentCountry'
    );

}
