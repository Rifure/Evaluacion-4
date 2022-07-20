import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Fragment, useEffect, useRef, useState } from "react";

function Main() {
  const tituloRef = useRef();
  const descripcionRef = useRef();
    return (
      <div>

        <div className='titulo'>
          <input type={'text'} className="titulo1" placeholder='Título' ref={tituloRef}/>
        </div>

        <div className='descripcion'>
          <input type={'text'} className="descripcion1" placeholder='Descripción' ref={descripcionRef}/>
        </div>

        <div className='checkbox'>
          <input type={'checkbox'} className="checkbox1" id='text' />
          <label for="text">Importante!</label>
        </div>

        <div className='boton1'>
          <button className='boton'>AGREGAR</button>
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
