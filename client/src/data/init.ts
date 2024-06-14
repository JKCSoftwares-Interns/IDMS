import axios from "axios";

// import dotenv from 'dotenv';
// dotenv.config();

// console.log("Connecting to server at ", process.env.SERVER_URL)

// hardcoding it for now; must come from `.env` file

const serverInstance = axios.create({
	baseURL: "http://localhost:8000",
});

export default serverInstance;