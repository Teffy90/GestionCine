<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proyeccions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombrePelicula', 80);
            $table->dateTime('fecha-hora');
            $table->string('numAsientos', 10);
            $table->unsignedBigInteger('sala_id');
            $table->timestamps();

            $table->foreign('sala_id')->references('id')->on('salas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyeccions');
    }
};
