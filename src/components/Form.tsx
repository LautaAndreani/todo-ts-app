type Props = {
	handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void
	getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	task: string
}

export default function Form({ handleCreateTask, getInputValue, task }: Props) {
	return (
		<form className="all" onSubmit={handleCreateTask}>
			<input type="text" className="all-input" placeholder="add details" autoFocus onChange={getInputValue} />
			<button type="submit" className={`all-input all-btn ${!task ? "disabled-btn" : ""}`} disabled={!task}>
				Add
			</button>
		</form>
	)
}
