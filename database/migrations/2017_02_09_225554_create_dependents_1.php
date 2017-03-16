<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

    /*  Step 1:
     * Create the tables and set the foreign keys
     * The connection to the database lives in your .env file int he root of the application structure
     */
class CreateDependents1 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // step 1: Create the tables and define their columns
        
        Schema::create('employees', function (Blueprint $table)
        {
            $table->increments('id');
            $table->string('FirstName');
            $table->char('MI', 1)->nullable();
            $table->string('LastName');
            $table->integer('HouseNumber')->nullable();
            $table->string('Street')->nullable();
            $table->string('City')->nullable();
            $table->string('County')->nullable();
            $table->char('EmployeeState', 2)->nullable();
            $table->char('EmployeeCountry', 2);
            $table->char('Zip', 5);
            $table->date('DateOfBirth');
            $table->date('HireDate');
            $table->date('LicenseDate')->nullable();
            $table->date('TerminationDate')->nullable();
            $table->double('Salary', 10, 2)->nullable();
            $table->datetime('updated_at')->nullable();
            $table->datetime('created_at')->nullable();
        });

        Schema::table('employees', function (Blueprint $table)
        {
            $table->foreign('EmployeeState')
                ->references('StateAbb')->on('usstates')
                ->onDelete('cascade');
            $table->foreign('EmployeeCountry')
                ->references('CountryAbb')->on('countries')
                ->onDelete('cascade');
        });

    }
}
