<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
    <h2>{{ title }}</h2>
    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
        <button class="btn btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Crea bollettino</button>
        </div>
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        Ultimi 7 giorni
        </button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
