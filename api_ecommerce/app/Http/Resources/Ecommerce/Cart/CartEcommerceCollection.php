<?php

namespace App\Http\Resources\ecommerce\Cart;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\ecommerce\Cart\CartEcommerceResource;

class CartEcommerceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "data" => CartEcommerceResource::collection($this->collection),
        ];
    }
}
