import '../css/Navbar.css';
import logo from '../logo.svg';


function Navbar() {
  return (
    <div className='body'>
      <div className='nav'>
      <a href='/'>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </a>
        <div className='users'>
          <a href='/registro'>Cadastrar</a>
          <a href='/login'>Login</a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;


