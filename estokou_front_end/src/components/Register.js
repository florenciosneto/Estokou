import React from 'react';
import Navbar from "./Navbar";
import BaseBoard from './BaseBoard';
import '../css/Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
    return (
        <div className='registerBody'>
            <Navbar></Navbar>
            <div className='form'>
                <Form action='/usuario'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Insira o seu email</Form.Label>
                        <Form.Control type="email" placeholder="Exemplo@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Insira um Nome</Form.Label>
                        <Form.Control type='text' placeholder="Seu nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Crie uma Senha</Form.Label>
                        <Form.Control type="password" placeholder="*******" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Eu concordo com os termos que a empresa não escreveu ainda" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>

            <BaseBoard></BaseBoard>

        </div>
    );
};

export default Register;
