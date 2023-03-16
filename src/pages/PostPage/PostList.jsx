import Navbar2 from "../../components/Navbar/Navbar2";
import Post from "../../components/Post";
import Categorias from "../../components/Posts/Categorias";


function PostList() {
  
  return (
    <>
    <div className="divRow">
    <Navbar2/>
    <Categorias/>
    </div>
      <Post />
    </>
  );
}

export default PostList;
