export interface Style {
	[className: string]: string;
}

export interface Task {
	task_id: number;
	task_title: string;
	task_detail: string;
	task_status: number;
	task_category: number;
	task_created: number;
	task_createdby: string;
	task_charged: string;
	task_deadline?: Date;
}

export interface Status {
	index: number;
	id: string;
	label: string;
}
