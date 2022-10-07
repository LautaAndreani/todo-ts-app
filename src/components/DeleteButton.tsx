import trash from "../assets/icons/trash.svg"
import { Task } from "../types/types"

type Props = { setTasks: React.Dispatch<React.SetStateAction<Task[]>> }

export default function DeleteBtn({ setTasks }: Props) {
	return (
		<span className="tasks-container-delete">
			<button className="tasks-delete-all" onClick={() => setTasks([])}>
				<img src={trash} className="delete-all-icon" alt="remove all tasks icon" />
				Delete All
			</button>
		</span>
	)
}
