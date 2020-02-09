import React from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Pallete from './components/Pallete';

class App extends React.Component {
  id = 0;
  state={
    input:'',
    color:'black',
    inform:[
    ]
  }

  handleColorChange = col =>{
    this.setState({
      color : col
    })
  }

  handleChange = e =>{
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () =>{
    const {input, inform} = this.state;
    this.setState({
      input : '',
      inform : inform.concat({
        id: this.id++,
        text : input,
        color : this.state.color,
        checked : false
      })
    })
  }

  handleKeyPress = e =>{
    if(e.key === 'Enter'){
      this.handleCreate()
    }
  }

  handleToggle = (id) =>{
    const {inform} = this.state;
    const index = inform.findIndex(info => info.id===id);
    const selected = inform[index]
    const nextinfo = [
      ...inform
    ]
    nextinfo[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      inform : nextinfo
    })
  }

  handleRemove = (id) =>{
    const {inform} = this.state
    this.setState({
      inform : inform.filter(info => info.id!==id)
    })
  }


  render(){
      return (
        <div>
          <TodoListTemplate form={
          <Form 
            input={this.state.input}
            onChange={this.handleChange}
            onCreate={this.handleCreate}
            onKeyPress={this.handleKeyPress}
          />}
          pallete={
          <Pallete
            onClick = {this.handleColorChange}
          />}
          >
            <TodoItemList 
              inform={this.state.inform} 
              onToggle={this.handleToggle} 
              onRemove={this.handleRemove}
            />
          </TodoListTemplate>
        </div>
    );
  }
}

export default App;
