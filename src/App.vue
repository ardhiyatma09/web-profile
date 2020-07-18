<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header.vue';
export default {
  components:{
    'app-header':header
  }
}
</script>
