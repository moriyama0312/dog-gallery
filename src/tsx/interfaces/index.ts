export interface Style {
	[className: string]: string;
}

export interface Task {
	id: number;
	title: string;
	detail: string;
	status: 'not-started' | 'working' | 'complete';
	category: string;
	created_day: number;
	deadline?: Date;
}
