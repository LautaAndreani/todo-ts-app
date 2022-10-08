import { Task as TaskTypes } from "../types/types"
import Task from "./Task"

type Props = { getOnlyActives: TaskTypes[]; handleCompleted: (task: TaskTypes) => void }

export default function ActiveTasks({ getOnlyActives, handleCompleted }: Props) {
	if (getOnlyActives.length)
		return (
			<>
				{getOnlyActives.map(task => (
					<Task task={task} key={task.id} handleCompleted={handleCompleted} />
				))}
			</>
		)

	return <p className="empty-active">You have 0 active tasks, congrats 🎉</p>
}
