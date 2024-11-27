import { useEffect, useState } from 'react';
import '../css/TableProdut.css';
import api from "../servico/App";
import profile from './Profiles';

function TableProdut() {
    const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
    const [search, setSearch] = useState(""); // Estado para o campo de busca

    // Busca os produtos ao montar o componente
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await api.get('/api/movimentacao/'+ profile.getStorageId); // Altere para o endpoint correto
                setProdutos(response.data);
                
            } catch (err) {
                console.error("Erro ao buscar produtos: ", err);
            }
        };
        fetchProdutos();
    }, []);
    const produtosFiltrados = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="procurar" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </div> 
                <div className="buttons">
                    <button className="btn"><a href='/usuario/produtos'><i className="fas fa-plus-circle"></i> Adicionar Produto</a></button>
                    <button className="btn"><a href='/'><i className="fas fa-minus-circle"></i> Descontar Produto</a></button>
                    <button className="btn"><a href='/usuario/estoque'><i className="fas fa-box-open"></i> Adicionar Estoque</a></button>
                    <button className="btn"><a href=''><i className="fas fa-exchange-alt"></i> Trocar Estoque</a></button>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Preço Total</th>
                        <th>Fragilidade</th>
                        <th>Fornecedor</th>
                    </tr>
                </thead>
                <tbody>
                {produtosFiltrados.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.preco.toFixed(2)}</td>
                            <td>{(produto.quantidade * produto.preco).toFixed(2)}</td>
                            <td>{produto.fragilidade ? "Sim" : "Não"}</td>
                            <td>{produto.fornecedor || "N/A"}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div >
    );
}

export default TableProdut;