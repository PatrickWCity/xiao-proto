<template>
  <section class="p-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="/categorias">Categorías</nuxt-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $route.params.slug }}</li>
      </ol>
    </nav>
    <div class="row">
      <SideCategoryList />
      <div class="col">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/600x400/55595c/fff"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">
                  <a href="product.html" title="View Product">Product title</a>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">99.00 $</p>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success btn-block"
                      >Add to cart</a
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
  </section>
</template>

<script>
import slug from '~/plugins/slug'
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
  }
}
</script>

<style></style>
