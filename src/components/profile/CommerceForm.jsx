import "../../pages/ProfilePage/ProfilePage.css";
import { useContext, useState, useEffect } from "react";
import userService from "../../services/user.services";
import { AuthContext } from "../../context/auth.context";
import "../../pages/PostPage/PostNewPage.css"

function CommerceForm({currentUser, setCurrentUser}) {
  const { user,  isLoading, isLoggedIn} = useContext(AuthContext);

  console.log("CURRENT-USER-COMMERCEFORM", currentUser)
  const [form, setForm] = useState(false);
  const [commercename, setCommercename] = useState("");
  const [location, setLocation] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [error, setError] = useState("");
  const [ truncate, setTruncate ] = useState(true);

  const clickHandler = () => {
    setTruncate(!truncate)
  }

  let classDesc = "";
  if (truncate) classDesc = "text-truncate"

  const formHandler = () => {
    setForm(!form);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (commercename === "" || location === "" || aboutme === "") {
      setError("Faltan campos");
      return;
    }

    const requestBody = {
      commercename,
      location,
      aboutme,
    };

    userService
      .updateCommerce(user._id, requestBody)
      .then((response) => {
        setCurrentUser(response.data)
        setForm(!form);
      })
      .catch((err) => console.log("ERROR PUT", err));
  };

  useEffect(()=>{
    setCommercename(currentUser.commercename)
    setLocation(currentUser.location)
    setAboutme(currentUser.aboutme)
   },[currentUser])

  return (
    <>
      {error && (
        <div className="alert alert-danger  d-flex align-items-center" role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>{error}</div>
        </div>
      )}


      {/* COMMERCE CARD!!!!! */}
      <div className="comercio">
        {!isLoading && isLoggedIn &&

    
      <div className="col  float-md-start">
      
        <div className="card border-0 ">
          {/*  <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <div className="mb-3">
              {!form ? (
                <>
                  <div
                    className="card border-0 mb-3"
                    style={{ width: "20rem" }}
                  >
                    <div className="card-body border-0">
                      <h5 className="card-title">
                        <span className="titlesPro">About my work</span>
                        <br />
                        <p className={"description d-inline-block " +classDesc} onClick={clickHandler}>{currentUser.aboutme}</p>
                      </h5>
                      <p className="card-text">{currentUser.commercename}</p>

                      <p className="card-text">{currentUser.location}</p>
                     
                         
                         {currentUser._id === user._id ? (  <button
                        type="submit"
                        id="whitebutton"
                        onClick={formHandler}>
                        Edit
                      </button>    ) : <p>NO HAY CURRENT USER!!!!!!</p> }  
                    </div>
                  </div>
                  <hr/>
                </>
              ) : (
                <>
                  <form>
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Commerce Name
                    </label>
                    <input
                      type="texttext"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={commercename}
                      onChange={(e) => setCommercename(e.target.value)}
                    />

                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">
                            Location
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlfor="exampleFormControlTextarea1" className="form-label">
                            About My work
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={aboutme}
                            onChange={(e) => setAboutme(e.target.value)}
                          />
                        </div>
                        <button
                          type="submit"
                          onClick={SubmitHandler}
                          id="whitebutton"
                        >
                          Confirm
                        </button>


                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>}
      </div>
      {/* COMMERCE CARD!!!!! */}

    </>
  );
}

export default CommerceForm;
