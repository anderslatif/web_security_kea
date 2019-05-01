import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:8080');

function Chat(props) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
        socket.on("send-message", data => {
            setMessages([...messages, data.msg]); 
        });
    // });

    return (
        <React.Fragment>
            {messages.map((element, index) => {
                return <p key={index}>{element}</p>;
            })}
            <input placeholder="Type the message here" value={input} onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={() => {
                socket.emit("receive-message", {msg: input});   
                // setMessages([...messages, input]);
            }}>Send</button>
        </React.Fragment>
    );
}

export default Chat;