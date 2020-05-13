import React, {Component} from 'react'; 
import Todoitem from './Todoitem';


export default class Todolist extends Component { 
    render(){
        const {items, clear, handleDelete, handleEdit} = this.props
        console.log(items)
        return(
            <ul className='list-group my-5'>
            <h3 className='text-center'>Todolist</h3>
            {
                items.map(item => {
                    console.log('this',items)
                    return(
                        <Todoitem
                            key={item.id}
                            title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        />
                    );
                })
            }
            <button
              type='button'
              className='btn btn-danger mt-5'
              onClick={clear}
              >
               Clear   
              </button>
            </ul>
        );
    }
}