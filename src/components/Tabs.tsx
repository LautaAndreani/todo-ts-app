import { useState } from "react"
import { Task } from "../types/types"
import TaskView from "./TaskView"
import Tab from "./Tab"

import { nanoid } from "nanoid"

type ActualTabs = "All" | "Active" | "Completed"
const tabs: ActualTabs[] = ["All", "Active", "Completed"]

export default function Tabs() {
	const [actualTab, setActualTab] = useState<ActualTabs>("All")
	const [tasks, setTasks] = useState<Task[]>([{ task: "Testing", completed: false, id: nanoid() }])

	const handleCompleted = (taskCompleted: Task) => {
		const getTask = tasks.find(task => task.id === taskCompleted.id)
		getTask ? (getTask.completed = !getTask.completed) : null
	}

	const contentTabs = {
		All: () => <TaskView {...{ setTasks, tasks, handleCompleted }} />,
		Active: () => <TaskView {...{ setTasks, tasks, handleCompleted }} showActive />,
		Completed: () => <TaskView {...{ setTasks, tasks, handleCompleted }} showCompleted />,
	}
	const ActualContentTab = contentTabs[actualTab]

	return (
		<section className="tab-container">
			<li className="tab-list">
				{tabs.map((tab, i) => (
					<Tab title={tab} actualTab={actualTab} setActualTab={setActualTab} key={i} />
				))}
			</li>
			<ActualContentTab />
		</section>
	)
}
