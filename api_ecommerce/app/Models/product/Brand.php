<?php

namespace App\Models\Product;

use Carbon\Carbon;
use App\Models\Product\Product;
use App\Models\Discount\DiscountBrand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Brand extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [

        "name",
        "imagen",
        "state"
    ];

    public function setCreatedAtAttribute()
    {
        $this->attributes['created_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

   
    public function setUpdatedAtAttribute()
    {
        $this->attributes['updated_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

    public function products(){
        return $this->hasMany(Product::class);
    }

    public function discount_brands() {
        return $this->hasMany(DiscountBrand::class,"brand_id");
    }
}
