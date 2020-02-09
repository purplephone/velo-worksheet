import React from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends React.Component{
    render(){
        const {inform, onRemove, onToggle} = this.props;

        const todolist = inform.map(
            (info) => (
                <TodoItem
                    {...info}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key ={info.id}
                />
            )
        )
        return(
            <div>
                {todolist}
            </div>   
        );
    }
}
export default TodoItemList;