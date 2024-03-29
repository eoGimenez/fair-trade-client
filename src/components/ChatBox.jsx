/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react"
import Talk from "talkjs"
import { AuthContext } from "../context/auth.context"

export default function ChatBox({ author: { _id, name, email, avatar } }) {
    const inBoxDiv = useRef();
    const [talkLoaded, setTalkLoaded] = useState(false);
    const { user } = useContext(AuthContext);
   
    Talk.ready
        .then(result => {
            setTalkLoaded(true)
        });


    useEffect(() => {
        if (talkLoaded) {
            const currentUser = new Talk.User({
                id: user._id,
                name: user.name,
                email: user.email,
                photoUrl: user.avatar,
                welcomeMessage: 'Hello!',
                role: "defaul"
            });
            const contactedUser = new Talk.User({
                id: _id,
                name: name,
                email: email,
                photoUrl: avatar,
                welcomeMessage: 'Hello!',
                role: "defaul"
            });

            const session = new Talk.Session({
                appId: process.env.REACT_APP_YOUR_APP_ID,
                me: currentUser
            })
           
            const chatId = Talk.oneOnOneId(currentUser, contactedUser);
            const chat = session.getOrCreateConversation(chatId);
            chat.setParticipant(currentUser);
            chat.setParticipant(contactedUser);
            const inBox = session.createPopup();
            inBox.select(chat);

            inBox.mount(inBoxDiv.current)
      
            

            console.log("CHAT BOX CURRENT:", inBox)
            return () => session.destroy();
        }
    }, [talkLoaded])
    return <div className="chat" ref={inBoxDiv} />

}
