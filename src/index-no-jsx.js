import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', {}, 'Content without JSX');
ReactDOM.render(element, document.getElementById('root'));
