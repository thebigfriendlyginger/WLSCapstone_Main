<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

    // step 4: run database seeders
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        $this->call(CountryTableSeeder::class);
        $this->call(USStateTableSeeder::class);
        $this->call(EmployeesTableSeeder::class);
        $this->call(AccidentTableSeeder::class);
        $this->call(ClaimTableSeeder::class);
        Model::reguard();
    }

    // step 5: Insert tables
    // php artisan migrate
    // Insert all records
    // php artisan db:seed
}
