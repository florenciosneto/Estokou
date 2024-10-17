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
        $idEstoque = $request->input('id_estoque');
        $idverificado = Estoques::find($idEstoque);
        if ($idverificado) {
            $nome = $request->input('nome');
            $peso = $request->input('peso');
            $quantidade = $request->input('quantidade');
            $fragilidade = $request->input('fragilidade');
            if ($fragilidade == null) {
                $fragilidade = false;
            } else {
                $fragilidade = true;
            }
            $p = pacotes::create(['id_estoque' => $idEstoque, 'nome' => $nome, 'peso' => $peso, 'quantidade' => $quantidade, 'fragilidade' => $fragilidade]);
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
    public function show(Pacotes $pacotes, $id)
    {
        $pacotes = Pacotes::find($id);

        if ($pacotes) {
            return response($pacotes, 200);
        }

        return response(['error' => 'Pacote nao encontrado'], 404);
    }

    public function update(Request $request, Pacotes $pacotes)
    {
        $idEstoque = $request->input('id_estoque');
        $idverificado = Estoques::find($idEstoque);
        if ($idverificado) {
            $pacotes->id_estoque = $idverificado->id;
            $nome = request()->input('nome');
            if ($nome)
                $pacotes->nome = $nome;
            $peso = request()->input('peso');
            if ($peso)
                $pacotes->peso = $peso;
            
            $quantidade = request()->input('quantidade');
            if ($quantidade)
                $pacotes->quantidade = $quantidade;
            
            $fragilidade = request()->input('fragilidade');
            if ($fragilidade)
                $pacotes->fragilidade = $fragilidade;
            $pacotes->save();
        };
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pacotes  $pacotes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pacotes $pacotes, $id)
    {
        $pacote = Pacotes::find($id);

        if (!$pacote) {
            return response(['error' => 'pacote não encontrado'], 404);
        }
        $pacote->delete();
        return response(['message' => 'pacote excluído com sucesso'], 200);
    }
}
