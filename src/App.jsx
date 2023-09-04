import Header from "./components/Header";
import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const cargarLocalStorage = () => {
      const objPacientes = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(objPacientes);
    };

    cargarLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  function eliminarPaciente(id) {
    const arrPacientes = pacientes.filter(
      (filPacientes) => filPacientes.id !== id
    );
    setPacientes(arrPacientes);
  }
  return (
    <div className="container px-4 mt-10 m-auto">
      <Header />
      <div className="mt-12 md:flex m-auto">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
