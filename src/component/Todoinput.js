import React, { Component } from 'react';


export default class Todoinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 'Inputs cannot be empty',
        }
    }
 
    render() {

        const { item, handleChange, handleSubmit } = this.props
       if(item){

        return (

            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <button className=' fas fa-pencil-alt' onSubmit={handleSubmit} />
                        </div>

                        <input
                            type='text'
                            className='form-control'
                            placeholder="Add what's on your mind"
                            value={item}
                            onChange={handleChange}
                        ></input>

                    </div>
                </form>
            </div>

        );
       } else {
        return (

            <div className='card card-body my-3'>
                <form >
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <button className=' fas fa-pencil-alt'/>
                        </div>

                        <input
                            type='text'
                            className='form-control'
                            placeholder="Add what's on your mind"
                            value={item}
                            onChange={handleChange}>
                            </input>
                    </div>
                    <div className='alert alert-warning' role='alert'>{this.state.error}</div>
                </form>
            </div>
        )
       }
           
        


    }
}