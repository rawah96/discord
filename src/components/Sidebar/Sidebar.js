import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>Rawah Alsinan</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar-channels">
                <div className="channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="add-channel" />
                </div>
                <div className="channels-list">
                    <SidebarChannel channel="youtube"/>
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar-voice">
                <SignalCellularAltIcon
                className="voice-icon"
                fontSize="large"/>
                <div className="voice-info">
                    <h3>Voice connected</h3>
                    <p>Stream</p>
                </div>
                <div className="voice-icons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar