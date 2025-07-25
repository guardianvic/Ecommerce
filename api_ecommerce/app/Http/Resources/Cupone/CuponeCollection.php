<?php

namespace App\Http\Resources\Cupone;

use Illuminate\Http\Request;
use App\Http\Resources\Cupone\CuponeResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CuponeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "data" => CuponeResource::collection($this->collection),
        ];
    }
}
