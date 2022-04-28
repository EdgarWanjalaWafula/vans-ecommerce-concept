<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(5);
        return [
            'title' => $title,
            'slug'  => Str::slug($title),
            'price' => $this->faker->numberBetween($min = 800, $max = 2500),
            'image' => 'no-photo.jpg',
            'featured' => $this->faker->boolean(),
            'description'   => $this->faker->sentence(15),
            'product_category_id'   => $this->faker->numberBetween(1,4),
            'product_taxonomy_id'   => $this->faker->numberBetween(1,5),
        ];
    }
}