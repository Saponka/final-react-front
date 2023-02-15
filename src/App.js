import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from './components/commons/Register';
import Login from './components/commons/Login';
import Home from './components/Home';
import ListaProductos from './components/listas/ListaProductos';
import ListaProveedores from './components/listas/ListaProveedores'
import ListaEmpleados from './components/listas/ListaEmpleados';
import ListaClientes from './components/listas/ListaClientes';
import FormularioProducto from './components/formularios/FormProductos';
import FormularioProveedor from './components/formularios/FormProveedores';
import FormularioEmpleados from './components/formularios/FormEmpleados';
import FormularioClientes from './components/formularios/FormClientes';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route> 
        <Route path="/listaProductos" element={<ListaProductos/>}></Route>
        <Route path="/listaProveedores" element={<ListaProveedores/>}></Route>
        <Route path="/listaClientes" element={<ListaClientes/>}></Route>
        <Route path="/listaEmpleados" element={<ListaEmpleados/>}></Route>
        <Route path="/formProductos" element={<FormularioProducto/>}></Route>
        <Route path="/formProveedores" element={<FormularioProveedor/>}></Route>
        <Route path="/formEmpleados" element={<FormularioEmpleados/>}></Route>
        <Route path="/formClientes" element={<FormularioClientes/>}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
