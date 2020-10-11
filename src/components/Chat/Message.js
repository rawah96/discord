import React from 'react'
import './Message.css'
import {Avatar} from '@material-ui/core'

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="msg-info">
                <h4>Rawah-alsinan <span className="time-stamp"></span></h4>
                <p>this is a message</p>
            </div>
        </div>
    )
}

export default Message
