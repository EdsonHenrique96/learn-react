import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family.jsx';
import Member  from './member.jsx';

const app = document.getElementById('app');

ReactDOM.render(
    <Family lastName="Batista">
        <Member name='Edson' />
        <Member name='Ivania' />
    </Family>    
,app);