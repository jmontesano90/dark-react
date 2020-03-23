import React, { Component } from 'react'
import InputBox from './InputBox'
import NameBox from './NameBox'
import './UserInput.css'

class UserInput extends Component {
    render(){
        return(
            <div className ="input">
                <InputBox handleChange={this.props.handleChange}/>
                <NameBox handleChange={this.props.handleChange}/>
            </div>
        )
    }
}

export default UserInput;