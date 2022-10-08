import { Task as TaskTypes } from "../types/types"
import DeleteBtn from "./DeleteButton"
import Task from "./Task"

type Props = {
	handleCompleted: (task: TaskTypes) => void
	handleDelete: (taskRemove: TaskTypes) => void
	handleDeleteCompleted: () => void
	getOnlyCompleted: TaskTypes[]
}

export default function CompletedTask({ getOnlyCompleted, handleCompleted, handleDelete, handleDeleteCompleted }: Props) {
	if (getOnlyCompleted.length) {
		return (
			<>
				{getOnlyCompleted.map(task => (
					<Task task={task} key={task.id} showCompleted handleCompleted={handleCompleted} handleDelete={handleDelete} />
				))}
				<DeleteBtn handleDeleteCompleted={handleDeleteCompleted} />
			</>
		)
	}

	return <p className="empty-active">You have 0 completed tasks</p>
}
