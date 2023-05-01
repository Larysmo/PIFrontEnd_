import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Principal (props){
    return(
        <>
        <Header  onLogout = {props.onLogout}/>
        <main>           
            <Outlet />
        </main>
        <Footer />
        </>    
    )
}