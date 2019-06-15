<template>
  <section class="p-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item active" aria-current="page">Vehículos</li>
      </ol>
    </nav>
    <div class="row">
      <SideCategoryList />
      <div class="col col-xl-10 col-lg-9 col-md-8 col-sm-7">
        <h4 class="mb-4">
          Listado de Vehículos<a class="nav-link float-right" @click="toggle()"
            ><svg
              v-if="!view"
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-w-16"
            >
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>
            <svg
              v-if="view"
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-w-16"
            >
              <path
                fill="currentColor"
                d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
              ></path></svg
          ></a>
        </h4>
        <div v-if="!view" class="row">
          <div
            v-for="item in vehiculos"
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
                      Ver Detalles
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="view" class="row">
          <div v-if="view" class="table-responsive col">
            <table id="listado" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Año</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>Estado</th>
                  <th class="text-center">Operaciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in vehiculos" :key="item.id">
                  <td>{{ item.marca }}</td>
                  <td>{{ item.modelo }}</td>
                  <td>{{ item.anno }}</td>
                  <td>{{ item.precio.toLocaleString('es') }} $CLP</td>
                  <td>{{ item.tipo }}</td>
                  <td>{{ item.estado }}</td>
                  <td role="text-center">
                    <nuxt-link
                      :to="`/vehiculos/${item.slug}`"
                      class="btn btn-success btn-block"
                    >
                      Ver Detalles
                    </nuxt-link>
                  </td>
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
    ...mapState('vehiculos', ['vehiculos', 'view']),
    ...mapGetters('vehiculos', ['countVehiculos', 'getVehiculosPorListado'])
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
    ...mapActions('vehiculos', ['getAllVehiculos', 'toggle'])
  }
}
</script>
