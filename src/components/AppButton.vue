<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  buttonClass: {
    type: String,
    default: "button",
  },
});

defineEmits(["click"]);
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>