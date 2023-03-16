import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../services/post.service";
import { uploadImage } from "../services/uploads.services";




export default function PostEdit({
  getPosts,
  toggleEdit,
  getPost,
  postId,
  setPost,
  currentPost,
}) {
  const [form, setForm] = useState({
    title: currentPost.title,
    contract: currentPost.contract,
    image: currentPost.image,
    description: currentPost.description,
    batch: currentPost.batch,
    price: currentPost.price,
    category: currentPost.category,
    available: currentPost.available,
  });
  const navigate = useNavigate();
  const [img, setImg] = useState(currentPost.image);
  const [check, setCheck] = useState(currentPost.available);
  console.log("CURRENT-POST!!!!", currentPost);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    uploadImage(uploadData)
      .then((response) => {
        setImg(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const checkSubmit = () => {
    setCheck(!check)
  };

  const submitHandler = (e) => {
    console.log("IMG!!!!", img);
    e.preventDefault();
    PostService.updateOne(
      postId,
      {
        title: form.title,
        contract: form.contract,
        image: img,
        description: form.description,
        batch: form.batch,
        price: form.price,
        category: form.category,
        available: check,
      },
      { new: true }
    )
      .then((result) => {
        /* console.log("RESULT EDIT POST:", result) */
        getPosts();
        toggleEdit();
        getPost();
        setPost(result.data);
        navigate(`/post/${result.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        id="newpost"
        class=" containerform  mb-3 d-flex justify-content-center "
      >
        <form className="row " onSubmit={submitHandler}>
          <div class="mb-3">
            <div className="col col-md-2">
              <div class="card" style={{ width: "18rem" }}>
                <img src={form.image} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div className="col col-md-4 ">
              <label htmlFor="title" className="form-label">
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

          {/* <div class="mb-3">
            <div className="col col-md-4">
              <label htmlFor="contract" className="form-label">
                Contract
              </label>
              <input
                type="text"
                className="form-control"
                id="contract"
                value={form.contract}
                onChange={(e) => setForm({ ...form, contract: e.target.value })}
              />
            </div>
          </div> */}

          <div class="mb-3">
            <div className="col col-md-4">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col col-md-2">
            <label htmlFor="batch" className="form-label">
              Batch{" "}
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
            <label htmlFor="price" className="form-label">
              Price{" "}
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
                    setForm({ ...form, contract: e.target.value })
                  }
                >
                  <option selected> Select a Contract</option>
                  <option value="Total batch in concession">
                    Total batch in concession
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

          <div className="mb-3">
            <div className="col col-md-4">
              <label htmlFor="category" className="form-label"></label>

              <select
                className="form-select col-md-4"
                aria-label="Default select example"
                onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option selected>Select a Category</option>
                <option value="Natural Cosmetic">Natural Cosmetic</option>
                <option value="Home Deco">Home Deco</option>
                <option value="Fabric & Fashion">Fabric & Fashion</option>
                <option value="Misellaneous">Misellaneous</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <div className="col col-md-4">
              <input
                type="file"
                onChange={(e) => handleFileUpload(e)}
                name="image"
              />
              {/*  <input
            type="boolean"
            className="form-control"
            id="available"
            form={form.available}
            onChange={(e) =>
              setForm({ ...form, available: e.target.value })
            }
          /> */}
            </div>
          </div>

{/*           <div class="mb-3">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch" 
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
               Available
              </label>
            </div>
          </div> */}
          
           

          <div class="form-check form-switch col col-md-2">
              <label
                className="form-check-label fw-bold "
                for="flexSwitchCheckChecked"
              >
               Available
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                 /*   {check === true ? checked : <></> }   */ 
                   checked={check}
                onClick={checkSubmit}
              />
          </div>  

        <div className="d-grid gap-2 col-2 mx-auto">
          <button type="submit" id="whitebutton">
            Edit!
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
