<?php

namespace App\Http\Controllers;

use App\Models\produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{

    public function index()
    {
        $produto = produto::all();
        return $produto;
    }

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

    public function show(produto $produto)
    {
        return response($produto, 200);
    }

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
            $produto->fragilidade = $fragilidade;
        }
        $produto->save();
    }

    public function destroy(produto $produto)
    {
        $produto->delete();
    }
}
