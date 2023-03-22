import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm";
import FormUser from "../../components/profile/FormUser";
import userService from "../../services/user.services";
import "./ProfilePage.css";
import PostUser from "../../components/profile/PostsUser";
import Navbar3 from "../../components/Navbar/NavBar3";
import InBox from "../../components/chat/InBox";

export default function ProfilePage2() {
    const { userId } = useParams();
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [sameUser, setSameUser] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [index, setIndex] = useState("chatOff")

    useEffect(() => {
        userService.getUser(userId)
            .then(response => {
                setCurrentUser(response.data);
                if (userId === response.data._id) {
                    setSameUser(true);
                    return;
                }
            })
        //eslint-disable-next-line
    }, [])


    const handleChat = () => {
        setShowChat(!showChat);
        index === "chatOff" ? setIndex("chatOn") : setIndex("chatOff");
    };

    return (
        <>
            <Navbar3 userFrom={currentUser} />
            <div className="container">
                <div className="row">
                    {currentUser ? (
                        <>
                            <div className="col-12 col-sm-12 col-md-3 col-xxl-4 m-auto fix cForm">
                                <CommerceForm currentUser={currentUser} sameUser={sameUser} setCurrentUser={setCurrentUser} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-xxl-4 m-auto fix uForm">
                                <FormUser currentUser={currentUser} sameUser={sameUser} setCurrentUser={setCurrentUser} />
                            </div>
                            {currentUser.role === "Artisan" &&
                            <div className="col-12 col-sm-12 col-md-3 col-xxl-4 m-auto fix ">
                                <PostUser user={currentUser} isLoading={isLoading} isLoggedIn={isLoggedIn} />
                            </div>}
                            <div className="col-12 col-md-4 chat">
                                <div id="chatjs" className={"" + index}>
                                    {!showChat && <button className="active" id="whitebutton" onClick={handleChat} >
                                        <i className="fa-solid fa-comment "></i> Inbox
                                    </button>}
                                    {showChat && <>
                                        <InBox />
                                        <button className="active" id="whitebutton" onClick={handleChat} >
                                            <i className="fa-solid fa-comment"></i> Go back!
                                        </button>
                                    </>}
                                </div>
                            </div>
                        </>
                    ) :
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

                </div>
            </div>
        </>
    )
}