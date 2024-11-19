<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class movimentacao extends Model
{
    use HasFactory;
    
    protected $fillable = [
     'id_estoque', 'peso','quantidade','operacao',"id_prod","data"
    ];
    
}
