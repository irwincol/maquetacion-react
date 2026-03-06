import { Sidebar } from "../components/Sidebar";
import { NavBar } from "../components/NavBar";
import { Cards } from "../components/Card";
import "../styles/MainView.css";

export function MainView() {
  return (
    <main className="MainViewContainer">
      <Sidebar />
      <div className="contenido">
        <NavBar />
        <section className="contenedor-componentes">
          <Cards />
          <Cards />
        </section>
      </div>
    </main>
  );
}