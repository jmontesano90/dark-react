import React, { Component } from 'react'
import './InputBox.css'


class InputBox extends Component {
    render(){
        return(
             <div>
                    <div className="colors">
                        <label htmlFor="black" className="black">Black</label>
                        <input className="colorInput" type="text" name="black" id="black" placeholder="0"/>
     
                        <label htmlFor="blue" className ="blue color">Blue</label>
                        <input className="colorInput" type="text"  name="blue" id="blue" placeholder="0"/>
  
                        <label htmlFor="orange" className="orange color">Orange</label>
                        <input className="colorInput" type="text"  name="orange" id="orange" placeholder="0"/> 
                    </div>
                        
                    <div className="additionalInput">
                        <label htmlFor="modifier">Modifier</label>
                        <input type="text" name="modifier" id="modifier" placeholder="(+1, -1)"/>
    
                        <label htmlFor="desiredRoll">Desired Roll</label>
                        <input type="text" name="desiredRoll" id="desiredRoll" placeholder="0"/>
                    </div>
   
             </div>
        )
    }
}

export default InputBox;