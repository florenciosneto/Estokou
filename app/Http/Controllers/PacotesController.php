<?php

namespace App\Http\Controllers;

use App\Models\Pacotes;
use Illuminate\Http\Request;

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
        $nome = $request ->input('nome');
        $peso = $request ->input('peso');
        $quantidade = $request ->input('quantidade');
        $fragilidade = $request ->input('fragilidade');
        $p = pacotes::create(['nome' => $nome, 'peso' => $peso, 'quantidade' => $quantidade, 'fragilidade' => $fragilidade]);
        $id = $p->id;
        return response(
            ['location' => route('pacotes.show', $id)],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pacotes  $pacotes
     * @return \Illuminate\Http\Response
     */
    public function show(Pacotes $pacotes)
    {
       return $pacotes;
        
    }

    public function update(Request $request, Pacotes $pacotes)
    {
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
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pacotes  $pacotes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pacotes $pacotes)
    {
        $pacotes->delete();
    }
}
