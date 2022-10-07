import trash from "../assets/icons/trash.svg"

interface Task {
	task: string
	completed: boolean
	id: string
}

type Props = { task: Task; handleCompleted: (task: Task) => void; showCompleted?: boolean }

export default function Task({ task, handleCompleted, showCompleted = false }: Props) {
	return (
		<span className="task-container">
			<div>
				<input type="checkbox" id={task.id} value="first_task" onClick={() => handleCompleted(task)} defaultChecked={task.completed} />
				<label htmlFor={task.id} className={`task-label ${showCompleted && "task-checked"}`}>
					{task.task}
				</label>
			</div>
			{showCompleted && (
				<button onClick={() => console.log("deleting...")}>
					<img src={trash} className="trash" alt="delete task icon" />
				</button>
			)}
		</span>
	)
}
