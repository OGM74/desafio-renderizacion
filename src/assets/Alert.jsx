import {useState} from 'react'
import Formulario from './Formulario'
function Alert(){
const [alert, setAlert]= useState({mensaje:"", color:""})
return(
  <>
  <Formulario setAlert={setAlert}/>
  {alert.mensaje && <h5>{alert.mensaje}</h5>}
  </>
)
}

export default Alert
