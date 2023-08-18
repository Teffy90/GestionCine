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
        Schema::create('ventas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ubicacion',10);
            $table->string('precio',15);
            $table->string('cantidadEntradas',10);
            $table->unsignedBigInteger('proyeccion_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('proyeccion_id')->references('id')->on('proyeccions');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};
