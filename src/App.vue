<template>
  <div class="container">
    <div class="tabs is-centered">
      <ul>
        <li><router-link to="/">ToDo</router-link></li>
        <li><router-link to="/modals">Modals</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/chucknorris">Chuck Norris</router-link></li>
        <li><router-link to="/rickandmorty">Rick and Morty</router-link></li>
      </ul>
    </div>

    <router-view />
  </div>
</template>