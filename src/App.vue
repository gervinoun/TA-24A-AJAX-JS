<script setup>
import { ref } from 'vue'

const items = ref(['Sai', 'Piim', 'Viin', 'Õlu'])
const newItem = ref('')

const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value)
    
  }
  newItem.value = ''
}
</script>

<template>
  <div class="container">
    <div class="field has-addons mt-2">
      <div class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="newItem"
          @keypress.enter="add"
        />
      </div>
      <div class="control">
        <button class="button is-info" @click="add">
          Add Item
        </button>
      </div>
    </div>

    <div class="content">
      <h1>All Items</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
