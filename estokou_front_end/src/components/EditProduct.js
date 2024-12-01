import React, { useEffect, useState } from 'react';
import BaseBoard from './BaseBoard';
import '../css/EditProduct.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './UserNavbar';
import { useNavigate } from 'react-router-dom';
import api from "../servico/App";
import profile from './Profiles';
import Checker from './Checker';

const EditProduct = () => {

    const navigate = useNavigate()
    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [price, setPrice] = useState()
    const [checkbox, setCheckbox] = useState()

    function handleCheckbox(e) {
        setCheckbox(e.target.checked);
    };

    useEffect(() => {
        // Pega o parâmetro de rota "id"


        const fetchProdutos = async () => {
            try {
                const responseProd = await api.get('/api/produto/'+profile.getProductId());
                setAmount(responseProd.data.quantidade);
                setName(responseProd.data.nome);
                setPrice(responseProd.data.preco);
                setCheckbox(responseProd.data.checkbox);
            } catch (err) {
                console.error("Erro ao buscar produtos: ", err);
                console.log(profile.getProductId())
            }
        };
        fetchProdutos();
    }, []);

    const AtualizarProduto = async (e) => {
        e.preventDefault()

        try {
            await api.put("/api/produto/"+profile.getProductId(), {
                nome: name,  // Envia o valor diretamente
                quantidade: amount,
                preco: parseFloat(price),
                fragilidade: checkbox,
            })

            alert("Produto atualizado com sucesso!");
            navigate("/usuario")
        } catch (err) {
            console.error("Erro ao atualizar o Produto: ", err);
            alert("Ocorreu um erro ao atualizar o Produto.");
            console.log(profile.getProductId())
        }


    }

    return (

        <div className='EditProductBody'>
            <Checker/>
            <UserNavbar />
            <div className='form'>
                <Form onSubmit={AtualizarProduto}>
                    <Form.Group className="mb-3" controlId="Name" >
                        <Form.Label>Insira o seu nome do produto</Form.Label>
                        <Form.Control type="text"  placeholder={name} value={name} onChange={(e) => setName(e.target.value)} name='name'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Amount" >
                        <Form.Label>Insira a Quantidade</Form.Label>
                        <Form.Control type='number' placeholder={amount} value={amount} onChange={(e) => setAmount(e.target.value)} name='amount' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Price" >
                        <Form.Label>Insira o Preço Unitário</Form.Label>
                        <Form.Control type="text" placeholder={price} value={price} onChange={(e) => setPrice(e.target.value)} name='price' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                        <Form.Check type="checkbox" label="O produto é frágil?" value={checkbox} onChange={handleCheckbox}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Atualizar
                    </Button>
                </Form>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
};

export default EditProduct;