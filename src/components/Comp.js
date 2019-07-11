import React, { Component } from 'react';

class Comp extends Component {
    state = { 
        name: 'Comp'
     }
    render() { 
        return ( 
            <h4>This is the <span style={{color: 'red', fontSize: '25px'}}>{this.state.name}</span> component</h4>
         );
    }
}
 
export default Comp;