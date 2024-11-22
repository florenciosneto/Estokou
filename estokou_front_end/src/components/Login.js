import React from 'react';
import Navbar from "./Navbar";
import BaseBoard from './BaseBoard';
import '../css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    return (
        <div className='loginBody'>
            <Navbar/>
            <div className='loginForm'>
                <Form method='/usuario'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Insira o email aqui" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira a sua senha aqui" />
                        <Form.Text className="text-muted">
                            Não compartilhe essa senha com estranhos
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </div>

            <BaseBoard></BaseBoard>
        </div>
    );
};

export default Login;