<?php

namespace App\Http\Controllers;

use App\Models\movimentacao;
use Illuminate\Http\Request;
use App\Models\Estoques;
use App\Models\produto;

class MovimentacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movimentacao = movimentacao::all();
        return $movimentacao;
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
        $idEstoque = $request->input('id_estoque');
        $estoque = Estoques::find($idEstoque);
        $idproduto = $request->input('id_prod');
        $produto = produto::find($idproduto);
        if ($estoque) {
            $data = $request->input('data');
            $quantidade = $request->input('quantidade');
            $operacao = $request->input('operacao');
            if ($operacao == null) {
                $operacao = 'soma';
            } else {
                $operacao = 'subtracao';
            }
            if (!$produto && $operacao == 'subtracao') {
                return response(
                    ['error' => 'Produto nao encontrado'],
                    404
                );
            }
            $p = movimentacao::create(['id_estoque' => $estoque->id, 'id_prod' => $produto->id, 'quantidade' => $quantidade, 'data' => $data, 'operacao' => $operacao]);
            $id = $p->id;

            return response(
                ['location' => route('movimentacao.show', $id)],
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
     * @param  \App\Models\movimentacao  $movimentacao
     * @return \Illuminate\Http\Response
     */
    public function show(movimentacao $movimentacao)
    {
        return response($movimentacao, 200);
    }


    public function update(Request $request, movimentacao $movimentacao)
    {
        $idEstoque = $request->input('id_estoque');
        # TODO: Avisar ao usuário que ele não pode trocar o id do estoque, caso ele tente
        if ($idEstoque != $movimentacao->id_estoque) {
            return response('O id informado é diferente do original', status: 400);
        }
        $idproduto = request()->input('idprod');
        if ($idproduto)
            $movimentacao->id_prod = $idproduto;

        $operacao = request()->input('operacao');
        if ($operacao == null) {
            $operacao = 'soma';
        } else {
            $operacao = 'subtracao';
        }
        if ($operacao)
            $movimentacao->operacao = $operacao;

        $quantidade = request()->input('quantidade');
        if ($quantidade)
            $movimentacao->quantidade = $quantidade;

        $data = request()->input('data');
        if ($data)
            $movimentacao->data = $data;

        $movimentacao->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\movimentacao  $movimentacao
     * @return \Illuminate\Http\Response
     */
    public function destroy(movimentacao $movimentacao)
    {
        $movimentacao->delete();
    }
}
