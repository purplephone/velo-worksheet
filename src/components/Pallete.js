import React from 'react';
import Color from './Color';
import './Pallete.css';

class Pallete extends React.Component{
    render(){
        return(
            <div className="pallete">
                <Color/>
                <Color/>
                <Color/>
                <Color/>
            </div>
        )
    }
}

export default Pallete;