import axios from 'axios';

export default axios.create({
    baseURL:'https://63fb-151-68-97-97.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})