import React, { Component } from 'react'
import './InputBox.css'


class InputBox extends Component {
    render(){
        return(
             <div>
                    <h2>Dice being rolled</h2>
                    <div className="colors">
                        <label htmlFor="black" className="black"></label>
                        <input className="colorInput" type="text" name="black" id="black" placeholder="0" onChange={e => this.props.handleChange(e)}/>
     
                        <label htmlFor="blue" className ="blue color"></label>
                        <input className="colorInput" type="text"  name="blue" id="blue" placeholder="0" onChange={e => this.props.handleChange(e)}/>
  
                        <label htmlFor="orange" className="orange color"></label>
                        <input className="colorInput" type="text"  name="orange" id="orange" placeholder="0" onChange={e => this.props.handleChange(e)}/> 
                    </div>
                        
                    <div className="additionalInput">
                        <label htmlFor="modifier">Modifier</label>
                        <input className="otherInput" type="text" name="modifier" id="modifier" placeholder="(+1, -1)" onChange={e => this.props.handleChange(e)}/>
    
                        <label htmlFor="desiredRoll">Desired Roll</label>
                        <input className="otherInput" type="text" name="desiredRoll" id="desiredRoll" placeholder="0" onChange={e => this.props.handleChange(e)}/>
                    </div>
   
             </div>
        )
    }
}

export default InputBox;