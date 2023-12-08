import React, {  useState } from "react";
import ItemList from "./ItemList";
import "../stylesheets/ListContent.css"


const PATH_GET_LIST = "https://localhost:7166/Formulario/Lista";



function ListContent() {
    const [datos, setDatos] = useState(null)
    
    

    const refreshData = () =>{
        fetch(PATH_GET_LIST)
        .then(res => res.json())
        .then(res => {
            try{
                setDatos(res)
                
                
            }catch(e){
                alert("Ah ocurrido un error en el manejo de datos")

            }
        })
    }


  



    return (
        <div id="listContent">
            <h3 className="subtitulo">Lista de Contactos</h3>
            <button className="btn-refresh" onClick={refreshData}>Actualizar Datos</button>
            {
                datos!=null? <table id="lista">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>TELEFONO</th>
                        <th>COMENTARIO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {datos.map((item, pos) =>
                     <ItemList
                     key = {pos}
                     id = {item['id']}
                     nombre = {item['nombre']}
                     correo = {item['correo']}
                     telefono = {item['telefono']}
                     comentario = {item['comentario']}
                     actualizar = {refreshData}
                    />
                   
                )}
                </tbody>
                
                
                
                </table> 
                : <div id="list-empty">Lista Vacia</div>
            }

        </div>
    )
}


export default ListContent