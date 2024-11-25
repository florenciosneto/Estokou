import React, { useState } from 'react';
import Navbar from "./Navbar";
import BaseBoard from './BaseBoard';
import '../css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    function logarUsuario(e){
        e.preventDefault()
        alert(`O usuário ${email} foi cadastrado com a senha ${password}`)
        navigate('/usuario')       
    }
    
    const navigate = useNavigate()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    return (
        <div className='loginBody'>
            <Navbar/>
            <div className='loginForm'>
                <Form onSubmit={logarUsuario}>
                    <Form.Group className="mb-3" controlId="Email" value={email} onChange={(e)=> setEmail(e.target.value)} name='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Insira o email aqui" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Password" value={password} onChange={(e)=> setPassword(e.target.value)} name='password'>
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