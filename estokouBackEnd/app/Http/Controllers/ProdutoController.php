<?php

namespace App\Http\Controllers;

use App\Models\produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produto = produto::all();
        return $produto;
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
        $nome = $request->input('nome');
        $quantidade = $request->input('quantidade');
        $preco = $request->input('preco');
        $fragilidade = $request->input('fragilidade');
            if ($fragilidade == null) {
                $fragilidade = false;
            } else {
                $fragilidade = true;
            }
        $p = produto::create(['nome' => $nome, 'quantidade' => $quantidade, 'preco' => $preco, 'fragilidade' => $fragilidade]);
        $id = $p->id;
        return response(
            ['location' => route('produto.show', $id)],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function show(produto $produto)
    {
        return response($produto, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function edit(produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, produto $produto)
    {
        $nome = request()->input('nome');
        if ($nome)
            $produto->nome = $nome;
        $preco = request()->input('preco');
        if ($preco)
            $produto->preco = $preco;
        $quantidade = request()->input('quantidade');
        if ($quantidade)
            $produto->quantidade = $quantidade;
        $fragilidade = request()->input('fragilidade');
        if ($fragilidade) {
            $fragilidade->fragilidade = $fragilidade;
        }
        $produto->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function destroy(produto $produto)
    {
        $produto->delete();
    }
}
