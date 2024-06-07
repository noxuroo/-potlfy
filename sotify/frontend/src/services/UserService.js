import $api from "../http";

export default class UserService {
    static createNewUser() {
        console.log(1)
        return $api.post('create_new_user')
    }
}