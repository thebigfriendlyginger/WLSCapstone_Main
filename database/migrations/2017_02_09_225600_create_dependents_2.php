<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDependents2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accidents', function (Blueprint $table)
        {
            $table->increments('id');
            $table->unsignedInteger('EmployeeID');
            $table->date('AccidentDate');
            $table->string('AccidentDescription', 255)->nullable();
            $table->char('AccidentState', 2)->nullable();
            $table->char('AccidentCountry', 2);
            $table->datetime('updated_at')->nullable();
            $table->datetime('created_at')->nullable();
        });

        Schema::table('accidents', function (Blueprint $table)
        {
            $table->foreign('EmployeeID')
                ->references('id')->on('employees')
                ->onDelete('cascade');
            $table->foreign('AccidentCountry')
                ->references('CountryAbb')->on('countries')
                ->onDelete('cascade');
            $table->foreign('AccidentState')
                ->references('StateAbb')->on('usstates')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('Accident');
    }
}
