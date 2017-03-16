<?php

use Illuminate\Database\Seeder;

class USStateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('usstates')->insert([
            'StateAbb' => 'VA',
            'StateName' => 'Virginia',
            'CountryAbb' => 'US',
        ]);
        DB::table('usstates')->insert([
            'StateAbb' => 'TX',
            'StateName' => 'Texas',
            'CountryAbb' => 'US',
        ]);
        DB::table('usstates')->insert([
            'StateAbb' => 'CA',
            'StateName' => 'California',
            'CountryAbb' => 'US',
        ]);
    }
}
