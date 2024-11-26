import '../css/UserNavbar.css';
import profile from './Profiles';
function UserNavbar() {

    return (
        <div className='header'>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
            <a href='/usuario'><div className="logo">Logo</div></a>
            <div className="user-section">
                <img src="src/avatar.jpg" alt="Avatar" className="avatar"></img>
                <span>Olá {profile.getName()}!</span>
                <a href='/'>
                    <button className="logout-button">
                        <b>Sair</b>
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default UserNavbar;