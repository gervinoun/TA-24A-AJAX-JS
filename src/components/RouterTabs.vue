<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log(router.getRoutes(), route)
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      
        <li class="is-active"><RouterLink to="/">ToDo</RouterLink></li>
      
      
        <li><RouterLink to="/modals">Modals</RouterLink></li>
      
    </ul>
  </div>
</template>