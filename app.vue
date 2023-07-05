<template>
  <div>
    <h1>Testing Nuxt reactivity</h1>
	<p>We are testing the boolean value <span class="mono">isMobileDevice</span>, which is a composable.
	</p>

	<hr>

	<p :class="{'is-blue': isMobileDevice }">
		This text should be blue if it's a narrow device. (testing binding to a class)
	</p>

	<hr>

	<p>
		The value below is the <span class="mono">isMobileDevice</span> boolean getter property, and will break hydration if loaded on a wide page:<br>
		{{ isMobileDevice }}
	</p>

	<hr>

	<p>
		The value below is <span class="mono">isMobileDevice</span> property wrapped in a <span class="mono">ClientOnly</span> tag, and updates correctly<br >
		<ClientOnly>
			<template #placeholder>

			</template>
			{{ isMobileDevice }}
		</ClientOnly>
	</p>

  </div>
</template>

<script setup>

const foo = isMobileDevice;
watchEffect(() => {
	console.warn("Foo has updated", foo.value);
})

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
