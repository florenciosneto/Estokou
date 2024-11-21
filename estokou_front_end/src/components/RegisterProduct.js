import React from 'react';
import Navbar from "./Navbar";
import BaseBoard from './BaseBoard';
import '../css/Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterProduct = () => {
    return (
        <div className='registerProductBody'>
            <Navbar></Navbar>
            <div className='form'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Insira o seu nome do produto</Form.Label>
                        <Form.Control type="text" placeholder="Feijão" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Label>Insira a Quantidade</Form.Label>
                        <Form.Control type='number' placeholder="130" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Insira o Preço Unitário</Form.Label>
                        <Form.Control type="Number" placeholder="120,00" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
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