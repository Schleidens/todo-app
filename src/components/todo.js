import React, { Component } from 'react'

export default class todo extends Component {
  render() {
    return (
      <>
        <ol className="list-group list-group-numbered mt-4">
            {
                this.props.items.map(
                    (value,index)=>{
                        return(
                            <React.Fragment key={value}>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                            {value}
                                    </div>
                                    <button className="btn btn-danger badge bg-danger rounded-pill" onClick={()=>{this.props.removeTodo(index)}}>Remove</button>
                                </li>

                            </React.Fragment>
                        )
                    }
                )
            }

        </ol>
      </>
    )
  }
}
