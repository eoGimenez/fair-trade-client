import axios from 'axios';

class UserService {
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

   getUsers = ()=>{
    return this.api.get('/user/all');
   }

 getUser = (userId)=> {
    return this.api.get(`/user/${userId}`);
    }

  updateUser = (userId, requestBody) => {
    return this.api.put(`/user/${userId}/edit`, requestBody);
  }

  deleteUser=  (userId) => {
    return this.api.delete(`/user/${userId}/delete`);
  } 
}

const userService = new UserService();

// //CLOUDINARY!!!!
// const uploadImage = (file) => {
//   return api.post("/upload", file)
//     .then(res => res.data)
//     .catch(errorHandler);
// };


export default userService;