import axios from "axios"

const setLogin = (body) => {
    return axios.post("http://localhost:8080", body)
}

export default setLogin

