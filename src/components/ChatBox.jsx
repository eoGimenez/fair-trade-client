import { useContext, useEffect, useRef, useState } from "react"
import Talk from "talkjs"
import { AuthContext } from "../context/auth.context"


export default function ChatBox() {
    const chatBoxDiv = useRef();
    
    const [ talkLoaded, setTalkLoaded ] = useState(false);
    const { user } = useContext(AuthContext);
    Talk.ready
    .then(result => {
        setTalkLoaded(true)
    });
    
    useEffect(() => {
        if(talkLoaded) {
            const currentUser = new Talk.User({
                id: user._id,
                name: user.name,
                email: user.email,
                photoUrl: "https://picsum.photos/200/300",
                welcomeMessage: 'Hello!',
                role: "defaul"
            });
            const contactedUser = new Talk.User({
                id: "2313",
                name: "Pepito",
                email: "user@email",
                photoUrl: "https://picsum.photos/200/300",
                welcomeMessage: 'Hello!',
                role: "defaul"
            });
            
            const session = new Talk.Session({
                appId: "t4w8AzfB",
                me: currentUser
            })
            
            const chatId = Talk.oneOnOneId(currentUser, contactedUser);
            const chat = session.getOrCreateConversation(chatId);
            chat.setParticipant(currentUser);
            chat.setParticipant(contactedUser);
            
            const chatBox = session.createChatbox();
            chatBox.select(chat);
            
            chatBox.mount(chatBoxDiv.current)
            
            console.log("CHAT BOX CURRENT:", chatBox)
            return () =>  session.destroy();
        }
    }, [talkLoaded])
    console.log("CurreNT: ", chatBoxDiv)

    return <div className="chat" ref={chatBoxDiv} />
       
}
