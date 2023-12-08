import React from "react";
import "../stylesheets/ItemList.css"

const ItemList = (props) =>{
    const optionsFetch = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const PATH_DELETE = "https://localhost:7166/Formulario/Delete/"
    function deleteItem(id){
        fetch(PATH_DELETE+id,optionsFetch)
        .then(response => {
            if(response.ok){
                return response.text()
            }
            throw new Error(response.status)
        }).then( () =>{
            alert("Eliminada la peticion: ",props.id)
            props.actualizar()
        }).catch(error =>{
            console.log(error)
        })
    }

    return(
        <tr className="item-list">
            <td className="item-id">{props.id}</td>
            <td className="item-name">{props.nombre}</td>
            <td className="item-email">{props.correo}</td>
            <td className="item-tel">{props.telefono}</td>
            <td className="item-com">{props.comentario}</td>
            <td><button className="btn-delete" onClick={()=>deleteItem(props.id)} >Eliminar</button></td>
        </tr>
    )
}


export default ItemList