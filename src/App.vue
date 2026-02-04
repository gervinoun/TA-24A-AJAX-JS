<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="container">
    <button
      class="button is-primary"
      @click="modal1Active = true"
    >
      Open Modal 1
    </button>

    <button
      class="button is-info"
      @click="modal2Active = true"
    >
      Open Modal 2
    </button>

    <Modal
      :active="modal1Active"
      @close="modal1Active = false"
    />

    <Modal
      :active="modal2Active"
      @close="modal2Active = false"
    />
  </div>
</template>

<style></style>
