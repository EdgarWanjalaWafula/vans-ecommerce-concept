<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\ProductTaxonomy;

class ProductTaxonomySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $taxonomies = [
            'Men', 
            'Women',
            'Kids',
            'Classics',
            'Skate',
            'customs'
        ];

        foreach ($taxonomies as $taxonomy) {
            ProductTaxonomy::create([
                'title'                 => $taxonomy, 
                'slug'                  => Str::slug($taxonomy), 
            ]);   
        }
    }
}
