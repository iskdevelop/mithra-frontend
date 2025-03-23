<script setup lang="ts">
	import { ref } from 'vue'

	defineProps<{ msg: string }>()

	const count = ref(0)
</script>

<template>
	<h1>{{ msg }}</h1>
	<h2 class="font-bold underline">Tailwind Test</h2>
	<div class="card">Mithra Frontend repo init</div>
</template>

<style lang="scss" scoped></style>
