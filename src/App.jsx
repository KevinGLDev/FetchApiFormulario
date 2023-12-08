import React, { useState} from "react";
import FormContent from "./components/FormContent";
import ListContent from "./components/ListContent";
import "./stylesheets/App.css"
function App() {

    
    const [showForm,setShowForm] = useState(false)
    const [showList,setShowList] = useState(false)


    
    
    return (
        <div id="mainContent">
            
            <h1 className='titulo'>Api Formulario</h1>
            <div id="btnContent">
                {
                    showForm ? <button onClick={()=> setShowForm(false)} className="btn">Ocultar Formulario</button> 
                    : <button onClick={()=> setShowForm(true)} className="btn">Mostrar Formulario</button>
                }
                {
                    showList ? <button onClick={()=> setShowList(false)} className="btn">Ocultar Lista</button> 
                    : <button onClick={()=> setShowList(true)} className="btn">Mostrar Lista</button>
                }
            </div>
            <div className="display">
                {
                    showForm ? <FormContent/> : ""
                }
                {
                    showList ? <ListContent/> : ""
                }
            </div>
           
            
        </div>
    )
}

export default App