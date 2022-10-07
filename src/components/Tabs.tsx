import { useState } from "react"
import AllTasks from "./All"
import Tab from "./Tab"
import { nanoid } from "nanoid"

type ActualTabs = "All" | "Active" | "Completed"
const tabs: ActualTabs[] = ["All", "Active", "Completed"]

interface Task {
	task: string
	completed: boolean
	id: string
}

export default function Tabs() {
	const [actualTab, setActualTab] = useState<ActualTabs>("All")
	const [tasks, setTasks] = useState<Task[]>([{ task: "Testing", completed: false, id: nanoid() }]) // TODO task only for example, remove before commit

	const handleCompleted = (taskCompleted: Task) => {
		const getTask = tasks.find(task => task.id === taskCompleted.id)
		getTask ? (getTask.completed = !getTask.completed) : null
	}
	const contentTabs = {
		All: () => <AllTasks setTasks={setTasks} tasks={tasks} handleCompleted={handleCompleted} />,
		Active: () => <AllTasks setTasks={setTasks} tasks={tasks} handleCompleted={handleCompleted} showActive />,
		Completed: () => <p>I'm completed tasks</p>,
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