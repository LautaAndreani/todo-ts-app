type ActualTabs = "All" | "Active" | "Completed"

type Props = {
	title: ActualTabs
	setActualTab: React.Dispatch<React.SetStateAction<ActualTabs>>
	actualTab: string
}

export default function Tab({ title, setActualTab, actualTab }: Props) {
	const getActualClass = actualTab === title ? "selected-tab" : ""
	return (
		<ul className={`tab ${getActualClass}`} onClick={() => setActualTab(title)}>
			{title}
		</ul>
	)
}
