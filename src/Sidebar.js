import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import {MoreVert} from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

export default function Sidebar() {
    return (
        <div className="sidebar" >
          
            <div className="sidebar__header">
               <Avatar src=""/>
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                  <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVert/>
                </IconButton>
                 

                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                 <SidebarChat/>
                  <SidebarChat/>
            </div>

        </div>
    )
}
