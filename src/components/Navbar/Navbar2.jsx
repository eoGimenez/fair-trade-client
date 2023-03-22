import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import "./Navbar2.css";
import logoImg from "./navbarlogo.png";
import InBox from "../../components/chat/InBox";

function Navbar2() {
  const { logOutUser, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("")
  const [userRole, setUserRole] = useState("")
  const [currentUser, setCurrentUser] = useState({})
  const [showChat, setShowChat] = useState(false);
  const [index, setIndex] = useState("chatOff")

  setTimeout(() => {
    setCurrentUser(user)
  }, 50)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  useEffect(() => {
    setTimeout(() => {

      setId(currentUser._id)
      setUserRole(currentUser.role)
      setIsLoading(false)
      console.log("USER EN ", currentUser)

    })

  }, [currentUser])

  const handleChat = () => {
    setShowChat(!showChat);
    index === "chatOff" ? setIndex("chatOn") : setIndex("chatOff");
  };

  return (
    <>

      <div className="container">
        <div className="raw">
          <div className="col col-sm-12 navLocated  navbar navbar-expand-lg " id="navbar2">
            <ul>
              <li>
                <Link to="/" className="col col-sm-12">
                  <img src={logoImg} alt="Logo" /*style={{ height: 60, width: 500}}*/ />
                </Link>
              </li>
              {!isLoading &&
                <>
                  <li>
                    <Link to={`/profile/${id}`} className="active">
                      <i className="fa-solid fa-user"></i>    Profile
                    </Link>
                  </li>
                  <>
                    {userRole === "Artisan" &&
                      <li>
                        <Link to="/post/new" className="active">
                          <i className="fa-solid fa-plus"></i>   New Craft
                        </Link>
                      </li>
                    }
                    <li>
                      <Link to="/post" className="active">
                        <i className="fa-solid fa-signs-post"></i>  Craft
                      </Link>
                    </li>
                    <li>
                      {/* CHAT!!!         */}
                      <div id="chatjs" className={"" + index}>
                        {!showChat && <button className="active" onClick={handleChat} >
                          <i className="fa-solid fa-comment"></i> Inbox
                        </button>}
                        {showChat && <>
                          <InBox />
                          <button className="active" onClick={handleChat} >
                            <i className="fa-solid fa-comment"></i> Go back!
                          </button>
                        </>}
                      </div>
                      {/* CHAT!!!         */}
                    </li>

                  </>
                </>}
              <div>
                <li>
                  <button onClick={logOutUser} className="active">
                    <i className="fa-solid fa-right-from-bracket"></i>   Log Out
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
