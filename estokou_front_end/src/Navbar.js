
import { Children } from 'react';
import './Navbar.css';
import logo from './logo.svg';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './img/2.jpeg';
import Carrossel from './Carrossel';


 function Navbar({ children }) {
  return (
    <div className='body'>
      <div className='nav'>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='users'>
          <a>Cadastrar</a>
          <a>Login</a>
        </div>

      </div>
      <div className='content'>
          {children}
        </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <Navbar>
      <Carrossel />
    </Navbar>
    </>
  )
}


