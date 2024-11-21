import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
};

export default App;
