<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{

    public function index()
    {
        $usuario = usuario::all();
        return $usuario;
    }

    public function store(Request $request)
    {
        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');
        $p = usuario::create(['nome' => $nome, 'email' => $email, 'senha' => $senha]);
        $id = $p->id;
        return response(
            ['location' => route('usuarios.show', $id)],
            201
        );
    }

    public function show(usuario $usuario)
    {
        return $usuario;
    }

    public function update(Request $request, usuario $usuario)
    {
        $nome = request()->input('nome');
        if ($nome)
            $usuario->nome = $nome;
        $email = request()->input('email');
        if ($email)
            $usuario->email = $email;
        $senha = request()->input('senha');
        if ($senha)
            $usuario->senha = $senha;
        $usuario->save();

    }
    
    public function destroy(usuario $usuario)
    {
        $usuario->delete();
    }
}
