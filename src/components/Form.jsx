import React, { useState } from "react";
import "../stylesheets/Form.css"

function Form(){
    const PATH_POST = "https://localhost:7166/Formulario/Crear"
    const [nombre,setNombre] = useState("")
    const [correo,setCorreo] = useState("")
    const [telefono,setTelefono] = useState("")
    const [comentario,setComentario] = useState("")
    const [validateForm,setValidateForm] = useState(false)
    const [spam,setSpam] = useState([])
    const [contact,setContact] = useState({})
    const optionsPost = {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)

        
    }
    function post(e){
        e.preventDefault()
        validate()
        if(validateForm){
            fetch(PATH_POST,optionsPost)
            .then(response => {
                if(response.ok){
                    setNombre("")
                    setComentario("")
                    setTelefono("")
                    setCorreo("")
                    alert('Peticion Enviada')

                    return response.text()
                }
                throw new Error(response.status)
            }).then(data => console.log("DATOS: ",data))
            .catch(error => console.log("ERROR: ", error))
        }else{
            alert("Datos incorrectos o error")
        }
    }

    function validate(){
        if(nombre===""){
            setValidateForm(false)
            setSpam(...["Incluya un nombre"])
        }else if(correo===""){
            setValidateForm(false)
            setSpam(...["Incluya un correo"])
        }
        else if(telefono==="" && telefono.length<10){
            setValidateForm(false)
            setSpam(...["Incluya un numero de telefono que sea mayor a 10 digitos"])
        }
        else if(comentario===""){
            setValidateForm(false)
            setSpam(...["Incluya un comentario"])
        }else{
            setSpam([])
            setValidateForm(true)
            setContact({
                "id":0,
                "nombre":nombre,
                "correo":correo,
                "telefono":telefono,
                "comentario":comentario
            })
        }

    }

    return(
        
        <form onSubmit={post} id="formulario-contacto">
            <div className="" id="span">
                {spam}
                    
            </div>
            <div className="campo-formulario">
                <label  >Nombre</label>
                <input  value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" />
            </div>
            <div className="campo-formulario">
                <label >Correo</label>
                <input value={correo} onChange={(e)=>setCorreo(e.target.value)} type="text" />
            </div>
            <div className="campo-formulario">
                <label >Telefono</label>
                <input value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text"  />
            </div>
            <div className="campo-formulario2">
                <label className="labelc" >Comentario</label>
                <textarea value={comentario} onChange={(e)=>setComentario(e.target.value)} cols="30" rows="10"></textarea>
            </div>
            <div className="campo-formulario"><input type="submit" /></div>
        </form>
        
    )
}

export default Form