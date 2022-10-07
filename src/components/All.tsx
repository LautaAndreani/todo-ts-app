import { useState } from "react"
import Task from "./Task"
import DeleteBtn from "./DeleteButton"
import { Task as TasksTypes } from "../types/types"

import { nanoid } from "nanoid"

type Props = {
	tasks: TasksTypes[]
	setTasks: React.Dispatch<React.SetStateAction<TasksTypes[]>>
	handleCompleted: (task: TasksTypes) => void
	showActive?: boolean
	showCompleted?: boolean
}

export default function AllTasks({ setTasks, tasks = [], handleCompleted, showActive = false, showCompleted = false }: Props) {
	const [task, setUserTask] = useState("")
	const getUserTask = (e: React.ChangeEvent<HTMLInputElement>) => setUserTask(e.target.value)

	const handleTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newTask: TasksTypes = { task, completed: false, id: nanoid() }
		setTasks([...tasks, newTask])
	}

	const handleDelete = (taskRemove: TasksTypes) => setTasks(tasks.filter(task => task.id !== taskRemove.id))

	if (showActive) {
		const getOnlyActives = tasks.filter(task => !task.completed)
		return (
			<div className="all-container">
				<form className="all" onSubmit={handleTask}>
					<input type="text" className="all-input" placeholder="add details" autoFocus onChange={getUserTask} />
					<button type="submit" className="all-input all-btn">
						Add
					</button>
				</form>
				<div className="tasks">
					{getOnlyActives.length ? (
						getOnlyActives.map(task => <Task task={task} key={task.id} handleCompleted={handleCompleted} />)
					) : (
						<p className="empty-active">You have 0 active tasks, congrats 🎉</p>
					)}
				</div>
			</div>
		)
	}

	if (showCompleted) {
		const getOnlyCompleted = tasks.filter(task => task.completed)
		return (
			<div className="tasks">
				{getOnlyCompleted.length ? (
					<div className="tasks-completed">
						{getOnlyCompleted.map(task => (
							<Task task={task} key={task.id} showCompleted handleCompleted={handleCompleted} handleDelete={handleDelete} />
						))}
						<DeleteBtn setTasks={setTasks} />
					</div>
				) : (
					<p className="empty-active">You have 0 completed tasks</p>
				)}
			</div>
		)
	}

	return (
		<div className="all-container">
			<form className="all" onSubmit={handleTask}>
				<input type="text" className="all-input" placeholder="add details" autoFocus onChange={getUserTask} />
				<button type="submit" className="all-input all-btn">
					Add
				</button>
			</form>
			<div className="tasks">
				{tasks.map(task => (
					<Task task={task} key={task.id} handleCompleted={handleCompleted} />
				))}
			</div>
		</div>
	)
}
