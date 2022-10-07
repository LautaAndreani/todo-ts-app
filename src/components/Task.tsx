interface Task {
	task: string
	completed: boolean
	id: string
}

type Props = { task: Task; handleCompleted: (task: Task) => void }

export default function Task({ task, handleCompleted }: Props) {
	return (
		<span>
			<input type="checkbox" id={task.id} value="first_task" onClick={() => handleCompleted(task)} defaultChecked={task.completed ? true : undefined} />
			<label htmlFor={task.id} className="task-label">
				{task.task}
			</label>
		</span>
	)
}
