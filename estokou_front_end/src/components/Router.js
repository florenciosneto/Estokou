import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboad from './Dashboard'
import RegisterProduct from './RegisterProduct';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/usuario" element={<Dashboad/>}/>
            <Route path="/usario/produtos" element={<RegisterProduct/>}/>
            
            </Routes>
        </Router>
    );
};

export default App;
