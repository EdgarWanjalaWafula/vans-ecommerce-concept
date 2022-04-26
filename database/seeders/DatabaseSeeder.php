<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Post::factory(20)->create();
        \App\Models\Product::factory(50)->create();
        $this->call(ProductTaxonomySeeder::class);
        $this->call(ProductCategorySeeder::class);
        $this->call(ProductSubCategorySeeder::class);
    }
}