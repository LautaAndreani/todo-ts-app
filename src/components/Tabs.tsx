import { useEffect, useState } from "react"
import { ActualTabs, Task } from "../types/types"
import TaskView from "./TaskView"
import Tab from "./Tab"
import { useSetStorage } from "../utils/utils"

const tabs: ActualTabs[] = ["All", "Active", "Completed"]

export default function Tabs() {
	const [actualTab, setActualTab] = useState<ActualTabs>("All")
	const [tasks, setTasks] = useState<Task[]>([])

	const handleCompleted = (taskCompleted: Task) => {
		setTasks(
			tasks.map(task => {
				if (task.id === taskCompleted.id) {
					return { ...task, completed: !task.completed }
				}
				return task
			})
		)
	}

	useEffect(() => {
		if (localStorage.getItem("tasks")) {
			const storageTasks = JSON.parse(localStorage.getItem("tasks") as string)
			return setTasks(storageTasks)
		}
	}, [])

	useSetStorage(tasks)

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
