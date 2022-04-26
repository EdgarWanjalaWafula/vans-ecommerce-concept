<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
           'featured', 
           'shoes', 
           'clothing', 
           'accessories'
        ];

        foreach ($categories as $category) {
            ProductCategory::create([
                'title' => $category, 
                'slug' => Str::slug($category), 
                'product_taxonomy_id' => rand(1,6), 
            ]);   
        }
    }
}
