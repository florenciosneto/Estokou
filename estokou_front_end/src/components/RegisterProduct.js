import React, { useState } from 'react';
import BaseBoard from './BaseBoard';
import '../css/RegisterProduct.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './UserNavbar';
import { useNavigate } from 'react-router-dom';


const RegisterProduct = () => {

    function cadastrarProduto(e) {
        e.preventDefault()
        alert(`O usuário ${name} foi cadastrado com a senha ${price}`)
        navigate('/usuario')
    }
    function handleCheckbox(e) {
        setCheckbox(e.target.value);
    };

    const navigate = useNavigate()
    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [price, setPrice] = useState()
    const [checkbox, setCheckbox] = useState()

    return (

        <div className='RegisterProductBody'>
            <UserNavbar />
            <div className='form'>
                <Form onSubmit={cadastrarProduto}>
                    <Form.Group className="mb-3" controlId="Name" value={name} onChange={(e) => setName(e.target.value)} name='name'>
                        <Form.Label>Insira o seu nome do produto</Form.Label>
                        <Form.Control type="text" placeholder="Feijão" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} name='amount'>
                        <Form.Label>Insira a Quantidade</Form.Label>
                        <Form.Control type='number' placeholder="130" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Price" value={price} onChange={(e) => setPrice(e.target.value)} name='price'>
                        <Form.Label>Insira o Preço Unitário</Form.Label>
                        <Form.Control type="Number" placeholder="120,00" />
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