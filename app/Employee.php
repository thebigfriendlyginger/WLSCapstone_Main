<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/* Step 2:
 * The model
 */
class Employee extends Model {
//    To turn off automatic timestamps use the following lines of code
//    /**
//     * Indicates if the model should be timestamped.
//     *
//     * @var bool
//     */
//    public $timestamps = false;

    protected $fillable = array(
        'FirstName',
        'MI',
        'LastName',
        'HouseNumber',
        'Street',
        'City',
        'County',
        'EmployeeState',
        'EmployeeCountry',
        'Zip',
        'DateOfBirth',
        'HireDate',
        'LicenseDate',
        'TerminationDate',
        'Salary'
    );

}
