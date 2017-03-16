<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

// We use parents and dependents to make sure foreign key constraints are maintained.
// The structure for this is simple: we will take dependents_3 for instance:
    // all tables created in dependents_3 have a foreign key from a table in dependents_2,
    // tables in dependents_2 will have a FK in dependents_1,
    // dependents_1 have a FK in a parent table (a table with no foreign key)

class CreateParents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table)
        {
            $table->char('CountryAbb', 2)->primary();
            $table->string('CountryName');
        });

        Schema::create('usstates', function (Blueprint $table)
        {
            $table->char('StateAbb', 2)->primary();
            $table->string('StateName');
            $table->char('CountryAbb', 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
