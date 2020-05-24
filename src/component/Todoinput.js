import React, { Component } from 'react';


export default class Todoinput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props
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
                            onChange={handleChange}></input>
                    </div>
                </form>
            </div>

        );

    }
}