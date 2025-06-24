<?php

namespace App\Http\Resources\Discount;

use Illuminate\Http\Request;
use App\Http\Resources\Discount\DiscountResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class DiscountCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "data" => DiscountResource::collection($this->collection),
        ];
    }
}
