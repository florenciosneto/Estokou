import React from 'react';
import BaseBoard from './BaseBoard';
import '../css/RegisterProduct.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './UserNavbar';


const RegisterProduct = () => {
    return (
        
        <div className='RegisterProductBody'>
            <UserNavbar/>
            <div className='form'>
                <Form method='/usuario'>
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