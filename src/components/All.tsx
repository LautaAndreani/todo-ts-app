import { useState } from "react"
import Task from "./Task"

import { nanoid } from "nanoid"
import trash from "../assets/icons/trash.svg"

interface Task {
	task: string
	completed: boolean
	id: string
}

type Props = {
	tasks: Task[]
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	handleCompleted: (task: Task) => void
	showActive?: boolean
	showCompleted?: boolean
}

export default function AllTasks({ setTasks, tasks = [], handleCompleted, showActive = false, showCompleted = false }: Props) {
	const [task, setUserTask] = useState("")
	const getUserTask = (e: React.ChangeEvent<HTMLInputElement>) => setUserTask(e.target.value)

	const handleTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newTask: Task = { task, completed: false, id: nanoid() }
		setTasks([...tasks, newTask])
	}

	const handleDelete = (taskRemove: Task) => setTasks(tasks.filter(task => task.id !== taskRemove.id))

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
						<p className="empty-active">You have 0 active tasks</p>
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
						<span className="tasks-container-delete">
							<button className="tasks-delete-all" onClick={() => setTasks([])}>
								Delete All
								<small>
									<img src={trash} className="delete-all-icon" alt="remove all tasks icon" />
								</small>
							</button>
						</span>
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
