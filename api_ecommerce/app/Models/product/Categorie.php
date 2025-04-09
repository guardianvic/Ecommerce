<?php

namespace App\Models\Product;

use Carbon;
use App\Models\Product\Categorie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categorie extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        "name",
        "icon",
        "imagen",
        "categorie_second_id",
        "categorie_third_id",
        "position",  
        "type_categorie",
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

    public function categorie_second(){
        return $this->belongsTo(Categorie::class,"categorie_second_id");
    }

    public function categorie_third(){
        return $this->belongsTo(Categorie::class,"categorie_third_id");
    }
}
