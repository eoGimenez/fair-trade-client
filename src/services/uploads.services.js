import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5005/api"
});

const errorHandler = (err) => {
    throw err;
};

const uploadImage = (image) => {
    return api.post("/post/upload", image)
        .then(res => res.data)
        .catch(errorHandler);
};

const addAvatar = (avatar) => {
    return api.post("/user/upload", avatar)
        .then(res => res.data)
        .catch(errorHandler)
}


export { addAvatar, uploadImage }