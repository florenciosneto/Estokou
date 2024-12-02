import { useEffect, useState } from 'react';
import '../css/TableProdut.css';
import api from "../servico/App";
import profile from './Profiles';
import DropdownProd from './DropdownProd';


function TableProdut() {
    const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
    const [search, setSearch] = useState(""); // Estado para o campo de busca

    useEffect(() => {
        const fetchProdutos = async () => {
            const storageId = profile.getStorageId();
            try {
                const responseMovi = await api.get('/api/movimentacao?id_estoque=' + storageId); // Altere para o endpoint correto
                const movimentacoes = responseMovi.data;

                // Extrai os IDs dos produtos das movimentações
                const produtoIds = movimentacoes.map(mov => mov.id_prod);

                // Faz uma requisição para obter os produtos cujos IDs estão em produtoIds
                const produtosPromises = produtoIds.map(id =>
                    api.get(`/api/produto?id=${id}`)
                );

                // Aguarda todas as requisições serem concluídas
                const responses = await Promise.all(produtosPromises);

                // Extrai os dados de cada produto
                const produtos = responses.flatMap(res => res.data);
                setProdutos(produtos);


            } catch (err) {
                console.error("Erro ao buscar produtos: ", err);
        };
    }
        fetchProdutos();
    }, []);

    const produtosFiltrados = produtos
        .filter((produto, index, self) =>
            self.findIndex(p => p.id === produto.id) === index
        )
        .filter((produto) =>
            produto.nome.toLowerCase().includes(search.toLowerCase())
        );

    function handleEdit(id) {
        profile.setProductId(id);

    }

    function handleDelete(id) {
        if (window.confirm('Tem certeza de que deseja excluir este produto?')) {
            const response1 = api.delete(`/api/produto/${id}`)
                .then(() => {
                    alert('Produto excluído com sucesso!');
                    setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));
                })
                .catch((error) => {
                    console.error('Erro ao excluir o produto:', error);
                    alert('Erro ao excluir o produto.');
                });
        }
    }

    return (
        <div className="container">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="procurar" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </div>
                <div className="buttons">
                    <button className="btn"><a href='/usuario/produtos'><i className="fas fa-plus-circle"></i> Adicionar Produto</a></button>
                    <button className="btn"><a href='/usuario/produtos/desconto'><i className="fas fa-minus-circle"></i> Descontar Produto</a></button>
                    <button className="btn"><a href='/usuario/estoque'><i className="fas fa-box-open"></i> Adicionar Estoque</a></button>
                    <DropdownProd/>


                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Preço Total</th>
                        <th>Fragilidade</th>
                        <th>Fornecedor</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosFiltrados.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.preco.toFixed(2)}</td>
                            <td>{(produto.quantidade * produto.preco).toFixed(2)}</td>
                            <td>{produto.fragilidade ? "Sim" : "Não"}</td>
                            <td>{produto.fornecedor || "N/A"}</td>
                            <td className='teste'>
                                <a href={`/usuario/produtos/edicao`} onClick={() => handleEdit(produto.id)}><i class="fa-solid fa-pen-to-square"> editar</i></a>
                                <a onClick={() => handleDelete(produto.id)}><i class="fa-solid fa-trash">Apagar</i></a>
                            </td>
                        </tr>
                    ))}
                    <a href='/usuario/relatorio'><button>Gerar relatório</button></a>
                </tbody>

            </table>
        </div >
    );
}

export default TableProdut;