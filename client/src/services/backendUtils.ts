import axios from "axios";

// import dotenv from 'dotenv';
// dotenv.config();

// console.log("Connecting to server at ", process.env.SERVER_URL)

// hardcoding it for now; must come from `.env` file

const serverInstance = axios.create({
	baseURL: "http://localhost:8000",
});

async function getData(path: string, field?: string): Promise<number | string[]> {
	const response: any = await serverInstance.get(path);
	try {
		if (field) {
			const result: string[] = [];

			for (let i in response.data) {
				result.push(response.data[i][field]);
			}
			return result;
		} else {
			return response.data;
		}
	} catch (error) {
		console.error(`Failed to fetch data from ${path}:`, error);
		return [];
	}
};

async function reqData(path: string, field: string): Promise<string[]> {
	const response = await serverInstance.post(path, {
		name: field,
	});
	try {
		const result = [];

		for (let i in response.data) {
			result.push(response.data[i][field]);
		}

		return result;
	} catch (error) {
		console.error(`Failed to request data from ${path}:`, error);
		return [];
	}
};

export { serverInstance, getData, reqData };
