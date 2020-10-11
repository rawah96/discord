import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import Avatar from '@material-ui/core/Avatar'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'

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

                <div className="sidebar-profile">
                    <Avatar />
                    <div className="profile-info">
                        <h3>@Rawah-alsinan</h3>
                        <p>#thisIsMyId</p>
                    </div>

                    <div className="profile-icons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
        </div>
    )
}

export default Sidebar
