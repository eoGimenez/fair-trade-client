import Navbar2 from "../../components/Navbar/Navbar2";
import Post from "../../components/Post";
import Categorias from "../../components/Posts/Categorias";


function PostList() {
  
  return (
    <>
    <Navbar2/>
    <Categorias/>
      <Post />
    </>
  );
}

export default PostList;
