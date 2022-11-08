import React, { Component } from 'react'
import Todo from './todo'

export default class form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputData:'',
       todo: [
        'first item',
       ],
    }
  }

  ChangeInputData=(event)=>{
    this.setState({inputData:event.target.value})
    console.log(this.state.inputData)
  }

  addTodo=(event)=>{
   if(this.state.inputData!==''){
    let newItems= [...this.state.todo, this.state.inputData]
    this.setState({
      todo:newItems,
      inputData:''
    })
   }
  }

  removeTodo=(index)=>{
    let original=[...this.state.todo];
    let selected=original.filter((value,key)=>{
        return index!==key
    })
    this.setState({
      original:selected
    })
  }

  render() {
    return (
      <>
        <div className='container'>


            <div className="mb-3">
              <label className="form-label">
                Add a to-do :
              </label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="type here hehehhh :)" onChange={this.ChangeInputData} value={this.state.inputData} />
            </div>

            <div className="d-grid gap-2">
              <button type="button" className="btn btn-primary" onClick={this.addTodo}>Add</button>
            </div>


            <Todo items={this.state.todo} removeTodo={this.removeTodo}/>
            
        </div>
      </>
    );
  }
}
