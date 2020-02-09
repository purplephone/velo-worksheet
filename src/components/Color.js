import React from 'react';
import './Color.css';

const Color = ({color, onClick}) =>{
    const style = {backgroundColor:color};
    return(
        <button className="color" style={style} onClick={() =>onClick(color)}>
            
        </button>
    )
}

export default Color;