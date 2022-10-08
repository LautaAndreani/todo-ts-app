import trash from "../assets/icons/trash.svg"
import { Task } from "../types/types"

type Props = { handleDeleteAllCompleted: () => void }

export default function DeleteBtn({ handleDeleteAllCompleted }: Props) {
	return (
		<span className="tasks-container-delete">
			<button className="tasks-delete-all" onClick={() => handleDeleteAllCompleted()}>
				<img src={trash} className="delete-all-icon" alt="remove all tasks icon" />
				Delete All
			</button>
		</span>
	)
}
