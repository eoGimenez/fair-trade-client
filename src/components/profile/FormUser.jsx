/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/* import img2 from "../profile/emptyavatar.png"; */
import userService from "../../services/user.services";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import "./ProfilePage.css"
import { addAvatar } from "../../services/uploads.services";

function FormUser(currentUser) {

  const { user, isLoading, isLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate()
 /*  console.log("AVATAR:", currentUser) */
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
      /* console.log("RTA CLOUDINADRYYYYY:",response.fileUrl); */
      setImg(response.fileUrl);
    })
    .catch((err) => console.log("Error while uploading the file: ", err));
};

  const formHandler = () => {
    setForm(true);
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
       setUsuario(response.data)
  /* console.log('RESPONSE CAMBIO', response.data) */
      setForm(false)

    })
    .catch(err =>console.log("ERROR PUT",err))
      
   

  };
 useEffect(()=>{
  setEmail(user.email)
  setName(user.name)
  setSurname(user.surname)
  setCif(user.cif)
  

 },[user])

  return (
    <>

       {error && <div class="alert alert-danger d-flex align-items-center" role="alert">
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

      
      {!isLoading && isLoggedIn &&
      <><div
        id="cajafoto"
        class="card mx-auto border-0 ratio-1x1  "
        style={{ width: "25rem" }}>
        {/* bg-warning */}
        <div className="avatar">
        <img src={usuario.avatar} alt="avatar"/>
        </div>
        <div id="avatar">
          {/* <img 
          src={user.avatar === "" ? (img):(user.avatar)} 
          class="card-img-top " 
          alt="Avatar"/> 
        </div>
        <div id="avatar">
           */}
        </div>
      </div>
      <div class="card-body ">
        {!form ? (
          <div className="card mb-3 " style={{ width: "25rem" }}> {/* bg-warning */}
            <div className="adios1">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{usuario?.name}</h5>
                  <p className="card-text">{usuario?.surname}</p>
                  <p className="card-text">{usuario?.location}</p>
                  <p className="card-text">{usuario?.email}</p>
                  <p className="card-text">{usuario?.cif}</p>
                  <p className="card-text">{usuario?.role}</p>
                 
                  {currentUser.user._id === user._id ? (<button
                    type="submit"
                    class="btn btn-primary"
                    onClick={formHandler}>
                    Edit
                  </button>) : <p>BORRARRRRRR!!!!!!</p>}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <><form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  /*    placeholder={user.email} */
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setChangePass(true);

                  } } />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="*******"
                  value={passwordRe}
                  onChange={(e) => {
                    setPasswordRe(e.target.value);
                    setChangePass(true);
                  } } />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  CIF
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={cif}
                  onChange={(e) => setCif(e.target.value)} />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={SubmitHandler}
              >
                Confirm
              </button>

              <input type="file" onChange={(e) => handleFileUpload(e)} name="avatar" />

            </form>
            </>
        )}
      </div>
      </>}
    </>
  );
}

export default FormUser;

