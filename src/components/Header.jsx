import { NavLink, useNavigate } from "react-router-dom";

export default function Header(props){
    const navigate = useNavigate()
    
    function handleClick(event){
        props.onLogout()
        navigate("/Login")
    }
    
    return(
    <header>
    <h1>Faculdade de Ciência e Informação em Tecnologia</h1>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Grade">Grade Horária</NavLink></li>
            <li><NavLink to="/Secretaria">Secretaria</NavLink></li>
            <li><NavLink to="/Mensagem">Mensagens</NavLink></li>
            <li><NavLink to="/Notas">Notas</NavLink></li>

            <li ><button onClick={handleClick}>Sair</button></li>
        </ul>
    </nav>
    </header>
    )
}