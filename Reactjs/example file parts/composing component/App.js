import React,{ Component } from 'react';
import Student from './Student';

class App extends Component{
    render(){
        return <div>
            <h1> HI </h1>
            <Student name='surjayan'/>
            <Student name='Joydip'/>
            <Student name='Ankan'/>
            <h2>its me {this.props.name}</h2>

        </div>


        
    }


}

export default App