<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use App\Http\Resources\product\CategorieResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CategorieCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "data" => CategorieResource::collection(this->collection),
        ];
    }
}
