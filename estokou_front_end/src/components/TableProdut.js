import '../css/TableProdut.css';

function TableProdut() {
    return (
        <div className="container">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="procurar" className="search-input"></input>
                    <button className="search-btn"><i className="fas fa-search"></i></button>
                </div> 
                <div className="buttons">
                    <button className="btn"><a href='/usuario/produtos'><i className="fas fa-plus-circle"></i> Adicionar Produto</a></button>
                    <button className="btn"><a href=''><i className="fas fa-box-open"></i> Adicionar Estoque</a></button>
                    <button className="btn"><a href=''><i className="fas fa-exchange-alt"></i> Trocar Estoque</a></button>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Preço Total</th>
                        <th>Fragilidade</th>
                        <th>Fornecedor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div >
    );
}

export default TableProdut;