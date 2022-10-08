import { Task as TaskTypes } from "../types/types"
import DeleteBtn from "./DeleteButton"
import Task from "./Task"

type Props = {
	handleCompleted: (task: TaskTypes) => void
	handleDeleteTask: (taskRemove: TaskTypes) => void
	handleDeleteAllCompleted: () => void
	getOnlyCompleted: TaskTypes[]
}

export default function CompletedTask({ getOnlyCompleted, handleCompleted, handleDeleteTask, handleDeleteAllCompleted }: Props) {
	if (getOnlyCompleted.length) {
		return (
			<>
				{getOnlyCompleted.map(task => (
					<Task task={task} key={task.id} showCompleted handleCompleted={handleCompleted} handleDeleteTask={handleDeleteTask} />
				))}
				<DeleteBtn handleDeleteAllCompleted={handleDeleteAllCompleted} />
			</>
		)
	}

	return <p className="empty-active">You have 0 completed tasks</p>
}
