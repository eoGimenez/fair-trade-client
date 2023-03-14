import { useContext, useEffect, useRef, useState } from "react"
import Talk from "talkjs"
import { AuthContext } from "../context/auth.context"
import userService from "../services/user.services";

export default function ChatBox({ author: { _id, name, email } }) {
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
                photoUrl: "https://picsum.photos/200/300",
                welcomeMessage: 'Hello!',
                role: "defaul"
            });
            const contactedUser = new Talk.User({
                id: _id,
                name: name,
                email: email,
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
            const inBox = session.createInbox();
            inBox.select(chat);

            inBox.mount(inBoxDiv.current)
      
           /*      userService.addChatId(contactedUser.id, { chatId })
                    .then(result => {
                        console.log("RESULTADO DEL UPDATE DE CHATID", result)
                    })
                    .catch(err => console.log(err))

                userService.addChatId(currentUser.id, { chatId })
                    .then(result => {
                        console.log("RESULTADO DEL UPDATE DE CHATID", result)
                    })
                    .catch(err => console.log(err)) */
            

            console.log("CHAT BOX CURRENT:", inBox)
            return () => session.destroy();
        }
    }, [talkLoaded])
    return <div className="chat" ref={inBoxDiv} />

}
