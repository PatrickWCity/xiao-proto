<template>
  <section class="p-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item active" aria-current="page">Categorías</li>
      </ol>
    </nav>
    <div class="row">
      <SideCategoryList />
      <div class="col">
        <h4 class="mb-4">Listado de Categorías</h4>
        <div class="row">
          <div
            v-for="item in categorias"
            :key="item.id"
            class="col-12 col-md-6 col-lg-4 col-xl-3"
          >
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  <nuxt-link :to="`/categorias/${item.slug}`">
                    {{ item.nombre }}
                  </nuxt-link>
                </h4>
                <p class="card-text">{{ item.descripcion }}</p>
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
import SideCategoryList from '~/components/SideCategoryList.vue'

export default {
  components: {
    SideCategoryList
  },
  data() {
    return {
      title: 'Listado de Categorías'
    }
  },
  computed: {
    ...mapState('categorias', ['categorias']),
    ...mapGetters('categorias', ['countCategorias'])
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
    if (this.countCategorias === 0) {
      this.getAllCategorias()
    }
  },
  methods: {
    ...mapActions('categorias', ['getAllCategorias'])
  }
}
</script>
