interface Field<T> {
	name: keyof T;
	type: string,
	label: string;
	placeholder: string;
	category: string;
}

interface FieldUpdater<T> {
	name: keyof T;
	type: string;
	label: string;
	placeholder: string;
	category: string;
	readonly: boolean;
}

const initFormData = <T>(metadata: FieldUpdater<T>[]): T => {
    const initialFormData: Partial<T> = {};
    metadata.forEach(field => {
        initialFormData[field.name] = field.type === "number" ? 0 : "";
    });
    return initialFormData as T;
};

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

export { groupByCategory, initializeFormData, Field, FieldUpdater, initFormData};