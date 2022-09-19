import axios from "axios"

let url = "http://localhost:3001/user"

class JsonService {

    saveUser(user) {
        return axios.post(`${url}`, user);
    }

    getAllUsers() {
        return axios.get(`${url}`);
    }

}

export default new JsonService