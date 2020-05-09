import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoInput from './component/Todoinput';
import Todolist from './component/Todolist'; 






class App extends Component {
     
    constructor(props){
      super(props);
      this.state = {
        items: {},
        id: uuidv4(),
        item: '',
        editItem: false
      }
    }

    handleChange = e => {
      console.log('this is handle change')
    }
    handleSubmit = e => {
      console.log('this is handlesubmit ')
    }
    handleClear = () =>{
      console.log('handle clear')
    }
    handleDelete = id => {
      console.log(`this is handling the delete ${id}`)
    }
    handleEdit = id => {
      console.log(`this is handling the edit ${id}`)
    }
  render(){
    return (
      <div className='container'>
        <div className= 'row'>
          <div className= 'col-12 col-md-8 col-mt-5'>
            <h3 className='text-center'>What's on your mind</h3>
          </div>
          <div className='container'>
          <TodoInput 
          item={this.state.item}
          handleChange={this.state.handleChange}
          handleSubmit={this.state.handleSubmit}
          handleEdit={this.state.handleEdit}
           />
          
          <Todolist 
          items={this.state.items}
          clear={this.state.handleClear}
          handleDelete={this.state.handleDelete}
          /> 
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
