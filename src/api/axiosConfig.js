import axios from "axios";

// inorder for client HTTP requests to not be blocked by CORS
export default axios.create({
    baseURL: "https://9c96-103-106-239-104.ap.ngrok.io",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});