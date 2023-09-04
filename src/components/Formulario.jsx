/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Alerta from "./Alerta";

// eslint-disable-next-line react/prop-types
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [emailPropietario, setEmailPropietario] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomasMascota, setSintomasMascota] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      console.log("entre");
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmailPropietario(paciente.emailPropietario);
      setFechaAlta(paciente.fechaAlta);
      setSintomasMascota(paciente.sintomasMascota);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        nombreMascota,
        nombrePropietario,
        emailPropietario,
        fechaAlta,
        sintomasMascota,
      ].includes("")
    ) {
      setError(true);
      return;
    }

    setError(false);

    const objPacientes = {
      nombreMascota,
      nombrePropietario,
      emailPropietario,
      fechaAlta,
      sintomasMascota
    };

    
    if(paciente.id ){

      objPacientes.id = paciente.id;
      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState);
      
      setPacientes(pacienteActualizado);
      setPaciente({});
      
    }else{
      
      objPacientes.id = generarId();
      setPacientes([...pacientes, objPacientes]);
    }


    

    setNombreMascota("");
    setNombrePropietario("");
    setEmailPropietario("");
    setFechaAlta("");
    setSintomasMascota("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-8">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-md py-10 px-5 mb-10"
      >
        {error && <Alerta mensaje="Todos los campos son obligatorios" />}
        <div className="mb-3">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase font-bold required:first-letter:fill-red-500"
          >
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            className="border-2 my-3 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            placeholder="Nombre de la Mascota"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            className="border-2 my-3 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
            placeholder="Nombre del Propietario"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="emailPropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="emailPropietario"
            className=" border-2 my-3 w-full p-2 placeholder-gray-400 rounded-md"
            type="email"
            value={emailPropietario}
            onChange={(e) => setEmailPropietario(e.target.value)}
            placeholder="Email del Propietario"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="fechaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="fechaAlta"
            className=" border-2 my-3 w-full p-2  rounded-md"
            type="date"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="sintomasMascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomasMascota"
            className=" border-2 my-3 w-full p-2 placeholder-gray-400  rounded-md"
            value={sintomasMascota}
            onChange={(e) => setSintomasMascota(e.target.value)}
            placeholder="Describe los sintomas"
          />
        </div>

        <input
          value={paciente.id ? "Editar Paciente" : "Crear Paciente"}
          type="submit"
          className=" bg-indigo-600 w-full p-2 text-white rounded-md hover:bg-indigo-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;
