<template>
  <section class="jumbotron text-center mb-0">
    <div class="container">
      <h1 class="jumbotron-heading text-uppercase">
        Avisos de Clasificados de Vehículos en Chile.
      </h1>
      <h3>
        <small>¡Bienvenidos!</small>
      </h3>
    </div>
    <div class="pt-5">
      <div class="container">
        <h4 class="mb-4">Vehículos</h4>
        <div class="row">
          <div
            v-for="item in vehiculos.slice(0, 4)"
            :key="item.id"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                alt="Thumbnail [100%x225]"
                :src="item.imagen"
                data-holder-rendered="true"
                style="height: 225px; width: 100%; display: block;"
              />
              <div class="card-body">
                <p class="card-text">
                  {{ item.anno }} {{ item.marca }} {{ item.modelo }}
                </p>
                <small class="text-muted"
                  >{{ item.precio.toLocaleString('es') }} $CLP</small
                >
                <div class="d-flex justify-content-between align-items-center">
                  <nuxt-link
                    class="btn btn-sm btn-outline-secondary btn-block"
                    :to="`/vehiculos/${item.slug}`"
                    >Ver detalles</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <h4 class="mb-4">Ver por Categorías</h4>
        <div class="row">
          <div
            v-for="item in categorias.slice(0, 2)"
            :key="item.id"
            class="col-lg-6 col-md-12 col-sm-12"
          >
            <div class="card mb-4 box-shadow">
              <div class="card-body">
                <p class="card-text">
                  {{ item.nombre }}
                </p>
                <small class="text-muted">{{ item.descripcion }}</small>
                <div class="d-flex justify-content-between align-items-center">
                  <nuxt-link
                    class="btn btn-sm btn-outline-secondary btn-block"
                    :to="`/categorias/${item.slug}`"
                    >Ver Vehículos {{ item.nombre }}</nuxt-link
                  >
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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('vehiculos', ['vehiculos']),
    ...mapState('categorias', ['categorias']),
    ...mapGetters('vehiculos', ['countVehiculos']),
    ...mapGetters('categorias', ['countCategorias'])
  },
  created() {
    if (this.countVehiculos === 0) {
      this.getAllVehiculos()
    }
    if (this.countCategorias === 0) {
      this.getAllCategorias()
    }
  },
  methods: {
    ...mapActions('vehiculos', ['getAllVehiculos']),
    ...mapActions('categorias', ['getAllCategorias'])
  }
}
</script>
