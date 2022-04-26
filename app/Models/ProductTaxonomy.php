<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTaxonomy extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug'
    ];

    public function productCategories(){
        return $this->hasMany(ProductCategory::class);
    }
}
