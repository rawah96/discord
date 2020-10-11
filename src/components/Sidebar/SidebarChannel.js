import React from 'react'
import './SidebarChannel.css'

function SidebarChannel({id, channel}) {
    return (
        <div className="sidebar-channel">
            <h4><span className="channel-hash">#</span>{channel}</h4>
        </div>
    )
}

export default SidebarChannel
