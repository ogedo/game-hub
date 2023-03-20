import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"f54fc255d6324f6a9ce265e298fb02ad"
    }

})