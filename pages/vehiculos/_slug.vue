<template>
  <section class="container py-4">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div>
      <h1>{{ $route.params.slug }}</h1>
    </div>
    <p>{{ getVehiculoBySlug($route.params.slug) }}</p>
    <table v-if="vehiculo" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Slug</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ vehiculo.id }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.slug }}</td>
          <td>
            <router-link :to="`/vehiculos/${vehiculo.id}/edit`"
              >Edit</router-link
            >
          </td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click="deleteCategory(vehiculo.id, vehiculo.marca)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      title: 'Detalles de Vehículo',
      items: [
        {
          text: 'Inicio',
          href: '/'
        },
        {
          text: 'Vehiculos',
          href: '/vehiculos'
        },
        {
          text: this.$route.params.slug,
          active: true
        }
      ]
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
      },
      set(newValue) {
        const names = newValue
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
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
