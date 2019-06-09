<template>
  <section class="container py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item">
          <nuxt-link to="/vehiculos">Vehículos</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ $route.params.slug }}
        </li>
      </ol>
    </nav>
    <div v-if="vehiculo" class="row">
      <div class="col-12 col-lg-6">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <img class="img-fluid" :src="`${vehiculo.imagen}`" />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <dt>
              {{ vehiculo.anno }} {{ vehiculo.marca }} {{ vehiculo.modelo }}
            </dt>
            <br />
            <dl class="row">
              <dt class="col-4">Precio:</dt>
              <dd class="col-8">{{ vehiculo.precio.toLocaleString() }} $CLP</dd>
              <dt class="col-4">Tipo:</dt>
              <dd class="col-8">{{ vehiculo.tipo }}</dd>
              <dt class="col-4">Puertas:</dt>
              <dd class="col-8">{{ vehiculo.puertas }}</dd>
              <dt class="col-4">Combustible:</dt>
              <dd class="col-8">{{ vehiculo.combustible }}</dd>
              <dt class="col-4">Transmisión:</dt>
              <dd class="col-8">{{ vehiculo.transmision }}</dd>
              <dt class="col-4">Color:</dt>
              <dd class="col-8">{{ vehiculo.color }}</dd>
              <dt class="col-4">Region:</dt>
              <dd class="col-8">{{ vehiculo.region }}</dd>
              <dt class="col-4">Ciudad:</dt>
              <dd class="col-8">{{ vehiculo.ciudad }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div v-if="vehiculo" class="row">
      <!-- Description -->
      <div class="col-12">
        <div class="card border-light mb-3">
          <div class="card-header bg-primary text-white text-uppercase">
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-w-14"
            >
              <path
                fill="currentColor"
                d="M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
            Detalles destacados
          </div>
          <div class="card-body">
            <table class="table table-bordered table-striped">
              <tbody>
                <tr v-if="vehiculo.anno">
                  <th scope="row">Año</th>
                  <td>{{ vehiculo.anno }}</td>
                </tr>
                <tr v-if="vehiculo.marca">
                  <th scope="row">Marca</th>
                  <td>{{ vehiculo.marca }}</td>
                </tr>
                <tr v-if="vehiculo.modelo">
                  <th scope="row">Modelo</th>
                  <td>{{ vehiculo.modelo }}</td>
                </tr>
                <tr v-if="vehiculo.tipo">
                  <th scope="row">Tipo</th>
                  <td>{{ vehiculo.tipo }}</td>
                </tr>
                <tr v-if="vehiculo.estado">
                  <th scope="row">Estado</th>
                  <td>{{ vehiculo.estado }}</td>
                </tr>
                <tr v-if="vehiculo.precio">
                  <th scope="row">Precio</th>
                  <td>{{ vehiculo.precio.toLocaleString() }} $CLP</td>
                </tr>
                <tr v-if="vehiculo.kilometraje">
                  <th scope="row">Kilometraje</th>
                  <td>{{ vehiculo.kilometraje.toLocaleString() }} kms</td>
                </tr>
                <tr v-if="vehiculo.color">
                  <th scope="row">Color</th>
                  <td>{{ vehiculo.color }}</td>
                </tr>
                <tr v-if="vehiculo.transmision">
                  <th scope="row">Transmisión</th>
                  <td>{{ vehiculo.transmision }}</td>
                </tr>
                <tr v-if="vehiculo.puertas">
                  <th scope="row">Puertas</th>
                  <td>{{ vehiculo.puertas }}</td>
                </tr>
                <tr v-if="vehiculo.pasajeros">
                  <th scope="row">Pasajeros</th>
                  <td>{{ vehiculo.pasajeros }}</td>
                </tr>
                <tr v-if="vehiculo.litros">
                  <th scope="row">Littros (motor)</th>
                  <td>{{ vehiculo.litros }}</td>
                </tr>
                <tr v-if="vehiculo.cilindros">
                  <th scope="row">Cilindros</th>
                  <td>{{ vehiculo.cilindros }}</td>
                </tr>
                <tr v-if="vehiculo.combustible">
                  <th scope="row">Combustible</th>
                  <td>{{ vehiculo.combustible }}</td>
                </tr>
                <tr v-if="vehiculo.consumo">
                  <th scope="row">Consumo de combustible (combinado)</th>
                  <td>{{ vehiculo.consumo }} km/l</td>
                </tr>
                <tr v-if="vehiculo.region">
                  <th scope="row">Región</th>
                  <td>{{ vehiculo.region }}</td>
                </tr>
                <tr v-if="vehiculo.ciudad">
                  <th scope="row">Ciudad</th>
                  <td>{{ vehiculo.ciudad }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import slug from '~/plugins/slug'

export default {
  validate({ params }) {
    if (slug(params.slug) === params.slug) {
      return true
    } else {
      return false
    }
  },
  data() {
    return {
      title: 'Detalles de Vehículo'
    }
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
  computed: {
    ...mapGetters('vehiculos', [
      'countVehiculos',
      'getVehiculoById',
      'getSomeVehiculoById',
      'getVehiculoBySlug'
    ]),
    ...mapState('vehiculos', ['vehiculos', 'readSuccessful']),
    vehiculo: {
      get() {
        return this.getVehiculoBySlug(this.$route.params.slug)
      }
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
      'editVehiculo'
    ])
  }
}
</script>
