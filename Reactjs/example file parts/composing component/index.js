import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name='Soumyadip' />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*    

 hOW THIS COMPOSING Componet works


            ____________ RENDER    _________ RENDER _____________   
            |    app js |--------> |index.js| -----> |index.html |
            -------------          ---------         ------------ 
         |       \         \
Student.js |  student.js | student.js   
surjayan   |  joydip     | ankan  




*/



/*    out put  in html  

    <div id="root"><div>
    <h1> HI </h1>
    <h1>hello surjayan </h1>
    <h1>hello Joydip </h1>
    <h1>hello </h1>
    <h2>its me Soumyadip</h2>
    </div></div>  



*/