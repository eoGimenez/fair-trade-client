/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
/* import img2 from "../profile/emptyavatar.png"; */
import userService from "../../services/user.services";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import "../../pages/ProfilePage/ProfilePage.css";
import { addAvatar } from "../../services/uploads.services";
import "../../pages/PostPage/PostNewPage.css"


function FormUser({currentUser, setCurrentUser}) {

  const { user, isLoading, isLoggedIn} = useContext(AuthContext);

  /* const navigate = useNavigate() */
  //console.log("AVATAR:", currentUser) 
  const [form, setForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [cif, setCif] = useState("");
  const [img, setImg] = useState("");
  const [error, setError]= useState("")
  const [changePass, setChangePass]=useState(false);

  const [usuario, setUsuario] = useState(user)
  console.log('USUARIOOOOOO', usuario) 


 const handleFileUpload = (e) => {
  const uploadData = new FormData();
  uploadData.append("avatar", e.target.files[0]);
    addAvatar(uploadData)
    .then((response) => {
      setImg(response.fileUrl);
    })
    .catch((err) => console.log("Error while uploading the file: ", err));
};

  const formHandler = () => {
    setForm(!form);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      email === "" ||
      name === "" ||
      surname === "" ||
      cif === ""
    ) {
       setError("Faltan campos")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("EMail inconrrecto")
      return;
    }

   if(changePass) { const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
   if (!passwordRegex.test(password)) {
     setError("Pass inconrrecto")
     
     return;
   }} 

    const requestBody = {
      email,
      name,
      surname,
      cif,
      avatar: img
    }

     if(changePass){
      requestBody.password= password;
       requestBody.passwordRe = passwordRe;
    }

    userService.updateUser(user._id, requestBody)
    .then(response=>{
      setCurrentUser(response.data)
   //console.log('RESPONSE CAMBIO', form) 
      setForm(!form)

    })
    .catch(err =>console.log("ERROR PUT",err))
      
   

  };
 useEffect(()=>{
  setEmail(currentUser.email)
  setName(currentUser.name)
  setSurname(currentUser.surname)
  setCif(currentUser.cif)
  
 },[currentUser])

  return (
    <>

       {error && <div className="alert alert-danger d-flex align-items-center" role="alert">
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
      </div>}


          {/* INFO PEOPLE!!! */}
          <div id="people">
        {!isLoading && isLoggedIn &&
          <>


            {/* AVATAR CARD */}
            <div id="avatar">
              <img src={currentUser.avatar} alt="avatar" width="300" className="user-img rounded-circle " />
            </div>
            {/* AVATAR CARD */}


            {/* ARTISAN CARD */}
            <div className="card-body border-0">
              {!form ? (
                <div className="card mb-3 border-0" style={{ width: "25rem" }}> 
                  <div className="adios1">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="commerce">{currentUser.name}</h5>
                        <p className="name">{currentUser.surname}</p>
                        <p className="card-text">{currentUser.location}</p>
                        <p className="card-text">{currentUser.email}</p>
                        <p className="card-text">{currentUser.cif}</p>
                        <p className="card-text">{currentUser.role}</p>
                        {currentUser._id === user._id ? (<button
                          type="submit"
                          id="whitebutton"
                          onClick={formHandler}>
                          Edit
                        </button>) : <p></p>}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (

                // FORM!!!!!!!!!!!
                <>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nameId" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameId"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastNameId" className="form-label">
                        LastName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameId"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="passwordId" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="passwordId"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setChangePass(true);

                        }} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repearPasswordId" className="form-label">
                        Repeat Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="repearPasswordId"
                        placeholder="*******"
                        value={passwordRe}
                        onChange={(e) => {
                          setPasswordRe(e.target.value);
                          setChangePass(true);
                        }} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cifId" className="form-label">
                        CIF
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cifId"
                        value={cif}
                        onChange={(e) => setCif(e.target.value)} />
                    </div>

                    <input type="file" onChange={(e) => handleFileUpload(e)} name="avatar" />

                    <button
                      type="submit"
                      id="whitebutton"
                      onClick={SubmitHandler}
                    >
                      Confirm
                    </button>

                  </form>
                </>
                // FORM!!!!!!!!!!!

              )}
            </div>

          </>}
         </div>
         {/* ARTISAN CARD */}

          {/* INFO PEOPLE!!! */}

    </>
  );
}

export default FormUser;

