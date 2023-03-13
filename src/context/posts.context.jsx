import {
  createContext,
  useEffect,
  useState,
} from "react";
import PostService from "../services/post.service";

const postContext = createContext();

function PostProvicerWrapper({children}) {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    PostService.getAll()
      .then((results) => {
        setPosts(results.data);
        console.log("RESULT CONTEXT POST:", results.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, getPosts }}>
      {children}
    </postContext.Provider>
  );
}

export { postContext, PostProvicerWrapper };
