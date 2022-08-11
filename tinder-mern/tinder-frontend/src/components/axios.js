import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-bsh.herokuapp.com"
})

export default instance