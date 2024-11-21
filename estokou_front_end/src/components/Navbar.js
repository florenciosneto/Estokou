
import { Children } from 'react';
import '../css/Navbar.css';
import logo from '../logo.svg';


function Navbar() {
  return (
    <div className='body'>
      <div className='nav'>
        <div className='logo'>
          <a href='/'>
          <img src={logo} className="App-logo" alt="logo" />
          </a>
          
        </div>
        <div className='users'>
          <a href='/registro'>Cadastrar</a>
          <a href='/login'>Login</a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;


