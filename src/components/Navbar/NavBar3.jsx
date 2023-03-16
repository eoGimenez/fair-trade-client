import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import "./Navbar3.css";
import logoImg from "./navbarlogo.png";

export default function Navbar3() {
    const { logOutUser, user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [id, setId] = useState("");
    const [userRole, setUserRole] = useState("");
    const [currentUser, setCurrentUser] = useState({});

    setTimeout(() => {
        setCurrentUser(user);
    }, 50);
    useEffect(() => {
        setIsLoading(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setId(currentUser._id);
            setUserRole(currentUser.role);
            setIsLoading(false);
            console.log("USER EN ", currentUser);
        });
    }, [currentUser]);

    return (
        <>
            {!isLoading && (
                <>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid navbar">
                            <Link to="/">
                                <img src={logoImg} alt="Logo" id="logoNav" />
                            </Link>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item mx-3">
                                        <Link to={`/profile/${id}`} className="active">
                                            <p className="active">
                                                <i class="fa-solid fa-user "></i>Profile
                                                <br />
                                            </p>
                                        </Link>
                                    </li>
                                    {userRole === "Artisan" && (
                                        <li class="nav-item mx-3">
                                            <Link to="/post/new" className="active">
                                                <p className="active">
                                                    <i class="fa-solid fa-plus"></i>New Craft
                                                </p>
                                            </Link>
                                        </li>
                                    )}
                                    <li class="nav-item mx-3">
                                        <Link to="/post" className="">
                                            <p className="active">
                                                <i class="fa-solid fa-signs-post"></i> Craft
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <button onClick={logOutUser} className="active mx-5">
                                            <p className="active">
                                                <i className="fa-solid fa-right-from-bracket"></i> Log
                                                Out
                                            </p>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
            )}
        </>
    );
}
