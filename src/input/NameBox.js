import React, { Component } from 'react'
import './NameBox.css'

class NameBox extends Component {
    render(){
        return(
            <div className="nameOfRoll">
                    <label htmlFor="nameOfRoll">Name of the roll?
                        <input type="text" name = "nameOfRoll" id = "nameOfRoll" placeholder = "Spear. Sword, Armor dodge rolls etc"/>
                    </label>
            </div>
        )
    }
}

export default NameBox;