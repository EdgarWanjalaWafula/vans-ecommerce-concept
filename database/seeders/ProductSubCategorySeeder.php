<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\ProductSubCategory;

class ProductSubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subcategories = [
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

        foreach ($subcategories as $subcategory) {
            ProductSubCategory::create([
                'title'                 => $subcategory, 
                'slug'                  => Str::slug($subcategory), 
                'product_category_id' => rand(1,4)
            ]);   
        }
    }
}
