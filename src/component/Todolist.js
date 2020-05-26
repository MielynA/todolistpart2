import React, {Component} from 'react'; 
import Todoitem from './Todoitem';


export default class Todolist extends Component { 
    render(){
        const {items, handleClear, handleDelete, handleEdit} = this.props

        return(
            <ul className='list-group my-5'>
            <h3 className='text-center mb-4'>Current list</h3>

            {
                items.map(item => {
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
            <div className='row justify-content-center'>
            <button
              type='button'
              className='btn btn-danger mt-5'
              onClick={handleClear}
              >
               Clear All  
              </button>
            </div>
            
            </ul>
        );
    }
}