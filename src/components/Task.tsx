import trash from "../assets/icons/trash.svg"
import { Task as TaskTypes } from "../types/types"

type Props = {
	task: TaskTypes
	handleCompleted: (task: TaskTypes) => void
	handleDelete?: (task: TaskTypes) => void
	showCompleted?: boolean
}

export default function Task({ handleCompleted, handleDelete = () => {}, task, showCompleted = false }: Props) {
	return (
		<span className="task-container">
			<div>
				<input type="checkbox" id={task.id} value="first_task" onClick={() => handleCompleted(task)} defaultChecked={task.completed} />
				<label htmlFor={task.id} className={`task-label ${task.completed && "task-checked"}`}>
					{task.task}
				</label>
			</div>
			<span className="task-remove">
				{showCompleted && (
					<button className="task-delete" onClick={() => handleDelete(task)}>
						<img src={trash} className="task-delete-icon" alt="delete task icon" />
					</button>
				)}
			</span>
		</span>
	)
}
