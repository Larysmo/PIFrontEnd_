import {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Erro from './pages/Erro'
import Login from './pages/Login'
import Notas from './pages/Notas'
import Grade from './pages/Grade'
import Secretaria from './pages/Secretaria'
import Mensagem from './pages/Mensagem'
import React from "react"
import Principal from './components/Principal'


export default function App(){
    const [logado, setLogado] = useState(false);
   
    function handleLogin(){
        setLogado(true);
        
    }

    function handleLogout(){
        setLogado(false);
    }
    
    return (
        <BrowserRouter>
        <Routes>
            {logado?
            <>
            <Route path="/" element={<Principal onLogout={handleLogout} />}>
                <Route index element={<Home />}/>
                <Route path="Notas" element={<Notas />}/>
                <Route path="Grade" element={<Grade />}/>
                <Route path="Secretaria" element={<Secretaria />}/>
                <Route path="Mensagem" element={<Mensagem />}/>
            </Route>
            </>
            :
            <Route path="/Login" element={<Login onLogin={handleLogin}/>}/>
            }
            <Route path="*" element={<Erro />}/>

        </Routes>
        </BrowserRouter>
    )
}