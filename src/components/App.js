import React from 'react';
import Comp from './Comp';
import Form from './Form';

const App = () => {
    return ( 
            <div className='container'>
                <h1>My React App</h1>
                <h4>Classes not supported!</h4>
                <Comp />
                <Form />
            </div>
         );
}
 
export default App;