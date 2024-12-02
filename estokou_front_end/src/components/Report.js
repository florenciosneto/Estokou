
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
                console.log("data:", responseMovi.data)
            } catch (err) {
                console.error("Erro ao buscar estoques: ", err);
            }
        };
        fetchEstoques();
    }, [storageId]);
    console.log(movimentacoes)
    console.log(storageId)
    const movimentacoesFiltrados = movimentacoes

        .filter((movimentacao) =>
            movimentacao.nome?.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div>
            <UserNavbar />
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
            <h1>Relatório de Movimentações</h1>
            <div className="container">

                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Movimentações</th>
                            <th>Data</th>
                            <th>Quantidade</th>
                            <th>Produtos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimentacoesFiltrados.map((movimentacao) => (
                            <tr key={movimentacao.id}>
                                <td>{movimentacao.id || "N/A"}</td>
                                <td>{movimentacao.data || "N/A"}</td>
                                <td>{movimentacao.quantidade || "N/A"}</td>
                                <td>{movimentacao.id_prod || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Entrada R$</strong>
                    <small>190.000 R$</small>
                </Toast.Header>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Despesas R$</strong>
                    <small>190.000 R$</small>
                </Toast.Header>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Balanço final R$</strong>
                    <small>190.000 R$</small>
                </Toast.Header>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Lucro R$</strong>
                    <small>190.000 R$</small>
                </Toast.Header>

            </div >

        </div>
    );
}
export default TableReport;