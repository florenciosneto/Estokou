<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuario = usuario::all();
        return $usuario;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(usuario $usuario)
    {
        return $usuario;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pacotes $pacotes)
    {
        $idEstoque = $request->input('id_estoque');
        $idverificado = Estoques::find($idEstoque);
        if ($idverificado) {
            $pacotes->id_estoque = $idverificado;
            $nome = request()->input('nome');
            if ($nome)
                $pacotes->nome = $nome;
            $peso = request()->input('peso');
            if ($peso)
                $pacotes->peso = $peso;
            $pacotes->save();
            $quantidade = request()->input('quantidade');
            if ($quantidade)
                $pacotes->quantidade = $quantidade;
            $pacotes->save();
            $fragilidade = request()->input('fragilidade');
            if ($fragilidade)
                $pacotes->fragilidade = $fragilidade;
            $pacotes->save();
        };
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(usuario $usuario)
    {
        $usuario->delete();
    }
}
