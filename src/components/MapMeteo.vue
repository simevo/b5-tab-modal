<template>
  <div class="w-75 p-3">
    <div class="modal" id="iconModal" tabindex="-1" aria-labelledby="iconModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="iconModalLabel">Cambia l'icona</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <pre>test</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .venues {fill:#00000000;stroke:#666;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;}
  .venues .selected {fill:#555555}
</style>

<script>
import { Modal } from 'bootstrap'

export default {
  name: 'MapMeteo',
  data () {
    // non reactive data
    this.iconModal = null
    return {
      // no reactive properties
    }
  },
  mounted() {
    this.iconModal = new Modal(document.getElementById('iconModal'))
  },
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
