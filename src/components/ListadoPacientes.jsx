/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

// eslint-disable-next-line react/prop-types
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      <h2 className="text-center font-black text-3xl">ListadoPacientes</h2>

      <p className="text-lg mt-5 text-center mb-8">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {
      pacientes.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente}  setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      ))
      }
    </div>
  );
};

export default ListadoPacientes;
