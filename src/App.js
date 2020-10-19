import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from './axios'

function App() {
  const [messages,setMessages]= useState([]);
  useEffect(()=> {
    axios.get("/messages/sync").then((response) => {
      console.log(response.data)
			setMessages(response.data);
		}, []);
    
  },[])

  useEffect(()=> {
   const pusher= new Pusher('d5bebc630aa2b842774c', {
     cluster:'ap2'
   })
   const channel = pusher.subscribe("messages");
    channel.bind('inserted', (newMessage)=> {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    	// Clean up function
		return () => {
			channel.unbind_all();
			channel.unsubscribe("messages");
		};
  },[messages])  


  return (
    <div className="app">
    <div className="app__body">
         <Sidebar/>
         <Chat messages={messages}/> 
    </div>
      
    </div>
  );
}

export default App;
