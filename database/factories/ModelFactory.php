<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/* step 2: Optional step
 * define models for your insert statements
 * Use the Faker\Generator classes to randomly create many rows of data
 * This way you don't have to write dozens of insert statements to test results
 */
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Employee::class, function (Faker\Generator $faker) {
    return [
        'FirstName' =>$faker->firstName,
        'MI' => $faker->toUpper($faker->randomLetter),
        'LastName' => $faker->lastName,
        'HouseNumber' =>$faker->numberBetween(100,99999),
        'Street' => $faker->streetName,
        'City' => $faker->city,
        'County' => $faker->city,
        'EmployeeState' => $faker->randomElement(['VA','CA','TX',null, null, null, null, null]),
        'EmployeeCountry' => $faker->randomElement(['US','SE','DE','PL','DK','IE','ES','IT','CH']),
        'Zip' => $faker->numberBetween(10000,99999),
        'DateOfBirth' => $faker->date('Ymd'),
        'HireDate' => $faker->date('Ymd'),
        'LicenseDate' => $faker->date('Ymd'),
        'TerminationDate' => $faker->date('Ymd'),
        'Salary' => $faker->randomFloat(2,100,99999),
    ];
});

$factory->define(App\Accident::class, function (Faker\Generator $faker) {
    return [
        'EmployeeID' => $faker->numberBetween(1,10),
        'AccidentDate' =>$faker->date('Ymd'),
        'AccidentDescription' =>$faker->text(200),
        'AccidentState' =>$faker->randomElement(['VA','CA','TX',null, null, null, null, null]),
        'AccidentCountry' =>$faker->randomElement(['US','SE','DE','PL','DK','IE','ES','IT','CH']),
    ];

});

$factory->define(App\Claim::class, function (Faker\Generator $faker) {
    return [
        'AccidentID' => $faker->numberBetween(1,15),
        'ClaimDate' =>$faker->date('Ymd'),
        'ClaimDescription' =>$faker->text(200),
        'ClaimState' =>$faker->randomElement(['VA','CA','TX',null, null, null, null, null]),
        'ClaimCountry' =>$faker->randomElement(['US','SE','DE','PL','DK','IE','ES','IT','CH']),
        'ClaimAmount' =>$faker->randomFloat(2,10,100000),
    ];

});