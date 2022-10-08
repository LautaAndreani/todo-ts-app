export type ActualTabs = "All" | "Active" | "Completed"

export interface Task {
	task: string
	completed: boolean
	id: string
}
