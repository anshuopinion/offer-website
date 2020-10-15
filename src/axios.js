import Axios from "axios";

const axios = Axios.create({ baseURL: process.env.SERVER_URL });

export default axios;
