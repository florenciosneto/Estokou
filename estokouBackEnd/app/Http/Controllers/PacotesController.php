<?php

namespace App\Http\Controllers;

use App\Models\Pacotes;
use Illuminate\Http\Request;
use App\Models\Estoques;

class PacotesController extends Controller
{
    public function index()
    {
        $pacotes = Pacotes::all();
        return $pacotes;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //verifica a existência do estoque o qual o pacote está associado
        $idEstoque = $request->input('id_estoque');
        $estoque = Estoques::find($idEstoque);
        if ($estoque) {
            $nome = $request->input('nome');
            $peso = $request->input('peso');
            $quantidade = $request->input('quantidade');
            $fragilidade = $request->input('fragilidade');
            if ($fragilidade == null) {
                $fragilidade = false;
            } else {
                $fragilidade = true;
            }
            $p = pacotes::create(['id_estoque' => $estoque ->id, 'nome' => $nome, 'peso' => $peso, 'quantidade' => $quantidade, 'fragilidade' => $fragilidade]);
            $id = $p->id;

            return response(
                ['location' => route('pacotes.show', $id)],
                201
            );
        }
        return response(
            ['error' => 'Estoque nao encontrado'],
            404
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pacotes  $pacotes
     * @return \Illuminate\Http\Response
     */
    public function show(Pacotes $pacote)
    {
        return response($pacote, 200);

    }

    public function update(Request $request, Pacotes $pacote)
    {
        $idEstoque = $request->input('id_estoque');
        # TODO: Avisar ao usuário que ele não pode trocar o id do estoque, caso ele tente
        if ($idEstoque != $pacote->id_estoque){
            return response('O id informado é diferente do original', status:400);
        }
        $nome = request()->input('nome');
        if ($nome)
            $pacote->nome = $nome;

        $peso = request()->input('peso');
        if ($peso)
            $pacote->peso = $peso;
        
        $quantidade = request()->input('quantidade');
        if ($quantidade)
            $pacote->quantidade = $quantidade;
        
        $fragilidade = request()->input('fragilidade');
        if ($fragilidade)
            $pacote->fragilidade = $fragilidade;
        
        $pacote->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pacotes  $pacotes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pacotes $pacote)
    {
        $pacote->delete();
    }
}
