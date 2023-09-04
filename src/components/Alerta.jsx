
// eslint-disable-next-line react/prop-types
const Alerta = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white p-3 rounded-md mb-4 uppercase font-bold">
    {mensaje}
  </div>
  )
}

export default Alerta