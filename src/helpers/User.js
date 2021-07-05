import axios from "axios";
import jwtDecode from "jwt-decode";

export default class User {
    constructor() {
        this.token = localStorage.getItem('token');
    }

    static decode = (token) => jwtDecode(token);

    async check() {
        let url = 'http://localhost:8000/merchant/product';
        return await axios.get(url, {
            headers: {
                authorization: `bearer ${this.token}`
            }
        }).then(res => res.status === 200)
        .catch(err => false);
    }

    saveToken(token) {
        this.token = token;
        let { exp } = jwtDecode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpired', exp);
    }
}
