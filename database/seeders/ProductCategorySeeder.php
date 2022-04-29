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
            'Hats and beanies', 
            'Backpacks',
            'T-shirts',
            'Socks', 
            'Sun glasses',
            'Hoodies and jackets',
            'BMX',
            'Surf',
            'Pants and sweatpants',
            'Wallets and belts',
            'Kids (8-14)years',
            'Little kids (2-7)years',
            'Toddler',
            'Dresses and skirts',
            'Laces and shoe care',
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
