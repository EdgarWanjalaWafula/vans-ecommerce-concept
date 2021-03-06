<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'product_taxonomy_id'
    ];

    public function productCategory(){
        return $this->hasMany(Product::class);
    }

    public function productSubCategories(){
        return $this->hasMany(ProductSubCategory::class);
    }
}
