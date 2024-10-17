<?php

namespace App\Http\Controllers;

use App\Models\Estoques;
use Illuminate\Http\Request;
use App\Models\Usuario;

class EstoquesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $estoques = Estoques::all();
        return $estoques;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $idUsario = $request->input('id_usuario');
        $idverificado = Usuario::find($idUsario);
        if ($idverificado) {
            $nome = $request->input('nome');
            $p = Estoques::create(['nome' => $nome, 'id_usuario' => $idverificado]);
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Estoques  $estoques
     * @return \Illuminate\Http\Response
     */
    public function show(Estoques $estoques, $id)
    {
        $estoque = Estoques::find($id);

        // Verifica se o estoque foi encontrado
        if ($estoque) {
            return response($estoque, 200);
        }

        return response(['error' => 'Estoque nao encontrado'], 404);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Estoques  $estoques
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Estoques $estoques)
    {
        
        $idUsario = request()->input('id_usuario');
        $idverificado = Usuario::find($idUsario);
        if ($idverificado) {
            $estoques->id_usuario = $idverificado -> id;
            $nome = request()->input('nome');
            if ($nome)
                $estoques->nome = $nome;

            $estoques->save();
        } else {
            return response(['error' => '  O id do usuário informado nao existe'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Estoques  $estoques
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estoques $estoques,$id)
    {
        $estoque = Estoques::find($id);

        if (!$estoque) {
            return response(['error' => 'Estoque não encontrado'], 404);
        }
        $estoque->delete();
        return response(['message' => 'Estoque excluído com sucesso'], 200);
    }
}
