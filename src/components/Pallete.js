import React from 'react';
import Color from './Color';
import './Pallete.css';

class Pallete extends React.Component{
    render(){
        const {onClick} = this.props;
        
        return(
            <div className="pallete">
                <Color color="black" onClick={onClick}/>
                <Color color="blue" onClick={onClick}/>
                <Color color="red" onClick={onClick}/>
                <Color color="orange" onClick={onClick}/>
            </div>
        )
    }
}

export default Pallete;