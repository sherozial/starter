import React, { Component } from 'react';

class Form extends Component {
    state = { 
        mail: ''
     }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.mail)
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
    }
    render() { 
        return ( 
           
            <form onSubmit={this.onSubmitHandler}>
                <div className='form-group'>
                    <label>Email:</label>
                    <input onChange={this.onChangeHandler} className='form-control' 
                        type='email' name='mail'>
                    </input>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </div>
            </form>
        
         );
    }
}
 
export default Form;