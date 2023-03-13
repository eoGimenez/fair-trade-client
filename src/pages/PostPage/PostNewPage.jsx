import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../../components/Navbar/Navbar2";
import { AuthContext } from "../../context/auth.context";
import { postContext } from "../../context/posts.context";
import PostService from "../../services/post.service";

 function PostNewPage() {
  const { posts, getPosts } = useContext(postContext);
  const { user, autheticateUser } = useContext(AuthContext)

  const [form, setForm] = useState({
    title: "",
    contract: "",
    image: "",
    description: "",
    batch: "",
    price: "",
    category: "",
    available: false
  });
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    PostService.newPost({
      title: form.title,
      contract: form.contract,
      image: form.image,
      description: form.description,
      batch: form.batch,
      price: form.price,
      category: form.category,
      available: true,
      author: user._id
    })
      .then((result) => {
        getPosts();
        navigate(`/post`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar2 />
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
            onChange={(e) => setForm({ ...form, price: e.target.value })}
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
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
 export default PostNewPage;
