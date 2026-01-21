<script setup>
import { ref, computed } from 'vue'
let i = 1;
let items = ref([
  {id: i++, text:'Sai', isDone: true},
  {id: i++, text:'Piim', isDone: false},
  {id: i++, text:'Viin', isDone: true},
  {id: i++, text:'Õlu', isDone: false}
    ])

const newItem = ref('')

let doneItems = computed(() => {
    return items.value.filter(i => i.isDone);
});

const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push({id: i++, text: newItem.value.trim(), isDone: false})
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
          @keypress.enter="addItem"
        />
      </div>
      <div class="control">
        <button class="button is-info" @click="addItem">
          Add Item
        </button>
      </div>
    </div>

    <div class="content">
      <h1>All Items</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
          <input type="checkbox" v-model="item.isDone" />
        </li>
      </ul>
    </div>

<div class="content">
  <h1>Done Items</h1>
  <ul>
    <li v-for="item in doneItems" :key="item.id">
      {{ item.text }}
      <input type="checkbox" v-model="item.isDone" />
    </li>
  </ul>
</div>
  </div>
</template>