//Comentando el inicio de react

// Se debe tener la variable react en scope
import React from "react"
// Se debe tener la variable reactDom en scope
import  ReactDOM  from "react-dom/client"
import ItemListContainer from "./components/ItemListContainer"
import Nav from "./components/NavBar"
import "./style.scss"
const root = ReactDOM.createRoot(document.getElementById("root"))


// Tener la variale App en Scope la var app es toda la aplicacion en la que vamos a trabajar
const App = () => {
    return (
    <>
    <Nav/>
    <ItemListContainer nombre ='Jose'>

    </ItemListContainer>

    
    </>
    )

}

// Se renderiza para poder mostrar la funcion previamente creada como app()o <App/> en jsx,Destino donde se muestra en el dom)
//Forma vija  ReactDOM.render(<App/>,document.getElementById ("root") )
root.render(<App/>)