import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboad from './Dashboard'
import RegisterProduct from './RegisterProduct';
import RegisterStorage from './RegisterStorage';
import EditProduct from './EditProduct';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/usuario" element={<Dashboad/>}/>
            <Route path="/usuario/produtos" element={<RegisterProduct/>}/>
            <Route path="/usuario/produtos/edicao" element={<EditProduct/>}/>
            <Route path="/usuario/estoque" element={<RegisterStorage/>}/>
            
            
            </Routes>
        </Router>
    );
};

export default App;
