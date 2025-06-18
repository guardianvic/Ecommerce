<?php

namespace App\Models\Product;

use Carbon\Carbon;
use App\Models\Product\Propertie;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product\ProductVariation;
use App\Models\Product\ProductSpecification;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attribute extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        
        "name",
        "type_attribute",       
        "state",

    ];

    public function setCreatedAtAttribute()
    {
        $this->attributes['created_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

   
    public function setUpdatedAtAttribute()
    {
        $this->attributes['updated_at'] = Carbon::now('America/Bogota')->toDateTimeString();
    }

    public function properties(){
        return $this->hasMany(Propertie::class);
    }

    public function specifications(){
        return $this->hasMany(ProductSpecification::class);
    }

    public function variations(){
        return $this->hasMany(ProductVariation::class);
    }
}
