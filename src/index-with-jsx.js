import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Content using JSX</h1>;
const div = document.createElement('div')
div.setAttribute('id', 'root')
document.body.appendChild(div)
ReactDOM.render(element, document.getElementById('root'));
