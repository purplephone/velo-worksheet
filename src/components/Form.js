import React from 'react';
import './Form.css';


const Form = ({input, onCreate, onChange, onKeyPress}) =>{
    return(
        <div className="form">
            <input className="form-input" onKeyPress={onKeyPress} value={input} onChange={onChange}/>
            <button className="create-button" onClick={onCreate} >제출</button>
        </div>
    );
}

export default Form;