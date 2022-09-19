import axios from "axios"

let url = "http://localhost:8000"
class ApiService {

    saveUser(user) {
        return axios.post(`${url}/saveUser`, user);
    }

    fetchAllUsers() {
        return axios.get(`${url}/getAllUsers`);
    }

    fetchByUserId(userId) {
        return axios.get(`${url}/getByUserId` / userId)
    }

    updateUser(id,user) {
        return axios.put(`${url}/updateUser` + id,user);
    }

    deleteUser(userId) {
        return axios.delete(`${url}/deleteById` + userId);
    }

}

export default new ApiService