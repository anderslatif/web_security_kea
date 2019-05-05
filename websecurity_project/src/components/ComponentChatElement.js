import React, { Component, useState } from 'react';
import ComponentIndividualChatMessage from './ComponentIndividualChatMessage';
import io from 'socket.io-client';

const socket = io(`${process.env.ADDRESS}:8080`);
// import React, { useState, useEffect } from 'react';

const testChatMessages = [
    {
        id: 1,
        message: 'test a',
        senderId: 1
    },
    {
        id: 2,
        message: 'test b',
        senderId: 2
    },
    {
        id: 3,
        message: 'test c newer',
        senderId: 3
    },
    {
        id: 4,
        message: 'test d',
        senderId: 4
    },
    {
        id: 5,
        message: 'test e new',
        senderId: 5
    }
];

function ComponentChatElement(props) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
        socket.on('send-message', data => {
            setMessages([...messages, data.msg]);
        });
    // });

    return (
        <React.Fragment>
            {messages.map((element, index) => {
                return <p key={index}>{element}</p>;
            })}
            <input placeholder="Type the message here" value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => {
                socket.emit('receive-message', { msg: input });
                // setMessages([...messages, input]);
            }}>Send
            </button>
        </React.Fragment>
    );
}

// class ComponentChatElement extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             chatMessages: testChatMessages,
//             input: "",
//             messages: []
//         }
//         this.setMessages = this.setMessages.bind(this);
//         this.setInput = this.setInput.bind(this);
//     }
//     setMessages = (msgs) => {
//         this.setState(() => {
//             return msgs
//         })
//     }
//     setInput = (ev) => {
//         this.setState({input: ev.target.value})
//         console.log(this.state.input);
//     }
//     componentDidMount() {
//         socket.on("send-message", data => {
//             this.setMessages([...this.state.messages, data.msg]);
//         });
//     }
//     // componentDidMount() {
//     //     socket.on("send-message", data => {
//     //         setMessages([...this.state.messages, data.msg]);
//     //     });
//     // }
//     render() {
//         let { handleChatState, handleChatStateSlide } = this.props;
//         return(
//             <div className="componentChatElement">
//                 <div className="chat__header">
//                     <button>
//                         <svg>
//                             <use href="./image/sprite.svg#icon-maximize"></use>
//                         </svg>
//                     </button>
//                     <h2>BookShelf Chat</h2>
//                     <button onClick={handleChatStateSlide}>
//                         <svg>
//                             <use href="./image/sprite.svg#icon-cross"></use>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="chat__content">
//                     {
//                         this.state.messages.map((msgChat) => {
//                             return <ComponentIndividualChatMessage key={msgChat.id} message={msgChat.message} />
//                         })
//                     }
//                 </div>
//                 <div className="chat__input">
//                     <form className="chat__input--sendmessage">
//                         <textarea onChange={this.setInput}></textarea>
//                         <button onClick={() => {socket.emit("receive-message", {msg: this.state.input})}}>
//                             <svg>
//                                 <use href="./image/sprite.svg#icon-send"></use>
//                             </svg>
//                         </button>
//                         {/* <textarea value={true} onChange={() => {}}></textarea> */}
//                     </form>
//                 </div>
//                 {/* ComponentChatElement */}
//             </div>
//         );
//     }
// }

export default ComponentChatElement;
