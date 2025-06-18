<?php

namespace App\Models\Product;

use Carbon\Carbon;
use App\Models\Product\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product\ProductVariation;
use App\Models\Product\ProductSpecification;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Propertie extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        
        "attribute_id", 
        "name",              
        "code",

    ];

    public function setCreatedAtAttribute()
    {
        $this->attributes['created_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

   
    public function setUpdatedAtAttribute()
    {
        $this->attributes['updated_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

    public function specifications(){
        return $this->hasMany(ProductSpecification::class);
    }

    public function variations(){
        return $this->hasMany(ProductVariation::class);
    }

    public function attribute(){
        return $this->belongsTo(Attribute::class,"attribute_id");
    }

}
