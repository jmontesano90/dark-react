import React, { Component } from 'react'

class NameBox extends Component {
    render(){
        return(
            <div>
                    <label htmlFor="nameOfRoll">Name of the roll?
                        <input type="text" name = "nameOfRoll" id = "nameOfRoll" placeholder = "Spear. Sword, Armor dodge rolls etc"/>
                    </label>
            </div>
        )
    }
}

export default NameBox;