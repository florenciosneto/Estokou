import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profiles";

function Checker() {
    const navigate = useNavigate();

    useEffect(() => {
        if (Profile.getId() == 0) {
            alert("Você não está logado, faça login para acessar o dashboard");
            navigate("/");
        }
    }, [navigate]); // Garante que o hook é executado apenas quando o componente é montado

    return null; // O componente não precisa renderizar nada
}

export function CheckerStorage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (Profile.getStorageName() === "") {
            alert("Você não está com nenhum estoque determinado, crie ou determine um em 'trocar estoque'");
            navigate("/usuario");
        }
    }, [navigate]); // Garante que o hook é executado apenas quando o componente é montado

    return null; // O componente não precisa renderizar nada
}



export default Checker;
