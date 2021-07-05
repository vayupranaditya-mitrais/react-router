import axios from "axios";
import jwtDecode from "jwt-decode";

export default class User {
    constructor() {
        this.token = localStorage.getItem('token');
        if (this.token) {
            User.decode(this.token);
        }
    }

    static decode = (token) => jwtDecode(token);

    async check() {
        let url = 'http://localhost:8000/merchant/product';
        return await axios.get(url, {
            headers: {
                authorization: `bearer ${this.token}`
            }
        }).then(res => res.status === 200);
    }


}
