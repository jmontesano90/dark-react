import React, { Component } from 'react'
import InputBox from './InputBox'
import NameBox from './NameBox'
import './UserInput.css'

class UserInput extends Component {
    render(){
        return(
            <div className ="input">
                <InputBox />
                <NameBox />
            </div>
        )
    }
}

export default UserInput;