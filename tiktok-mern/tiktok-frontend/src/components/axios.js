import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-backend-mern-bsh.herokuapp.com"
})

export default instance