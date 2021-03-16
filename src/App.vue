<template>
  <div id="app" class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand ms-3">
          <img src="/logo.svg" width="100" height="50" alt="ARPA logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
$primary: #1959a6;
$secondary: #009857;
@import 'bootstrap';
</style>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      state: {}
    }
  },
  methods: {
    logout() {
      
    }
  },
  mounted() {
    
  }
}
</script>
