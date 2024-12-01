<?php

namespace App\Http\Controllers;
use App\Models\Estoques;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;

class EstoquesController extends Controller
{

    public function index()
    {
        $idUsuario = request()->input('id_usuario');
        $estoque = DB::table('estoques');
        if ($idUsuario) {
            $estoque->where('id_usuario', '=', $idUsuario);
        }
        return $estoque->get();
    }

    public function store(Request $request)
    {
        $idUsario = $request->input('id_usuario');
        $usuario = Usuario::find($idUsario);
        if ($usuario) {
            $nome = $request->input('nome');
            $p = Estoques::create(['nome' => $nome, 'id_usuario' => $usuario->id]);
            $id = $p->id;

            return response(
                ['location' => route('estoques.show', $id)],
                201
            );
        }
        return response(
            ['error' => 'Usuario nao encontrado'],
            404
        );
    }


    public function show(Estoques $estoque)
    {
        return response($estoque, 200);
    }

    public function update(Request $request, Estoques $estoque)
    {

        $idUsuario = $request->input('id_usuario');
        # TODO: Avisar ao usuário que ele não pode trocar o id do estoque, caso ele tente
        if ($idUsuario != $estoque->id_usuario) {
            return response('O id informado é diferente do original', status: 400);
        }

        $nome = request()->input('nome');
        if ($nome)
            $estoque->nome = $nome;

        $estoque->save();
    }

    public function destroy(Estoques $estoque)
    {
        $estoque->delete();
    }
}
