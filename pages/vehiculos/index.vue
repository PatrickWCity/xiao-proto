<template>
  <div>
    <section class="p-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
          <li class="breadcrumb-item active" aria-current="page">Vehículos</li>
        </ol>
      </nav>
      <div class="row">
        <SideCategoryList />
        <div class="col">
          <div class="row">
            <div
              v-for="item in vehiculos"
              :key="item.id"
              class="col-12 col-md-6 col-lg-4 col-xl-3"
            >
              <div class="card">
                <img
                  class="card-img-top"
                  :src="`${item.imagen}`"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    <nuxt-link :to="`/vehiculos/${item.slug}`">
                      {{ item.anno }} {{ item.marca }} {{ item.modelo }}
                    </nuxt-link>
                  </h4>
                  <p class="card-text">
                    Marca: {{ item.marca }} Modelo: {{ item.modelo }} Año:
                    {{ item.anno }}
                  </p>
                  <div class="row">
                    <div class="col">
                      <p class="btn btn-danger btn-block">
                        {{ item.precio }} $CLP
                      </p>
                    </div>
                    <div class="col">
                      <nuxt-link
                        :to="`/vehiculos/${item.slug}`"
                        class="btn btn-success btn-block"
                      >
                        ver detalles
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Listado de Vehículos</h1>
      </div>
    </section>
    <div class="container">
      <button :disabled="readSuccessful" @click="getAllVehiculos">
        <span v-if="!readSuccessful">Read now</span>
        <span v-else>Successful!</span>
      </button>
    </div>
    <div class="container">
      <button :disabled="writeSuccessful" @click="createVehiculo">
        <span v-if="!writeSuccessful">Write now</span>
        <span v-else>Successful!</span>
      </button>
    </div>
    <div class="container">
      <button :disabled="updateSuccessful" @click="editVehiculo">
        <span v-if="!updateSuccessful">Update now</span>
        <span v-else>Successful!</span>
      </button>
    </div>
    <div class="container">
      <button :disabled="deleteSuccessful" @click="deleteVehiculo('test')">
        <span v-if="!deleteSuccessful">Delete now</span>
        <span v-else>Successful!</span>
      </button>
    </div>
    <div class="container">
      State:
      <p>vehiculos: {{ vehiculos }}</p>
      <p>readSuccessful: {{ readSuccessful }}</p>
      <p>writeSuccessful: {{ writeSuccessful }}</p>
      <p>updateSuccessful: {{ updateSuccessful }}</p>
      <p>deleteSuccessful: {{ deleteSuccessful }}</p>
      Getters:
      <p>countVehiculos: {{ countVehiculos }}</p>
      <p>getVehiculoById: {{ getVehiculoById('test') }}</p>
      <p>getSomeVehiculoById: {{ getSomeVehiculoById('test') }}</p>
      <p>getVehiculoBySlug: {{ getVehiculoBySlug('jh-hh') }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import SideCategoryList from '~/components/SideCategoryList.vue'

export default {
  components: {
    SideCategoryList
  },
  data() {
    return {
      title: 'Listado de Vehículos'
    }
  },
  computed: {
    ...mapState('vehiculos', [
      'vehiculos',
      'readSuccessful',
      'writeSuccessful',
      'deleteSuccessful',
      'updateSuccessful'
    ]),
    ...mapGetters('vehiculos', [
      'countVehiculos',
      'getVehiculoById',
      'getSomeVehiculoById',
      'getVehiculoBySlug'
    ])
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'My custom description' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'My custom description'
        },
        { hid: 'og:image', name: 'og:image', content: 'My custom description' },
        { hid: 'og:url', name: 'og:url', content: 'My custom description' },
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  created() {
    if (this.countVehiculos === 0) {
      this.getAllVehiculos()
    }
  },
  methods: {
    ...mapActions('vehiculos', [
      'getAllVehiculos',
      'deleteVehiculo',
      'createVehiculo',
      'editVehiculo',
      'test'
    ])
  }
}
</script>
