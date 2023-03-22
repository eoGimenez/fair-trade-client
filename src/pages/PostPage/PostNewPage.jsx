import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar3 from "../../components/Navbar/NavBar3";
import { AuthContext } from "../../context/auth.context";
import { postContext } from "../../context/posts.context";
import PostService from "../../services/post.service";
import { uploadImage } from "../../services/uploads.services";
import "./PostNewPage.css";

function PostNewPage() {
  //eslint-disable-next-line
  const { posts, getPosts } = useContext(postContext);
  const { user } = useContext(AuthContext);

  const [img, setImg] = useState("");

  const [form, setForm] = useState({
    title: "",
    contract: "",
    description: "",
    batch: "",
    price: "",
    category: "",
    available: false,
  });

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    uploadImage(uploadData)
      .then((response) => {
        console.log("RTA CLOUDINADRYYYYY:", response.fileUrl);
        setImg(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    PostService.newPost({
      title: form.title,
      contract: form.contract,
      image: img,
      description: form.description,
      batch: form.batch,
      price: form.price,
      category: form.category,
      available: true,
      author: user._id,
    })
      .then((result) => {
        getPosts();
        navigate(`/post`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar3 />
    <div >
     
      <div id="newpost" className=" containerform  mb-3 d-flex mx-auto">
        <form className="row mx-auto" id="formnew" onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="col col-md-4 ">
              <label htmlFor="title" className="form-label fw-bold">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
          </div>  

            <div className="mb-3">
              <div className="col col-md-4">
                <label
                  htmlfor="exampleFormControlTextarea1"
                  className="form-label fw-bold"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
         

            <div className="mb-3">
              <div className="col col-md-4">
                <label
                  htmlFor="category"
                  className="form-label fw-bold"
                ></label>
                <select
                  className="form-select col col-md-4"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setForm({ ...form, contract: e.target.value })
                  }
                >
                  <option selected> Select a Contract</option>
                  <option value="Total batch in concession">
                    Batch in concession
                  </option>
                  <option value="Percentages to arrenge">
                    Percentages to arrenge
                  </option>
                  <option value="Would like to sale by unit">
                    Would like to sale by unit
                  </option>
                </select>
              </div>
            </div>

            <div className="col col-md-2">
              <label htmlFor="batch" className="form-label fw-bold">
                Batch
              </label>
              <input
                type="number"
                className="form-control"
                id="batch"
                value={form.batch}
                onChange={(e) => setForm({ ...form, batch: e.target.value })}
              />
            </div>
            <div className="col col-md-2">
              <label htmlFor="price" className="form-label fw-bold">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <div className="col col-md-4">
                <label
                  htmlFor="category"
                  className="form-label fw-bold"
                ></label>

                <select
                  className="form-select col col-md-4"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option selected> Select a Category</option>
                  <option value="Natural Cosmetics">Natural Cosmetic</option>
                  <option value="Home Deco">Home Deco</option>
                  <option value="Fabric & Fashion">Fabric & Fashion</option>
                  <option value="Misellaneous">Miscellaneous</option>
                </select>

                <div className="mb-2 mt-5">
                  <div className="col col-md-4">
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e)}
                      name="image"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <button id="whitebutton" type="submit">
                    Create
                  </button>
                </div>
              </div>
            </div>

            {/*  <div className="col col-md-4">
             <button type="submit" className="btn btn-primary">
              Create
            </button>  */}

            {/*   </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
export default PostNewPage;
