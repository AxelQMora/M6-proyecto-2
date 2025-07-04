import { useState } from 'react'
import './App.css'

function App() {
//App de lista de compras
const [productos, setProductos] = useState([]);
const [nuevoProducto, setNuevoProducto] = useState("");

//Funciòn para agregar un nuevo producto a la lista
const agregarProducto = () => {
  if (nuevoProducto.trim() !== ""){
    setProductos([...productos, nuevoProducto]);
    setNuevoProducto("");
  }
};

//Función para eliminar un nuevo producto de la lista
const eliminarProducto = (index) => {
  setProductos(productos.filter((_, i) => i !== index));
};


  return (
    <>
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button id='agregar' onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button id='eliminar' onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
