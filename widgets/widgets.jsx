import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Clock from './frontend/clock';

const  Root = ()=>{
    return (
        <div>
            <Clock/>
        </div>

    );
}


document.addEventListener('DOMContentLoaded', ()=>{
    ReactDOM.render( <Root/> ,document.getElementById('root'));
})