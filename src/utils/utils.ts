import { useEffect } from "react"
import { Task } from "../types/types"

export function useSetStorage(tasks: Task[]) {
	useEffect(() => {
		return localStorage.setItem("tasks", JSON.stringify(tasks))
	}, [tasks])
}
