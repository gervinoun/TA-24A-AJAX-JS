<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  color: {
    type: String,
    validator(value) {
      return [
        'dark',
        'primary',
        'link',
        'info',
        'success',
        'warning',
        'danger'
      ].includes(value)
    }
  },
  size: {
    type: String,
    default: 'large',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value)
    }
  }
});
</script>

<template>
  <article
    class="message"
    :class="[
      props.color ? `is-${props.color}` : '',
      props.size ? `is-${props.size}` : ''
    ]"
  >
    <div v-if="props.title" class="message-header">
      <p>{{ props.title }}</p>
      <button class="delete" aria-label="delete"></button>
    </div>

    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>