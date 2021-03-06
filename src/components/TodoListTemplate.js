import React from 'react';
import './TodoListTemplate.css';

class TodoListTemplate extends React.Component{
    render(){
        return(
            <div className="todo-list-template">
                <div className="title">
                    오늘 할 일
                    <div>
                        {this.props.pallete}
                    </div>
                </div>
                <div className="form-wrapper">
                    {this.props.form}
                </div>
                <div className="todos-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default TodoListTemplate;