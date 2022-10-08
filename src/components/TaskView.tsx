import { useState } from "react"
import Task from "./Task"
import { Task as TasksTypes } from "../types/types"

import { nanoid } from "nanoid"
import Form from "./Form"
import CompletedTask from "./CompletedTasks"
import ActiveTasks from "./ActiveTasks"

type Props = {
	tasks: TasksTypes[]
	setTasks: React.Dispatch<React.SetStateAction<TasksTypes[]>>
	handleCompleted: (task: TasksTypes) => void
	showActive?: boolean
	showCompleted?: boolean
}

export default function TaskView({ setTasks, tasks = [], handleCompleted, showActive = false, showCompleted = false }: Props) {
	const [task, setUserTask] = useState("")
	const getUserTask = (e: React.ChangeEvent<HTMLInputElement>) => setUserTask(e.target.value)

	const handleTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newTask: TasksTypes = { task, completed: false, id: nanoid() }
		setTasks([...tasks, newTask])
	}

	const handleDelete = (taskRemove: TasksTypes) => setTasks(tasks.filter(task => task.id !== taskRemove.id))

	const handleDeleteCompleted = () => {
		const getNotCompletes = tasks.filter(task => !task.completed)
		setTasks(getNotCompletes)
	}

	if (showActive) {
		const getOnlyActives = tasks.filter(task => !task.completed)
		return (
			<div className="all-container">
				<Form task={task} handleTask={handleTask} getUserTask={getUserTask} />
				<div className="tasks">
					<ActiveTasks {...{ getOnlyActives, handleCompleted }} />
				</div>
			</div>
		)
	}

	if (showCompleted) {
		const getOnlyCompleted = tasks.filter(task => task.completed)
		return (
			<div className="tasks tasks-completed">
				<CompletedTask {...{ getOnlyCompleted, handleCompleted, handleDelete, handleDeleteCompleted }} />
			</div>
		)
	}

	return (
		<div className="all-container">
			<Form handleTask={handleTask} getUserTask={getUserTask} task={task} />
			<div className="tasks">
				{tasks.map(task => (
					<Task task={task} key={task.id} handleCompleted={handleCompleted} />
				))}
			</div>
		</div>
	)
}
