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
        Schema::create('agent_orders', function (Blueprint $table) {
            $table->id();
            $table->string('agentNaam');
            $table->string('agentEmail');
            $table->string('productNaam');
            $table->integer('productPrijs');
            $table->date('datum');
            $table->string('jumbaId');
            $table->boolean('gefactureerd');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agent_orders');
    }
};
