/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { postContext } from "../context/posts.context"
import imgFabric from "./Posts/Fabric2.jpg";
import imgHome from "./Posts/Home2.jpg";
import imgMis from "./Posts/Mis.jpg";
import imgNc from "./Posts/NC.jpg";
import "../../src/components/Post.css"

export default function Post() {

    const { posts, getPosts } = useContext(postContext);
    const { user } = useContext(AuthContext)
    const [category, setcategory] = useState("")
    const [reversedPost, setreversedPost] = useState([])

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        setreversedPost(posts.reverse());
    }, [posts])

    const handleClick = (choose) => {
        choose !== category ? setcategory(choose) : setcategory("")
    }
    
    return (
        <>
            <div id="categories">
            <div>
            <div className="categorias">
                <div className="card-group w-75  mx-auto ">
                    <div className="card border border-0 sm-col-2">
        
                        <Link onClick={() => handleClick("Home Deco")}>
                            <img src={imgHome} className="card-img-top rounded" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h2 className="card-title fw-bold">Home Deco</h2>
                        </div>
                    </div>
                    <div className="card sm-col-2 border border-0">
                    <Link onClick={() => handleClick("Natural Cosmetics")}>
                        <img src={imgNc} className="card-img-top rounded " alt="..." />
                        </Link>
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Natural Cosmetics</h3>
                        </div>
                    </div>
                    <div className="card sm-col-2  border border-0">
                    <Link onClick={() => handleClick("Fabric & Fashion")}>
                        <img src={imgFabric} className="card-img-top rounded " alt="..." />
                        </Link>
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Fabric & Fashion</h3>
                        </div>
                    </div>
                    <div className="card sm-col-2 border border-0">
                    <Link onClick={() => handleClick("Misellaneous")}>
                        <img src={imgMis} className="card-img-top rounded " alt="..." />
                        </Link>
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Miscellaneous</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {!category && reversedPost.map(post => {
                return (
                    <div key={post._id} id="postcart" className="card mb-3 w-50  mt-5 mx-auto " style={{ "max-width": "540px;" }}>
                        <div className="row g-0">
                            <div className="col col-md-4">
                                <img src={post.image} className="img-fluid rounded-start" alt="Img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{post.title}</h4>
                                    <div className="col-6">
                                        <Link to={`/post/${post._id}`} props={user} id="whitebutton">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            {category && reversedPost.filter(post => post.category.includes(category)).map(post => {
                return (
                    <div key={post._id} className="card mb-3 w-50  mt-5 mx-auto" style={{ "max-width": "540px;" }}>
                        <div className="row g-0">
                            <div className="col col-md-4">
                                <img src={post.image} className="img-fluid rounded-start" alt="Img" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{post.title}</h4>
                                    <p className="card-text">{post.description}</p>
                                    <p className="card-text">Batch:{post.batch}</p>
                                    <p className="card-text">Price per unit: {post.price}€.</p>
                                    <p className="card-text"><small className="text-muted">{post.available}</small></p>
                                    <div className="col-6">
                                        <Link to={`/post/${post._id}`} props={user} id="whitebutton" >Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })


            }
            </div>
        </>
    )
}
