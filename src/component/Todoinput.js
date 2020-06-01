import React, { Component } from 'react';


export default class Todoinput extends Component {
    render() {
        const { item, handleChange, handleSubmit, handleAddClick } = this.props
        console.log(handleAddClick,'this')
       
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
                            onKeyPress={this.handleAddClick}
                            onClick={this.handleAddClick}
                            ></input>
                    </div>
                </form>
            </div>

        );

    }
}