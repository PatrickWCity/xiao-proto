<template>
  <section class="container py-3">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Listado de Categorías',
      items: [
        {
          text: 'Inicio',
          href: '/'
        },
        {
          text: 'Categorías',
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
