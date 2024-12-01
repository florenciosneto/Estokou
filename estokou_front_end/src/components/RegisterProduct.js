import React, { useState } from 'react';
import BaseBoard from './BaseBoard';
import '../css/RegisterProduct.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './UserNavbar';
import { useNavigate } from 'react-router-dom';
import api from "../servico/App";
import profile from './Profiles';
import Checker from './Checker';

const RegisterProduct = () => {

    const navigate = useNavigate()
    const [name, setName] = useState()
    const [supplier, setSupplier] = useState()
    const [amount, setAmount] = useState()
    const [price, setPrice] = useState()
    const [checkbox, setCheckbox] = useState()

    function handleCheckbox(e) {
        setCheckbox(e.target.checked);
    };

    const CadastrarProduto = async (e) => {
        e.preventDefault()
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();

        try {
            const response = await api.post("/api/produto", {
                nome: name,  // Envia o valor diretamente
                quantidade: amount,
                fornecedor: supplier,
                preco: parseFloat(price),
                fragilidade: checkbox,
            })

            var location = response.data.location.substring(api.getUri().length);
            var produtoID = ((await api.get(location)).data.id)

            await api.post("/api/movimentacao", {
                id_estoque: profile.getStorageId(),  // Envia o valor diretamente
                id_prod: produtoID,
                data: `${dia}/${mes}/${ano}`,
                quantidadeMovi: amount,
                operacao: 1,
            });

            alert("Produto cadastrado com sucesso!");
            navigate("/usuario")
        } catch (err) {
            console.error("Erro ao cadastrar Produto: ", err);
            alert("Ocorreu um erro ao cadastrar o Produto.");
        }


    }

    return (

        <div className='RegisterProductBody'>
            <Checker/>
            <UserNavbar />
            <div className='form'>
                <Form onSubmit={CadastrarProduto}>
                    <Form.Group className="mb-3" controlId="Name" value={name} onChange={(e) => setName(e.target.value)} name='name'>
                        <Form.Label>Insira o seu nome do produto</Form.Label>
                        <Form.Control type="text" placeholder="Feijão" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} name='supplier'>
                        <Form.Label>Insira o seu nome do produto</Form.Label>
                        <Form.Control type="text" placeholder="Slup" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} name='amount'>
                        <Form.Label>Insira a Quantidade</Form.Label>
                        <Form.Control type='number' placeholder="130" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Price" value={price} onChange={(e) => setPrice(e.target.value)} name='price'>
                        <Form.Label>Insira o Preço Unitário</Form.Label>
                        <Form.Control type="text" placeholder="120,00" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" value={checkbox} onChange={handleCheckbox}>
                        <Form.Check type="checkbox" label="O produto é frágil?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
};

export default RegisterProduct;