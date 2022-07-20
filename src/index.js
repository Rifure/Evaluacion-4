import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Titulo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>{this.props.title}</div>
    )
  }

}

class Form extends React.Component {

  render() {
    return(
      <div>
        <input type={'text'} className="" />
        <input type={'text'} className="" />
        <input type={'checkbox'} />
        <button>Agregar</button>
      </div>
    )
  }

}

class Notas extends React.Component {



}

class Main extends React.Component {

  render() {
    return(
      <div className=''>
        <Titulo title="Post It Simulator!" />
        <Form />
      </div>
    )
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
