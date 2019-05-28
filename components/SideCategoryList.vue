<template>
  <div class="col-12 col-xl-2 col-lg-3 col-md-4 col-sm-5">
    <div class="card bg-light mb-3">
      <div class="card-header bg-primary text-white text-uppercase">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-w-16"
        >
          <path
            fill="currentColor"
            d="M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
        Categorias
      </div>
      <ul class="list-group category_block">
        <li v-for="item in categorias" :key="item.id" class="list-group-item">
          <nuxt-link :to="`/categorias/${item.slug}`" active-class="active">
            {{ item.nombre }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="card bg-light mb-3">
      <div class="card-header bg-success text-white text-uppercase">
        Last product
      </div>
      <div class="card-body">
        <img
          class="img-fluid"
          src="https://dummyimage.com/600x400/55595c/fff"
        />
        <h5 class="card-title">Product title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p class="bloc_left_price">99.00 $</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('categorias', ['categorias']),
    ...mapGetters('categorias', ['countCategorias'])
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
