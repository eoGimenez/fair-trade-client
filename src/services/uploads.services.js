import axios from "axios"

const api = axios.create({
    // make sure you use PORT = 5005 (the port where our server is running)
    baseURL: "http://localhost:5005/api"
    // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
    throw err;
};


const addAvatar = (avatar) => {
    return api.post("/user/upload", avatar)
        .then(res => res.data)
        .catch(errorHandler)
}


export { addAvatar }