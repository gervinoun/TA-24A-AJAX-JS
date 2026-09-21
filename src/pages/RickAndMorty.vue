<script setup>
import { ref, onMounted } from "vue";
import CharacterCard from "../components/CharacterCard.vue";
import AppButton from "../components/AppButton.vue";

const characters = ref([]);

const pagination = ref({
  count: 0,
  pages: 0,
  next: null,
  prev: null,
});

const currentPage = ref(1);

const filters = ref({
  name: "",
  status: "",
  species: "",
  gender: "",
});

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
  await getCharacters(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
}

function buildUrl(page = 1) {
  const params = new URLSearchParams();

  params.append("page", page);

  if (filters.value.name) {
    params.append("name", filters.value.name);
  }

  if (filters.value.status) {
    params.append("status", filters.value.status);
  }

  if (filters.value.species) {
    params.append("species", filters.value.species);
  }

  if (filters.value.gender) {
    params.append("gender", filters.value.gender);
  }

  return `https://rickandmortyapi.com/api/character?${params.toString()}`;
}

async function applyFilters() {
  await getCharacters(buildUrl(1));
}

onMounted(() => {
  getCharacters("https://rickandmortyapi.com/api/character?page=1");
});
</script>

<template>
  <div class="container mt-4">

    <div class="columns">
      <div class="column">
        <input
          v-model="filters.name"
          class="input"
          type="text"
          placeholder="Character name"
        />
      </div>

      <div class="column">
        <div class="select is-fullwidth">
          <select v-model="filters.status">
            <option value="">All statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div class="column">
        <input
          v-model="filters.species"
          class="input"
          type="text"
          placeholder="Species"
        />
      </div>

      <div class="column">
        <div class="select is-fullwidth">
          <select v-model="filters.gender">
            <option value="">All genders</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <AppButton @click="applyFilters">
        Apply filters
      </AppButton>
    </div>

    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <AppButton
        buttonClass="pagination-previous"
        :disabled="!pagination.prev"
        @click="prev"
      >
        Previous
      </AppButton>

      <AppButton
        buttonClass="pagination-next"
        :disabled="!pagination.next"
        @click="next"
      >
        Next page
      </AppButton>

      <ul class="pagination-list">
        <li>
          <button class="pagination-link" @click="goToPage(1)">
            1
          </button>
        </li>

        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li v-if="currentPage > 1">
          <button
            class="pagination-link"
            @click="goToPage(currentPage - 1)"
          >
            {{ currentPage - 1 }}
          </button>
        </li>

        <li>
          <button class="pagination-link is-current">
            {{ currentPage }}
          </button>
        </li>

        <li v-if="currentPage < pagination.pages">
          <button
            class="pagination-link"
            @click="goToPage(currentPage + 1)"
          >
            {{ currentPage + 1 }}
          </button>
        </li>

        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li>
          <button
            class="pagination-link"
            @click="goToPage(pagination.pages)"
          >
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