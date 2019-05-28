<template>
  <section class="container py-3">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="row">
      <!-- Image -->
      <div class="col-12 col-lg-6">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <a href="" data-toggle="modal" data-target="#productModal">
              <img
                class="img-fluid"
                src="https://dummyimage.com/800x800/55595c/fff"
              />
              <p class="text-center">Zoom</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Add to cart -->
      <div class="col-12 col-lg-6 add_to_cart_block">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <p class="price">99.00 $</p>
            <p class="price_discounted">149.90 $</p>
            <form method="get" action="cart.html">
              <div class="form-group">
                <label for="colors">Color</label>
                <select id="colors" class="custom-select">
                  <option selected>Select</option>
                  <option value="1">Blue</option>
                  <option value="2">Red</option>
                  <option value="3">Green</option>
                </select>
              </div>
              <div class="form-group">
                <label>Quantity :</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button
                      type="button"
                      class="quantity-left-minus btn btn-danger btn-number"
                      data-type="minus"
                      data-field=""
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-w-14"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <input
                    id="quantity"
                    type="text"
                    class="form-control"
                    name="quantity"
                    min="1"
                    max="100"
                    value="1"
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      class="quantity-right-plus btn btn-success btn-number"
                      data-type="plus"
                      data-field=""
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-w-14"
                      >
                        <path
                          fill="currentColor"
                          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <a
                href="cart.html"
                class="btn btn-success btn-lg btn-block text-uppercase"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  viewBox="0 0 576 512"
                  class="svg-inline--fa fa-w-18"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>
                Add To Cart
              </a>
            </form>
            <div class="product_rassurance">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 640 512"
                    class="svg-inline--fa fa-w-20 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                      class=""
                    ></path></svg
                  ><br />Fast delivery
                </li>
                <li class="list-inline-item">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 576 512"
                    class="svg-inline--fa fa-w-18 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    ></path></svg
                  ><br />Secure payment
                </li>
                <li class="list-inline-item">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    viewBox="0 0 512 512"
                    class="svg-inline--fa fa-w-16 fa-2x"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path></svg
                  ><br />+33 1 22 54 65 60
                </li>
              </ul>
            </div>
            <div class="reviews_product p-3 mb-2 ">
              3 reviews
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 536 512"
                class="svg-inline--fa fa-w-17"
              >
                <path
                  fill="currentColor"
                  d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-star fa-w-18"
              >
                <path
                  fill="currentColor"
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                ></path>
              </svg>
              (3.5/5)
              <a class="pull-right" href="#reviews">View all reviews</a>
            </div>
            <div class="datasheet p-3 mb-2 bg-info text-white">
              <a href="" class="text-white"
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  viewBox="0 0 384 512"
                  class="svg-inline--fa fa-w-12"
                >
                  <path
                    fill="currentColor"
                    d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                  ></path>
                </svg>
                Download DataSheet</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Description -->
      <div class="col-12">
        <div class="card border-light mb-3">
          <div class="card-header bg-primary text-white text-uppercase">
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-w-14"
            >
              <path
                fill="currentColor"
                d="M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
            Description
          </div>
          <div class="card-body">
            <p class="card-text">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un peintre anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
            </p>
            <p class="card-text">
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.,
              le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney
              College, en Virginie, s'est intéressé à un des mots latins les
              plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et
              en étudiant tous les usages de ce mot dans la littérature
              classique, découvrit la source incontestable du Lorem Ipsum. Il
              provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus
              Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de
              Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est
              un traité sur la théorie de l'éthique. Les premières lignes du
              Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la
              section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>

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
          <th>Año</th>
          <th>Precio</th>
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
          <td>{{ vehiculo.anno }}</td>
          <td>{{ vehiculo.precio }}</td>
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
            ></button>
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
