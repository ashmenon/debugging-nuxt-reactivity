import { defineStore } from "pinia"

export const useMediaStore = defineStore("media", {
	state: (): {
		windowWidth: number,
	} => ({
		windowWidth: 0,
	}),
	getters: {
		isMobileDevice (): boolean {
			return this.windowWidth <= 767
		},
	},
	actions: {
		setWindowWidth (width: number) {
			console.warn("Setting new window width", width)

			this.windowWidth = width
		},
	},
})
