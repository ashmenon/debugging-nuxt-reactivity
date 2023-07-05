import { useMediaStore } from "~/store"

export default defineNuxtPlugin(() => {
	const store = useMediaStore()

	window.addEventListener("resize", (ev) => {
		console.warn(ev)

		const width = window.innerWidth || 0
		store.setWindowWidth(width)
	})

	const width = window.innerWidth || 0
	store.setWindowWidth(width)
})
