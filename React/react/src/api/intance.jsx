import axios from "axios";

const intance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`
    }
})
export default intance
