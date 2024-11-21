import '../css/UserNavbar.css';
function UserNavbar() {
    return (
        
        <div className='header'>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
            <div className="logo">Logo</div>
            <div className="user-section">
                <img src="src/avatar.jpg" alt="Avatar" className="avatar"></img>
                    <span>Olá, Usuário!</span>
                    <button className="logout-button">
                        <b>Sair</b>
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
            </div>
        </div>
    );
}

export default UserNavbar;