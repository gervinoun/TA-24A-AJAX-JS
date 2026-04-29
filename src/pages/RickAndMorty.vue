<script setup>
import { ref, onMounted } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

const characters = ref([]);
const pagination = ref({
  count: 0,
  pages: 0,
  next: null,
  prev: null,
});
const currentPage = ref(1);

async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();

  characters.value = data.results;
  pagination.value = data.info;

  const match = url.match(/page=(\d+)/);
  currentPage.value = match ? Number(match[1]) : 1;
}

async function next() {
  if (pagination.value.next) {
    await getCharacters(pagination.value.next);
  }
}

async function prev() {
  if (pagination.value.prev) {
    await getCharacters(pagination.value.prev);
  }
}

async function goToPage(page) {
  await getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`);
}

onMounted(() => {
  getCharacters("https://rickandmortyapi.com/api/character?page=1");
});
</script>

<template>
  <div class="container mt-4">
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <button
        class="pagination-previous"
        :disabled="!pagination.prev"
        @click="prev"
      >
        Previous
      </button>

      <button
        class="pagination-next"
        :disabled="!pagination.next"
        @click="next"
      >
        Next page
      </button>

      <ul class="pagination-list">
        <li>
          <button class="pagination-link" @click="goToPage(1)">1</button>
        </li>

        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li v-if="currentPage > 1">
          <button class="pagination-link" @click="goToPage(currentPage - 1)">
            {{ currentPage - 1 }}
          </button>
        </li>

        <li>
          <button class="pagination-link is-current">
            {{ currentPage }}
          </button>
        </li>

        <li v-if="currentPage < pagination.pages">
          <button class="pagination-link" @click="goToPage(currentPage + 1)">
            {{ currentPage + 1 }}
          </button>
        </li>

        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li>
          <button class="pagination-link" @click="goToPage(pagination.pages)">
            {{ pagination.pages }}
          </button>
        </li>
      </ul>
    </nav>

    <div class="columns is-multiline">
      <div
        class="column is-3"
        v-for="character in characters"
        :key="character.id"
      >
        <CharacterCard :character="character" />
      </div>
    </div>
  </div>
</template>