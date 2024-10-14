<?php

use App\Models\Usuario;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\PacotesController;
use App\Models\Pacotes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Aqui você pode definir suas rotas de API
Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('pacotes', PacotesController::class);