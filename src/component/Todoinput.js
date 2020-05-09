import React, { Component } from 'react';


export default class Todoinput extends Component {
    render() {
        const { item, handleChange, handleSubmit, handleEdit } = this.props
        console.log(item)
        return (
            <div className='card card-body'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group mb-3'>
                        <div className='input-group-append'>
                            <button className=' fas fa-pencil-alt' onSubmit={handleSubmit}/>
                        </div>
                        <input className='form-control'
                            type='text'
                            placeholder="Add what's on your mind"
                            value={item}
                            onChange={handleChange}></input>
                    </div>
                </form>
            </div>

        );

    }
}