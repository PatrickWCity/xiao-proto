<template>
  <section class="p-3">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
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
            <li class="list-group-item">
              <a href="category.html">Cras justo odio</a>
            </li>
            <li class="list-group-item">
              <a href="category.html">Dapibus ac facilisis in</a>
            </li>
            <li class="list-group-item">
              <a href="category.html">Morbi leo risus</a>
            </li>
            <li class="list-group-item">
              <a href="category.html">Porta ac consectetur ac</a>
            </li>
            <li class="list-group-item">
              <a href="category.html">Vestibulum at eros</a>
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
          text: 'Categorías',
          href: '/categorias'
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
