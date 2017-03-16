<?php

use Illuminate\Database\Seeder;

class EmployeesTableSeeder extends Seeder
{
    // step 3: connect the ModelFactory to your Table Seeder
    // You can also run more specific types of commands here
    // For Now we just want to create 50 Employee records from the ModelFactory
    // The ModelFactory references App\Employee (the model), and the model references the employees table
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 50 represents the number of Employee objects the generator will seed into our database
        factory(App\Employee::class, 10)->create();
    }
}
