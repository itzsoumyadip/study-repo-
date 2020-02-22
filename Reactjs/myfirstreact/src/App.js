import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    return(
        // jsk expressions must have one parent element
        <div className="App">
            <header className="App-header">    
                 <img src={logo} className="App-logo" alt="react" />     
                 <p> Learn React with <b>Soumyadip</b> Saha</p>    
                 </header>
            <p> Learn React with <b>Soumyadip</b> Saha</p>        
        </div>    // WHATEVER START MUST BE END IN REACT ,JSX , even for <br> must have selfcloseing
    );
}


export default  App;    // for exporting 
