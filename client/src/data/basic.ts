import serverInstance from "./init";

async function getAllData(path: string): Promise<any> {

	try {
		const response = await serverInstance.get(path);
		const result: object[] = response.data;
		return result;
	} catch (e) {
		console.error(`Failed to fetch the data for ${path}:`, e)
		return []
	}

}

async function deleteThatShit(path: string): Promise<number> {

	try {
		const response = await serverInstance.delete(path);
		console.log("Success:", response.data);
		return response.status;
	} catch (e) {
		console.error(`Failed to delete the data for ${path}:`, e)
		return 500;
	}

}

async function addMoreShit(path: string, data: object): Promise<number> {

	try {
		const response = await serverInstance.post(path, data);
		console.log("Success:", response.data);
		return response.status;
	} catch (e) {
		console.error(`Failed to add the data for ${path}:`, e)
		return 500;
	}

}

async function updateThatShit(path: string, data: object): Promise<number> {
	
	try {
		const response = await serverInstance.post(path, data);
		console.log("Success:", response.data);
		return response.status;
	} catch (e) {
		console.error(`Failed to update the data for ${path}:`, e)
		return 500;
	}

}

async function fetchInfo(path: string): Promise<any> {

	try {
		const response = await serverInstance.get(path);
		const result: object[] = response.data;
		return result;
	} catch (e) {
		console.error(`Failed to fetch the data for ${path}:`, e)
		return []
	}

}

export { getAllData, deleteThatShit, addMoreShit, updateThatShit, fetchInfo}
