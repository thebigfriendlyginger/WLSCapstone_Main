<?php

use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            'CountryAbb' => 'US',
            'CountryName' => 'United States',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'DE',
            'CountryName' => 'Germany',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'PL',
            'CountryName' => 'Poland',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'DK',
            'CountryName' => 'Denmark',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'IE',
            'CountryName' => 'Ireland',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'FR',
            'CountryName' => 'France',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'ES',
            'CountryName' => 'Spain',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'IT',
            'CountryName' => 'Italy',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'CH',
            'CountryName' => 'Switzerland',
        ]);
        DB::table('countries')->insert([
            'CountryAbb' => 'SE',
            'CountryName' => 'Sweden',
        ]);
    }
}
