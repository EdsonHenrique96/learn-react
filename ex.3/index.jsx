import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './componente.jsx';

const app = document.getElementById('app');
app.style.backgroundColor = '#045';

ReactDOM.render(
    <div>
        <Primeiro value="Ihull \õ/" />
        <Segundo />
    </div>
,app);