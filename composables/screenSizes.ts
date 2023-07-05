import { ref, watchEffect } from "vue"

const useMedia = (query: string, defaultValue = false) => {
	const matches = ref(defaultValue)

	watchEffect((onInvalidate) => {
		if (process.server) {
			return
		}

		const media = window.matchMedia(query)


		if (media.matches !== matches.value) {
			matches.value = media.matches
		}

		const onChange = () => {
			matches.value = media.matches
		}

		media.addEventListener("change", onChange)

		onInvalidate(() => {
			media.removeEventListener("change", onChange)
		})
	})

	return matches
}

export const isMobileDevicComp = computed(() => {
	return useMedia("(max-width: 768px)", true)
})

export const isMobileDevice = useMedia("(max-width: 767px)", true)
export const isMediumPortraitDevice = useMedia("(max-width: 959px)", false)
export const isMediumDevice = useMedia("(max-width: 1024px)", false)
export const isLargeDevice = useMedia("(max-width: 1200px)", false)
