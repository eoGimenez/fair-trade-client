import axios from 'axios';

class PostServiceConst {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005/api"
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  newPost(post) {
    return this.api.post('/post/new', post);
  }

  getAll () {
    return this.api.get('/post');
  }

  getOne (postId) {
    return this.api.get(`/post/${postId}`);
  }

  updateOne (postId, reqBody){
    return this.api.put(`/post/${postId}/edit`, reqBody);
  }

  deleteProject(id) {
    return this.api.delete(`/post/${id}/delete`);
  } 

}

// Create one instance of the service
const PostService = new PostServiceConst();

export default PostService;