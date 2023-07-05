<template>
  <div>
    <h1>Testing Nuxt reactivity</h1>
	<p>We are testing the boolean value <span class="mono">isMobileDevice</span>, which is a getter from the media store. It depends on the state property <span class="mono">windowWidth</span>, and there is a client-side plugin to update that based on the window's <span class="mono">resize</span> event. <br><br><span class="mono">isMobileDevice</span> should be true if the window viewport is less than 768 pixels wide
	</p>

	<hr>

	<p :class="{'is-blue': store.isMobileDevice }">
		This text should be blue if it's a narrow device. (testing binding to a class)
	</p>

	<hr>

	<p>
		The value below is the <span class="mono">isMobileDevice</span> boolean getter property, and will break hydration if loaded on a wide page:<br>
		{{ store.isMobileDevice }}
	</p>

	<hr>

	<p>
		The value below is <span class="mono">isMobileDevice</span> property wrapped in a <span class="mono">ClientOnly</span> tag, and updates correctly<br >
		<ClientOnly>
			<template #placeholder>

			</template>
			{{ store.isMobileDevice }}
		</ClientOnly>
	</p>

  </div>
</template>

<script setup>

import { useMediaStore } from "~/store"
const store = useMediaStore();

</script>

<style scoped>
.is-blue {
	color: blue !important;
}

.mono {
	font-family: monospace;
	color: orange;
}
</style>
