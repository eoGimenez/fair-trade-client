import axios from 'axios';

class PostService {
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

  // POST /api/examples
  newPost(post) {
    return this.api.post('/post/new', post);
  }

  // GET /api/examples
  getAll () {
    return this.api.get('/post');
  }

  // GET /api/examples/:id
  getOne = async (id) => {
    return this.api.get(`/api/examples/${id}`);
  }

  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/examples/${id}`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteProject = async (id) => {
    return this.api.delete(`/api/examples/${id}`);
  } 


}

// Create one instance of the service
//const exampleService = new PostService();

export default PostService;