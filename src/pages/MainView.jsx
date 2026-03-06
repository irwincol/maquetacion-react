import { Sidebar } from "../components/Sidebar"
import { NavBar } from "../components/NavBar"
import { Cards } from "../components/Card"
import "../styles/MainView.css";

export function MainView (){
    return(
        <main class ="MainViewContainer">
            <Sidebar/>
            <NavBar/>
            <Cards/>
            <Cards/>

        </main>
    )
}