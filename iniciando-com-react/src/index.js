import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Componente1 from './Componente1'; //primeiro componente funcional
import Componente2 from './Componente2'; //primeiro componente de classe
import Componente3 from './Componente3'; //classe com estado e comportamento
import Componente4 from './Componente4'; //funcional com estado e comportamente  

import './index.css'

//ReactDOM.render( <App nome="Dougllas" idade={31}  /> , document.getElementById('root'));
//ReactDOM.render( <Componente1/> , document.getElementById('root'));
//ReactDOM.render( <Componente2/> , document.getElementById('root'));
//ReactDOM.render( <Componente3/> , document.getElementById('root'));
ReactDOM.render( <Componente4/> , document.getElementById('root'));
