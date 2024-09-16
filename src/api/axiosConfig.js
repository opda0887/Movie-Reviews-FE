import axios from "axios";

// inorder for client HTTP requests to not be blocked by CORS
export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
});