/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../pages/HomePage/slide3.jpg";
import userService from "../../services/user.services";


function FormUser(props) {

  const { user, authenticateUser} = props;

  const navigate = useNavigate()
   /* console.log("AVATAR:", user) */
  const [form, setForm] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [cif, setCif] = useState(user.cif);
  const [img, setImg] = useState(img2);
  const [error, setError]= useState("")
  const [changePass, setChangePass]=useState(false);



  const formHandler = () => {
    setForm(true);
  };



  const SubmitHandler = (e) => {

    console.log("adentro e lsubmit")
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
      avatar:""
    }

     if(changePass){
      requestBody.password= password;
       requestBody.passwordRe = passwordRe;
    }
 /* 
    console.log("ID", user._id)
    console.log("REQ>BODY", requestBody)
 */
    userService.updateUser(user._id, requestBody)
    .then(response=>{
       authenticateUser()

      console.log('RESPONSE CAMBIO', response.data)

      /* navigate(`/profile/ ${user._id}`) */
      setForm(false)

    })
    .catch(err =>console.log("ERROR PUT",err))
      
   

  };


  return (
    <>

       {error && <div class="alert alert-danger  d-flex align-items-center" role="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>{error}</div>
      </div>}

      <div
        id="cajafoto"
        class="card mx-auto border-0 ratio-1x1  "
        style={{ width: "25rem" }}>
        {/* bg-warning */}
        <div
          id="avatar"
          class="ratio ratio-1x1  rounded-circle overflow-hidden mb-2 mt-3 mx-auto">

          <img 
          src={user.avatar === "" ? (img):(user.avatar)} 
          class="card-img-top " 
          alt="..." />
        </div>
      </div>
      <div class="card-body ">
        {!form ? (
          <div classNameName="card mb-3 " style={{ width: "25rem" }}> {/* bg-warning */}
            <div classNameName="row g-0">
              <div classNameName="col-md-8">
                <div classNameName="card-body">
                  <h5 classNameName="card-title">{user.name}</h5>
                  <p classNameName="card-text">{user.surname}</p>
                  <p classNameName="card-text">{user.location}</p>
                  <p classNameName="card-text">{email}</p>
                  <p classNameName="card-text">{user.cif}</p>
                  <p classNameName="card-text">{user.role}</p>
                 
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={formHandler}>
                    Edit
                  </button>
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

            </form></>
        )}
      </div>
    </>
  );
}

export default FormUser;
