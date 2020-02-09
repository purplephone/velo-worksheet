import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, color, checked, id, onToggle, onRemove } = this.props;
    const style = {color:color};

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>

        <div className="remove" onClick={e =>{
            e.stopPropagation();
            onRemove(id)
          }}>&times;
        </div>

        <div className={`todo-text $(checked && 'checked')`}  style={style}>
          <div>{text}</div>
        </div>

        {
            checked && (<div className="check-mark">✓</div>)
        }

      </div>
    );
  }
}

export default TodoItem;