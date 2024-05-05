import { useState } from "react"
import { usuarios } from "./assets/baseColaboradores"

function App() {
  const [personas, setPersonas] = useState(usuarios)
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [edad, setEdad] = useState("")
  const [cargo, setCargo] = useState("")
  const [celular, setCelular] = useState("")
  const [alert, setAlert] = useState("")
  function guardar(e) {
    e.preventDefault()
    const ultimoId = personas[personas.length - 1].id
    const nuevoUsuario = { id: ultimoId + 1, nombre, correo, edad, cargo, celular }
    if (
      nombre === "" || correo === "" || edad === "" || cargo === "" || celular === "")
       {
      return setAlert("Debes completar todos los campos")
       }
  
    setPersonas([...personas, nuevoUsuario])
  setAlert("Usuario agregado correctamente")
  setNombre("")
  setCorreo("")
  setEdad("")
  setCargo("")
  setCelular("")
}
return (
  <>
    <h1>Lista de Colaboradores</h1>
    {<h2>{alert}</h2>}
    <form onSubmit={guardar}>
      <div style={{ display: 'flex', flexDirection: "column", width: '200px' }}>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        <input type="text" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)}></input>
        <input type="text" placeholder="Ingrese su edad" value={edad} onChange={(e) => setEdad(e.target.value)}></input>
        <input type="text" placeholder="Ingrese su cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}></input>
        <input type="text" placeholder="Ingrese su celular" value={celular} onChange={(e) => setCelular(e.target.value)}></input>
      </div>
      <button type="submit">Agregar</button>
    </form>
    <section style={{ display: 'flex', gap: '20px' }}>
      {personas.map(elememto => <article style={{ border: "2px solid red", width: "200px" }}><h3>{elememto.id}</h3><h3>{elememto.nombre}</h3><h3>{elememto.correo}</h3><h3>{elememto.edad}</h3><h3>{elememto.cargo}</h3><h3>{elememto.celular}</h3></article>)}
    </section>
  </>
)
}


export default App
