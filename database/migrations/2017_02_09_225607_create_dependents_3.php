<?php

//use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDependents3 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claims', function (Blueprint $table)
        {
            $table->increments('id');
            $table->unsignedInteger('AccidentID');
            $table->string('ClaimDescription', 255);
            $table->date('ClaimDate');
            $table->char('ClaimState', 2)->nullable();
            $table->char('ClaimCountry', 2);
            $table->double('ClaimAmount', 10, 2);
            $table->datetime('updated_at')->nullable();
            $table->datetime('created_at')->nullable();
        });

        Schema::table('claims', function (Blueprint $table)
        {
            $table->foreign('AccidentID')
                ->references('id')->on('accidents')
                ->onDelete('cascade');
            $table->foreign('ClaimState')
                ->references('StateAbb')->on('usstates')
                ->onDelete('cascade');
            $table->foreign('ClaimCountry')
                ->references('CountryAbb')->on('countries')
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
        Schema::drop('Claim');
    }
}
