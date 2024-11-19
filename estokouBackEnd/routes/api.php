<?php

use App\Models\Usuario;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\EstoquesController;
use App\Http\Controllers\MovimentacaoController;
use App\Models\Estoques;
use App\Models\Pacotes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Aqui você pode definir suas rotas de API
Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('produto', ProdutoController::class);
Route::apiResource('estoques', EstoquesController::class);
Route::apiResource('movimentacao', MovimentacaoController::class);