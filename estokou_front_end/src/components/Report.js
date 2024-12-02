
import '../css/Report.css';
import UserNavbar from './UserNavbar';
import Toast from 'react-bootstrap/Toast';
import api from '../servico/App';
import Profile from './Profiles';
import { useEffect, useState } from 'react';

function TableReport() {
    const storageId = Profile.getStorageId();
    const [search, setSearch] = useState("");
    const [movimentacoes, setMovimentacoes] = useState([]);
    useEffect(() => {
        const fetchEstoques = async () => {
            try {
                const responseMovi = await api.get('/api/movimentacao?id_estoque=' + storageId); // Altere para o endpoint correto
                const movimentacoes = responseMovi.data;
                setMovimentacoes(movimentacoes);
            } catch (err) {
                console.error("Erro ao buscar estoques: ", err);
            }
        };
        fetchEstoques();
    }, [storageId]);

    // Filtrar entradas e saídas
    const entradas = movimentacoes.filter(movimentacao => movimentacao.operacao === 1);
    const saidas = movimentacoes.filter(movimentacao => movimentacao.operacao !== 1);
    console.log("entradas", movimentacoes[0].operacao)
    // Calcular totais
    const totalEntradas = entradas.reduce((acc, mov) => acc + mov.quantidadeMovi, 0);
    const totalSaidas = saidas.reduce((acc, mov) => acc + mov.quantidadeMovi, 0);
    const saldoFinal = totalEntradas - totalSaidas;

    const movimentacoesFiltrados = movimentacoes
    return (
        <div className='container'>
            <UserNavbar />

            <h1>Relatório de Movimentações</h1>

            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Data inicial</strong>
                    <small>08/10/22</small>
                </Toast.Header>

                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Data final</strong>
                    <small>12/10/22</small>
                </Toast.Header>
            </Toast>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>

            <table className="table">
                <thead>
                    <tr>
                        <th>Movimentações</th>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Produtos</th>
                        <th>operação</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacoesFiltrados.map((movimentacao) => (
                        <tr key={movimentacao.id}>
                            <td>{movimentacao.id || "N/A"}</td>
                            <td>{movimentacao.data || "N/A"}</td>
                            <td>{movimentacao.quantidadeMovi || "N/A"}</td>
                            <td>{movimentacao.id_prod || "N/A"}</td>
                            <td>{movimentacao.operacao ? "Entrada" : "Saída"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="table">
                <thead>
                    <tr>
                        <th>Valor Total de Entrada</th>
                        <th>Valor Total de Saída</th>
                        <th>Balanço Final</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{totalEntradas.toFixed(2)}</td>
                        <td>{totalSaidas.toFixed(2)}</td>
                        <td>{saldoFinal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

        </div >

    );
}
export default TableReport;