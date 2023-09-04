/* eslint-disable react/prop-types */

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombreMascota,nombrePropietario,emailPropietario,fechaAlta,sintomasMascota,id } = paciente

    const handleEliminar = () => {

    const boolEliminar = confirm("¿Desea eliminar este paciente?")
       boolEliminar && eliminarPaciente(id);
    }

  return (
    
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Mascota: <span className="font-normal normal-case">{nombreMascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{" "}
          <span className="font-normal normal-case">{nombrePropietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">
            {emailPropietario}
          </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{" "}
          <span className="font-normal normal-case">
            {fechaAlta}
          </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{" "}
          <span className="font-normal normal-case">
           {sintomasMascota}
          </span>
        </p>

        <div className="mt-5">
            <button onClick={()=> setPaciente(paciente)} className="bg-indigo-700 hover:bg-indigo-500 py-2 rounded-md text-white   px-4 uppercase mr-4">Editar</button>
            <button onClick={handleEliminar} className="bg-red-700 hover:bg-red-500 py-2 rounded-md text-white  px-4 uppercase">Eliminar</button>

        </div>
      </div>
  );
};

export default Paciente;
