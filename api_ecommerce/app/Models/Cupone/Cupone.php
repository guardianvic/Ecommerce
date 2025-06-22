<?php

namespace App\Models\Cupone;

use Carbon\Carbon;
use App\Models\Cupone\CuponeBrand;
use App\Models\Cupone\CuponeProduct;
use App\Models\Cupone\CuponeCategorie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cupone extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        "code",
        "type_discount",
        "discount",
        "type_count",
        "num_use",
        "type_cupone",
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

    public function categories(){
        return $this->hasMany(CuponeCategorie::class);
    }

    public function products(){
        return $this->hasMany(CuponeProduct::class);
    }

    public function brands(){
        return $this->hasMany(CuponeBrand::class);
    }

}
