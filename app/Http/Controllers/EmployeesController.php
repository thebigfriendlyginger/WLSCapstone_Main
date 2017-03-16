<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    public function index()
    {
        $employees = Employee::all(); // gets all employees from the database
        return compact('employees');  // returns all employees in .json format

        // If you don't want to use AngularJS, this is how you would render a view in pure Laravel
        // The following line will send all employees to resources/views/employees/index.blade.php
        // return view('employees.index', compact('employees'));
    }

    // store will create an employee object.
    // to quickly modify these lines in phpStorm, hold alt, click and drag to edit multiple lines
    public function store(Request $request) {
//        https://laravel.com/docs/5.4/validation
        $this->validate($request, [
            'FirstName' => 'required | string',
            'MI' => '',
            'LastName' => 'required | string',
            'HouseNumber' => 'required',
            'Street' => 'required | string',
            'City' => 'string',
            'County' => 'required | string',
            'EmployeeState' => '',
            'EmployeeCountry' => 'required',
            'Zip' => 'required',
            'DateOfBirth' => 'required',
            'HireDate' => 'required',
            'LicenseDate' => 'required',
            'TerminationDate' => '',
            'Salary' => 'required'
        ]);
        //if validation !successful, laravel will return a JSON response right here
        //else the function will continue
        //validation successful, send the employee object to the database
        $employee = new Employee;

        $employee->FirstName = $request->input('FirstName');
        $employee->MI = $request->input('MI');
        $employee->LastName = $request->input('LastName');
        $employee->HouseNumber = $request->input('HouseNumber');
        $employee->Street = $request->input('Street');
        $employee->City = $request->input('City');
        $employee->County = $request->input('County');
        $employee->EmployeeState = $request->input('EmployeeState');
        $employee->EmployeeCountry = $request->input('EmployeeCountry');
        $employee->Zip = $request->input('Zip');
        $employee->DateOfBirth = $request->input('DateOfBirth');
        $employee->HireDate = $request->input('HireDate');
        $employee->LicenseDate = $request->input('LicenseDate');
        $employee->TerminationDate = $request->input('TerminationDate');
        $employee->Salary = $request->input('Salary');
        $employee->save();

        return $employee->id;
//        return Response::json(array('success' => true, 'last_insert_id' => $employee->id), 200);
    }

    // Show only one employee
    public function show(Employee $employee)
    {
        return compact('employee');
        // using pure Laravel
        // return view('employees.show', compact('employee'));
    }

    public function update(Request $request, $id) {
//        $this->validate($request, [
//            'FirstName' => 'required | between:1,20 | string',
//            'MI' => 'nullable | string | size:1',
//            'LastName' => 'required | string',
//            'HouseNumber' => 'required | numeric',
//            'Street' => 'required | string',
//            'City' => 'required_if:County,==,null | string',
//            'County' => 'required_if:City,==,null | string',
//            'EmployeeState' => 'nullable',
//            'EmployeeCountry' => 'required',
//            'Zip' => 'required | numeric | size:5',
//            'DateOfBirth' => 'required | date',
//            'HireDate' => 'required | date | after:DateOfBirth | before:tomorrow',
//            'LicenseDate' => 'required | date | after:DateOfBirth | before:tomorrow',
//            'TerminationDate' => 'nullable | date | after:HireDate | before:tomorrow',
//            'Salary' => 'required'
//        ]);
        $employee = Employee::find($id);

        $employee->FirstName = $request->input('FirstName');
        $employee->MI = $request->input('MI');
        $employee->LastName = $request->input('LastName');
        $employee->HouseNumber = $request->input('HouseNumber');
        $employee->Street = $request->input('Street');
        $employee->City = $request->input('City');
        $employee->County = $request->input('County');
        $employee->EmployeeState = $request->input('EmployeeState');
        $employee->EmployeeCountry = $request->input('EmployeeCountry');
        $employee->Zip = $request->input('Zip');
        $employee->DateOfBirth = $request->input('DateOfBirth');
        $employee->HireDate = $request->input('HireDate');
        $employee->LicenseDate = $request->input('LicenseDate');
        $employee->TerminationDate = $request->input('TerminationDate');
        $employee->Salary = $request->input('Salary');
        $employee->save();

        return $employee->id;
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        // Since we told set our database to cascade on delete,
        // it's going to automatically delete the accidents that depend on an employee.
        //  We also set accidents to cascade on delete so the claims will delete as the accidents are deleted.
    }
}
