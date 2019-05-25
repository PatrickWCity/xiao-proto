<template>
  <section class="container py-4">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </section>
</template>

<script>
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
      title: 'Detalles de Empleos',
      items: [
        {
          text: 'Inicio',
          href: '/'
        },
        {
          text: 'Empleos',
          href: '/empleos'
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
  }
}
</script>

<style></style>
