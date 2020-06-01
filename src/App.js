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
        item: '',
        editItem: false,
        error: '',
      }
    }

    componentWillMount() {
      // load items array from localStorage, set in state
      let itemsList = localStorage.getItem('items')
      if (itemsList) {
        this.setState({
          items: JSON.parse(localStorage.getItem('items'))
        })
      }
    }
    componentDidUpdate() {
      // on each update, sync our state with localStorage
      localStorage.setItem('items', JSON.stringify(this.state.items))
    }

    handleChange = e => {
      this.setState({
         item: e.target.value
      })
    }

    handleAddClick = () => {
      let error = '';
      if(!this.state.item){
        error = 'Field should have value'
      }
      if(this.state.item < 3 ){
        error ='Must be more than 3 characters'
      }
      return true; 
      }
      handleClear = () =>{
        this.setState({
          items: []
        })
      }


    handleSubmit = e => {
      e.preventDefault(e)  
      const isValid = this.handleAddClick();
      if(isValid){
        console.log(this.state)
      }
      this.setState({...this.state.item})
      const newItem = {
          id: this.state.id,
          title: this.state.item 
      }
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        id: uuidv4(),
        item: '',
        editItem: false
      })
     
    }
   
    handleDelete = id => {
     const deletedItem = this.state.items.filter(item => item.id !== id);
     this.setState({
      items: deletedItem
    })
    }

    handleEdit = id => {
      const filteredItem = this.state.items.filter(item => item.id !== id);
      const chosenItem = this.state.items.find(item => item.id === id); 
      this.setState({
        items: filteredItem,
        item: chosenItem.title,
        id: id,
        editItem: true
      })
    }
  render(){
    const {error} = this.state
    console.log(error, 'error')
    return (
      <div className='container'>
        <div className= 'row'>
          <div className= 'col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-center'>Simple To do list</h3>
          </div>
          <div className='container'>
          <Todoinput 
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          handleAddClick = {this.handleAddClick}
           />
          <Todolist 
          items={this.state.items}
          handleClear={this.handleClear}
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
