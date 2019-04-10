import React, { Component } from "react";
import ComponentIndividualChatMessage from "./ComponentIndividualChatMessage";

const testChatMessages = [
    {
        id: 1,
        message: "test a",
        senderId: 1
    },
    {
        id: 2,
        message: "test b",
        senderId: 2
    },
    {
        id: 3,
        message: "test c newer",
        senderId: 3
    },
    {
        id: 4,
        message: "test d",
        senderId: 4
    },
    {
        id: 5,
        message: "test e new",
        senderId: 5
    }
];

class ComponentChatElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatMessages: testChatMessages
        }
    }
    render() {
        let { handleChatState, handleChatStateSlide } = this.props;
        return(
            <div className="componentChatElement">
                <div className="chat__header">
                    <button>
                        <svg>
                            <use href="./image/sprite.svg#icon-maximize"></use>
                        </svg>
                    </button>
                    <h2>BookShelf Chat</h2>
                    <button onClick={handleChatStateSlide}>
                        <svg>
                            <use href="./image/sprite.svg#icon-cross"></use>
                        </svg>
                    </button>
                </div>
                <div className="chat__content">
                    {
                        this.state.chatMessages.map((msgChat) => {
                            return <ComponentIndividualChatMessage />
                        })
                    }
                </div>
                <div className="chat__input">
                    <form className="chat__input--sendmessage">
                        <textarea></textarea>
                        <button>
                            <svg>
                                <use href="./image/sprite.svg#icon-send"></use>
                            </svg>
                        </button>
                        {/* <textarea value={true} onChange={() => {}}></textarea> */}
                    </form>
                </div>
                {/* ComponentChatElement */}
            </div>
        );
    }
}

export default ComponentChatElement;