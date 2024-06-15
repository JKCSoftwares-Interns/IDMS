interface Field<T> {
	name: keyof T;
	type: string,
	label: string;
	placeholder: string;
	category: string;
}

const initializeFormData = <T>(metadata: Field<T>[]): T => {
    const initialFormData: Partial<T> = {};
    metadata.forEach(field => {
        initialFormData[field.name] = field.type === "number" ? 0 : "";
    });
    return initialFormData as T;
};

function groupByCategory(data: any[]) {
	return data.reduce((acc: any, item: any) => {
		const key = item.category;
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(item);
		return acc;
	}, {});
}

export { groupByCategory, initializeFormData, Field };