<template>
  <section class="p-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item">
          <nuxt-link to="/categorias">Categorías</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ $route.params.slug }}
        </li>
      </ol>
    </nav>
    <div class="row">
      <SideCategoryList />
      <div class="col">
        <div class="row">
          <div
            v-for="item in vehiculo"
            :key="item.id"
            class="col-12 col-md-6 col-lg-4 col-xl-3"
          >
            <div class="card">
              <img
                class="card-img-top"
                :src="item.imagen"
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
                      {{ item.precio.toLocaleString('es') }} $CLP
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
  </section>
</template>

<script>
import slug from '~/plugins/slug'
import { mapState, mapGetters, mapActions } from 'vuex'
import SideCategoryList from '~/components/SideCategoryList.vue'

export default {
  components: {
    SideCategoryList
  },
  validate({ params }) {
    if (slug(params.slug) === params.slug) {
      return true
    } else {
      return false
    }
  },
  data() {
    return {
      title: 'Listado de Vehículos ' + this.$route.params.slug,
      listado: null
    }
  },
  computed: {
    ...mapState('vehiculos', ['vehiculos']),
    ...mapGetters('vehiculos', ['countVehiculos', 'getVehiculosPorListado']),
    vehiculo: {
      get() {
        return this.getVehiculosPorListado(this.listado)
      }
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
  created() {
    if (this.countVehiculos === 0) {
      this.getAllVehiculos()
    }
    if (this.$route.params.slug === 'nuevos') {
      this.listado = 'nuevo'
    }
    if (this.$route.params.slug === 'usados') {
      this.listado = 'usado'
    }
  },
  methods: {
    ...mapActions('vehiculos', ['getAllVehiculos'])
  }
}
</script>
