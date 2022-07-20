import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Fragment, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

function Notas({ todo, eliminar }) {
  const { id, titulo, descripcion, esImportante } = todo;
  function borrar() {
    eliminar(id)
  }
  const rotate = ["rotate-0-5", "rotate-1", "rotate-1-5", "rotate-2", "rotate-2-5", "rotate-3", "rotateN-0-5", "rotateN-1", "rotateN-1-5", "rotateN-2", "rotateN-2-5", "rotateN-3"];
  const random = Math.trunc(Math.random() * 12);

  const clase = `notas ${rotate[random]}`

  return (
    <div className={clase}>
      <div className={(esImportante) ? "importante" : "normal"}>
        <div className='contenido'>
          <p type="button" onClick={borrar} className="text-end" >X</p>
          <h3 className='card-tittle'>{titulo}</h3>
          <p className='card-text'>{descripcion}</p>
        </div>
      </div>
    </div>

  )
}

function Main() {
  const [todos, setTodos] = useState([]);
  const tituloRef = useRef();
  const descripcionRef = useRef();
  const checkRef = useRef();

  function agregar() {
    const titulo = tituloRef.current.value;
    const desc = descripcionRef.current.value;
    const chk = checkRef.current.checked;

    // if (titulo <= 0) { alert('Titulo vacío'); return };
    if (desc <= 0) { alert('El campo "Descripción" es obligatorio'); return };

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        titulo: titulo,
        descripcion: desc,
        esImportante: chk,
      }
      return [...prevTodos, newTask]
    })

  }

  function eliminar(id) {
    const nuevalista = todos.filter(X => {
      return X.id !== id;
    })
    setTodos(nuevalista)
  }

  return (
    <div>
      <h1>Post it Simulator!</h1>
      <div className='titulo'>
        <input type={'text'} className="titulo1" placeholder='Título' ref={tituloRef} />
      </div>

      <div className='descripcion'>
        <input type={'text'} className="descripcion1" placeholder='Descripción' ref={descripcionRef} />
      </div>

      <div className='checkbox'>
        <input type={'checkbox'} className="checkbox1" id='text' ref={checkRef} />
        <label for="text">Importante!</label>
      </div>

      <div className='boton1'>
        <button type="button" onClick={agregar} className='boton'>AGREGAR</button>
      </div>
      <div>
        {todos.map((todo) => (
          <Notas todo={todo} key={todo.id} eliminar={eliminar} />
        ))}
      </div>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
