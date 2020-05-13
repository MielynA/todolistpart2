import React, {Component} from 'react'; 


export default class Todoitem extends Component { 
    render(){ 
        const {title , handleDelete, handleEdit} = this.props;
        return (
        <li className='list-group d-flex justify-contentbetween'>
            <h6>{title}</h6>
            
        </li>
        );
    }
}