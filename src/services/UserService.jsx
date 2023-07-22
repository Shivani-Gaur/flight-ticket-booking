import axios from "axios";
const USER_URL="https://localhost:8080/user/getAll";

class UserService{

    getUsers(){
        return axios.get(USER_URL);
    }
}
export default new UserService();