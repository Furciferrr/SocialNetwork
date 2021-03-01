import React, { useEffect, useState } from 'react'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

    const ChatPage: React.FC = () => {
        
    return (
        <div>
            <Chat/>
        </div>
    )
}


    const Chat: React.FC = () => {
        
        return (
            <div>
                <Messages/>
                <AddmessageChatForm/>
            </div>
        )
    }

    const Messages: React.FC = () => {

        const [messages, setMessages] = useState<ChatMessageType[]>([])

        useEffect(()=> {
            ws.addEventListener('message', (e)=> {
                setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
            })
        },[])

        return (
            <div style={{ height:'400px', overflowY: 'auto'}} >
                {messages.map((m, index)=>{
                    return <Message key={index} message={m}/>
                })}
            </div>
        )
    }

    const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
        
        return (
            <div>
                <img alt='avatar' src={message.photo}/> <b>{message.userName}</b>
                <br/>
                {message.message}
                <hr/>
            </div>
        )
    }

    const AddmessageChatForm: React.FC = () => {
        const [message, setMessage] = useState('')
        const [readyStatus, setReadyStatus] = useState(false)

        useEffect(()=>{
            ws.addEventListener('open', ()=>{
                setReadyStatus(true)
            })
        },[])
        const sendMessage = () => {
            if(!message){
                return
            }
            ws.send(message)  
            setMessage('')  
        }
        return (
            <div>
                <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} ></textarea>
                </div>
                <div>
                <button onClick={sendMessage} disabled={!readyStatus}>Send</button>
                </div>
                
            </div>
        )
    }

export default ChatPage