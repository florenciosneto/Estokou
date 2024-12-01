import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import api from "../servico/App"; // Certifique-se de importar sua instância de API

function BasicExample() {
    const [estoques, setEstoques] = useState([]); // Estado para armazenar os estoques

    // Fetch produtos ao montar o componente
    useEffect(() => {
        const fetchEstoques = async () => {
            try {
                const response = await api.get('/api/estoques'); // Certifique-se de que o endpoint correto está sendo usado
                setEstoques(response.data); // Armazena os estoques no estado
            } catch (err) {
                console.error("Erro ao buscar estoques: ", err);
            }
        };
        fetchEstoques();
    }, []);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Trocar estoque
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {estoques.length > 0 ? (
                    // Mapeia os estoques e cria um item para cada um
                    estoques.map((estoque) => (
                        <Dropdown.Item key={estoque.id} href={`#/action-${estoque.id}`}>
                            {estoque.nome} {/* Ajuste para a propriedade que representa o nome do estoque */}
                        </Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.Item disabled>Carregando estoques...</Dropdown.Item> // Exibe uma mensagem enquanto os estoques são carregados
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;
