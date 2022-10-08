type Props = {
	handleTask: (e: React.FormEvent<HTMLFormElement>) => void
	getUserTask: (e: React.ChangeEvent<HTMLInputElement>) => void
	task: string
}

export default function Form({ handleTask, getUserTask, task }: Props) {
	return (
		<form className="all" onSubmit={handleTask}>
			<input type="text" className="all-input" placeholder="add details" autoFocus onChange={getUserTask} />
			<button type="submit" className={`all-input all-btn ${!task ? "disabled-btn" : ""}`} disabled={!task}>
				Add
			</button>
		</form>
	)
}
