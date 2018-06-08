import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent';

const app = document.getElementById('app');

ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10} />    
,app);