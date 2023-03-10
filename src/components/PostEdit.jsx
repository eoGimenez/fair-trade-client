import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../services/post.service";

export default function PostEdit({getPosts, toggleEdit, getPost, postId, setPost }) {
  const [form, setForm] = useState({
    title: "",
    contract: "",
    image: "",
    description: "",
    batch: "",
    price: "",
    category: "",
    available: "",
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    PostService.updateOne(postId, {
      title: form.title,
      contract: form.contract,
      image: form.image,
      description: form.description,
      batch: form.batch,
      price: form.price,
      category: form.category,
      available: form.available
    }, {new: true})
    .then(result => {
      console.log("result ID", result.data._id);
      console.log("result", result)
      getPosts();
      toggleEdit();
      getPost();
      setPost(result.data);
      navigate(`/post/${result.data._id}`)
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <form className="row " onSubmit={submitHandler}>
        <div className="col col-md-6">
          <label htmlFor="title" className="form-label">
          title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="contract" className="form-label">
            contract
          </label>
          <input
            type="text"
            className="form-control"
            id="contract"
            value={form.contract}
            onChange={(e) => setForm({ ...form, contract: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="image" className="form-label">
          image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <div className="col col-6">
          <label htmlFor="description" className="form-label">
          description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="batch" className="form-label">
          batch{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="batch"
            value={form.batch}
            onChange={(e) => setForm({ ...form, batch: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="price" className="form-label">
          price{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="category" className="form-label">
          category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            form={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="available" className="form-label">
          available
          </label>
          <input
            type="text"
            className="form-control"
            id="available"
            form={form.available}
            onChange={(e) =>
              setForm({ ...form, available: e.target.value })
            }
          />
        </div>
        <div className="col col-md-6">
          <button type="submit" className="btn btn-primary">
            edit!
          </button>
        </div>
      </form>
    </>
  );
}
