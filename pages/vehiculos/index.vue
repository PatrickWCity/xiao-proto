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
                  src="https://dummyimage.com/600x400/55595c/fff"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    <nuxt-link :to="`/vehiculos/${item.slug}`">
                      {{ item.marca }} {{ item.modelo }} {{ item.anno }}
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
                      <a href="#" class="btn btn-success btn-block"
                        >Agregar al Carrito</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="#"
                      >2 <span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
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
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div
            v-for="item in vehiculos"
            :key="item.id"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22208%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20208%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16abe71dc07%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A11pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16abe71dc07%22%3E%3Crect%20width%3D%22208%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2266.953125%22%20y%3D%22117.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
                style="height: 225px; width: 100%; display: block;"
              />
              <div class="card-body">
                <p class="card-text">
                  Marca: {{ item.marca }} Modelo: {{ item.modelo }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <nuxt-link
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      :to="`/vehiculos/${item.slug}`"
                      >View</nuxt-link
                    >
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
