<script setup>
import { ref } from 'vue';
    let message = ref('Sen nii fire');

</script>

<template>
    <div class="container">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <button class="button is-primary" @click="message = 'Hello TA-24A'">Click me!</button>
    <input class="input" v-model = "message">
    </div>
</template>

<style>

</style>