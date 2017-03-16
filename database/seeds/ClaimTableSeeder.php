<?php

use Illuminate\Database\Seeder;

class ClaimTableSeeder extends Seeder
{
    public $timestamps = false;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Claim::class, 20)->create();
    }
}
