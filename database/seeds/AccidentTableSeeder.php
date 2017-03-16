<?php

use Illuminate\Database\Seeder;
use App\Accident;

class AccidentTableSeeder extends Seeder
{
    public $timestamps = false;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Accident::class, 15)->create();
    }
}
