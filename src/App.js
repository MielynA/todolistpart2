import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todoinput from './component/Todoinput';
import Todolist from './component/Todolist'; 


class App extends Component {
     
    constructor(props){
      super(props);
      this.state = {
        items: [],
        id: uuidv4(),
        item: "",
        editItem: false
      }
    }

    handleChange = e => {
      this.setState({
       item: e.target.value
      })
    }
    handleSubmit = e => {
      e.preventDefault();
      const newItem = {
          id: this.state.id,
          title: this.state.item 
      }
      const updatedItems = [...this.state.items,newItem];

      this.setState({
        items: updatedItems,
        id: uuidv4(),
        item: "",
        editItem: false
      })
     
    }
    handleClear = () =>{
      this.setState({
        items: []
      })
    }
    handleDelete = id => {
      console.log(`this is handling the delete ${id}`)
    }
    handleEdit = id => {
      console.log(`this is handling the edit ${id}`)
    }
  render(){
    console.log(this.state)
    return (
      <div className='container'>
        <div className= 'row'>
          <div className= 'col-12 col-md-8 col-mt-5'>
            <h3 className='text-center'>What's on your mind</h3>
          </div>
          <div className='container'>
          <Todoinput 
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
<<<<<<< HEAD
          editItem={this.editItem}
=======
>>>>>>> todos
           />
          
          <Todolist 
          items={this.state.items}
          clear={this.handleClear}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          /> 
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
