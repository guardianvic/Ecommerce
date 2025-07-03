<?php

namespace App\Http\Resources\Ecommerce\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Ecommerce\product\ProductEcommerceResource;

class ProductEcommerceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $discount_g = null;

        $discount_collect = collect([]);

        $discount_product =  $this->resource->discount_product;
        if($discount_product){
            $discount_collect->push($discount_product);
        }
        $discount_categorie = $this->resource->discount_categorie;
        if($discount_categorie){
            $discount_collect->push($discount_categorie);
        }
        $discount_brand =  $this->resource->discount_brand;
        if($discount_brand){
            $discount_collect->push($discount_brand);
        }

        if($discount_collect->count() > 0){
            $discount_g = $discount_collect->sortByDesc("discount")->values()->all()[0];
        }



        return [
            "id" => $this->resource->id,
            "title" => $this->resource->title,
            "slug" => $this->resource->slug,
            "sku" => $this->resource->sku,
            "price_cop" => $this->resource->price_cop,
            "price_usd" => $this->resource->price_usd,
            "resumen" => $this->resource->resumen,
            "imagen" => env("APP_URL")."storage/".$this->resource->imagen,
            "state" => $this->resource->state,
            "description" => $this->resource->description,
            "tags" => $this->resource->tags ? json_decode($this->resource->tags) : [],
            "brand_id" => $this->resource->brand_id,
            "brand" => $this->resource->brand ? [
                 "id" => $this->resource->brand->id, 
                 "name" => $this->resource->brand->name,  
            ]: NULL,
            "categorie_first_id" => $this->resource->categorie_first_id,
            "categorie_first" => $this->resource->categorie_first ? [
                "id" => $this->resource->categorie_first->id, 
                 "name" => $this->resource->categorie_first->name, 
            ]: NULL,
            "categorie_second_id" => $this->resource->categorie_second_id,
            "categorie_second" => $this->resource->categorie_second ? [
                "id" => $this->resource->categorie_second->id, 
                 "name" => $this->resource->categorie_second->name, 
            ]: NULL,
            "categorie_third_id" => $this->resource->categorie_third_id,
            "categorie_third" => $this->resource->categorie_third ? [
                "id" => $this->resource->categorie_third->id, 
                 "name" => $this->resource->categorie_third->name, 
            ]: NULL,
            "stock" => $this->resource->stock,
            "created_at" => $this->resource->created_at->format("Y-m-d h:i:s"),
            "images" => $this->resource->images->map(function($image) {
                return [
                    "id" => $image->id,
                    "imagen" => env("APP_URL")."storage/".$image->imagen,
                ];
            }),
             "discount_g" => $discount_g,
            // "variations" => $variation_collect,
            // "avg_reviews" =>  $this->resource->reviews_avg ? round($this->resource->reviews_avg,2) : 0,
            // "count_reviews" =>  $this->resource->reviews_count,
            // "specifications" => $this->resource->specifications->map(function($specification){
            //     return [
            //         "id" => $specification->id,
            //         "product_id" => $specification->product_id,
            //         "attribute_id" => $specification->attribute_id,
            //         "attribute" => $specification->attribute ? [
            //             "name" => $specification->attribute->name,
            //             "type_attribute" => $specification->attribute->type_attribute,
            //         ] : NULL,
            //         "propertie_id" => $specification->propertie_id,
            //         "propertie" => $specification->propertie ? [
            //             "name" => $specification->propertie->name,
            //             "code" => $specification->propertie->code,
            //         ] : NULL,
            //         "value_add" => $specification->value_add,
            //     ];
            // })
        ];
    }
}
