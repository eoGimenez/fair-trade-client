import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import Talk from "talkjs";

export default function InBox() {
    const inBoxDiv = useRef();

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

            const session = new Talk.Session({
                appId: process.env.REACT_APP_YOUR_APP_ID,
                me: currentUser
            })
            console.log("CURRENT USER: ",user)
            const chatId = user.chatsId[0];
            const chat = session.getInboxes()
            const inBox = session.createInbox();
            inBox.select(chatId);

            inBox.mount(inBoxDiv.current)
            
            return () =>  session.destroy();
        }
    }, [talkLoaded])

    return <div className="chat" ref={inBoxDiv} />
}