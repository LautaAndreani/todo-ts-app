import trash from "../assets/icons/trash.svg"
import { Task } from "../types/types"

type Props = { handleDeleteCompleted: React.Dispatch<React.SetStateAction<Task[]>> }

export default function DeleteBtn({ handleDeleteCompleted }: Props) {
	return (
		<span className="tasks-container-delete">
			<button className="tasks-delete-all" onClick={() => handleDeleteCompleted()}>
				<img src={trash} className="delete-all-icon" alt="remove all tasks icon" />
				Delete All
			</button>
		</span>
	)
}
