import "./ProfilePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../pages/HomePage/slide3.jpg";
import userService from "../../services/user.services";

function CommerceForm(props) {
  const { user, authenticateUser } = props;
  const [form, setForm] = useState(false);
  const [commercename, setCommercename] = useState(user.commercename);
  const [location, setLocation] = useState(user.location);
  const [aboutme, setAboutme] = useState(user.aboutme);
  const [error, setError] = useState("");

  const formHandler = () => {
    setForm(true);
  };

  const SubmitHandler = (e) => {
    console.log("adentro e lsubmit");
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
        authenticateUser();

        console.log("RESPONSE CAMBIO", response.data);

        /* navigate(`/profile/ ${user._id}`) */
        setForm(false);
      })
      .catch((err) => console.log("ERROR PUT", err));
  };

  return (
    <>
      {error && (
        <div class="alert alert-danger  d-flex align-items-center" role="alert">
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
        </div>
      )}

      <div className="col  float-md-start">
        {" "}
        {/* bg-success */}
        <div class="card border-0 ">
          {/*  <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <div class="mb-3">
              {!form ? (
                <>
                  <div
                    class="card text-bg-light mb-3"
                    style={{ width: "20rem" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title">
                        About My work:
                        <br />
                        {user.aboutme}
                      </h5>
                      <p class="card-text">Commername: {user.commercename}</p>

                      <p class="card-text">Location:{user.location}</p>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={formHandler}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <form>
                    <label for="exampleInputPassword1" class="form-label">
                      Commerce Name
                    </label>
                    <input
                      type="texttext"
                      class="form-control"
                      id="exampleInputPassword1"
                      value={commercename}
                      onChange={(e) => setCommercename(e.target.value)}
                    />

                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        About My work
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        value={aboutme}
                        onChange={(e) => setAboutme(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={SubmitHandler}
                    >
                      Confirm
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommerceForm;
