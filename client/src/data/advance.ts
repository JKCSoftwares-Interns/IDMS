import serverInstance from "./init";

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

export { getData, reqData };
