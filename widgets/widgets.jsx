import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

const testArray = [
    {title : "tab1", content: "I love JSX"}, 
    {title : "tab2", content: "I dont!"},
    {title : "tab3", content: "I love javascript!"}
]

const Root = ()=>{
    return (
        <div>
            <Clock />
            <Tabs tArray = {testArray}/>
            <Weather />
        </div>

    );
}


document.addEventListener('DOMContentLoaded', ()=>{
    ReactDOM.render( <Root/> ,document.getElementById('root'));
})