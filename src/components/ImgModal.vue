<script setup>
import Modal from './Modal.vue'

defineProps({
  active: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <Modal :active="active">
    <p class="image is-4by3">
      <img :src="url" alt="" />
    </p>
  </Modal>
</template>