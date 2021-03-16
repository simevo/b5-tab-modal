<template>
  <div class="container my-3 py-1">
    <div class="row mb-3">
      <h1>Home</h1>    
    </div>
    <div class="row mt-5" v-if="'w05_data' in meteo">
      <div class="col-md-6 mb-3">
        <!-- tabs start -->
        <ul class="nav nav-tabs nav-justified" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="giorno1-tab" data-bs-toggle="tab" data-bs-target="#giorno1" type="button" role="tab" aria-controls="giorno1" aria-selected="true">Tab 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="giorno2-tab" data-bs-toggle="tab" data-bs-target="#giorno2" type="button" role="tab" aria-controls="giorno2" aria-selected="false">Tab 2</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="giorno3-tab" data-bs-toggle="tab" data-bs-target="#giorno3" type="button" role="tab" aria-controls="giorno3" aria-selected="false">Tab 3</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="giorno4-tab" data-bs-toggle="tab" data-bs-target="#giorno4" type="button" role="tab" aria-controls="giorno4" aria-selected="false">Tab 4</button>
          </li>
        </ul>

        <div class="tab-content p-3" id="myTabContent">
          <div class="tab-pane fade show active" id="giorno1" role="tabpanel" aria-labelledby="giorno1-tab">
            <h1>1</h1>
          </div>
          <div class="tab-pane fade" id="giorno2" role="tabpanel" aria-labelledby="giorno2-tab">
            <h1>2</h1>
          </div>
          <div class="tab-pane fade" id="giorno3" role="tabpanel" aria-labelledby="giorno3-tab">
            <h1>3</h1>
          </div>
          <div class="tab-pane fade" id="giorno4" role="tabpanel" aria-labelledby="giorno4-tab">
            <h1>4</h1>
          </div>
        </div> <!-- end tab-content -->
      </div> <!-- end col-md-6 -->

      <div class="col-md-6 mb-3">
        <MapMeteo
          :readonly="readonly"
        />
      </div> <!-- end col-md-6 -->
    </div> <!-- end row -->
  </div>
</template>

<script>
import MapMeteo from '@/components/MapMeteo.vue'

export default {
  name: 'Meteo',
  components: {
    MapMeteo
  },
  data() {
    // non reactive properties
    this.icon_blacklist = [ 10 ]
    return {
      // reactive properties
      meteo_id: null,
      meteo: {},
      icons: [],
      timeLayout: "48",
      selected_venues: {
        1: false,
        9: false,
        11: false,
        28: false,
        33: false,
        59: false,
        63: false,
        64: false,
        87: false,
        88: false,
        89: false,
        90: false,
        91: false,
        92: false,
        93: false
      },
      readonly: false
    }
  },
  mounted: function () {
    let meteo = {
      "id_w05": 24304,
    }
    meteo.w05_data = {
      48: {},
      64: {},
      65: {},
      66: {},
      81: {},
      82: {},
      83: {},
      98: {},
      99: {},
      100: {},
    }
    this.meteo = meteo
  }
}
</script>
