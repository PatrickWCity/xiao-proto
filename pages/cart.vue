<template>
  <section class="container py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="breadcrumb-item active" aria-current="page">Carrito</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Available</th>
                <th scope="col" class="text-center">Quantity</th>
                <th scope="col" class="text-right">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://dummyimage.com/50x50/55595c/fff" /></td>
                <td>Product Name Dada</td>
                <td>In stock</td>
                <td><input class="form-control" type="text" value="1" /></td>
                <td class="text-right">124,90 €</td>
                <td class="text-right">
                  <button class="btn btn-sm btn-danger">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-w-14"
                    >
                      <path
                        fill="currentColor"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td><img src="https://dummyimage.com/50x50/55595c/fff" /></td>
                <td>Product Name Toto</td>
                <td>In stock</td>
                <td><input class="form-control" type="text" value="1" /></td>
                <td class="text-right">33,90 €</td>
                <td class="text-right">
                  <button class="btn btn-sm btn-danger">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-w-14"
                    >
                      <path
                        fill="currentColor"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td><img src="https://dummyimage.com/50x50/55595c/fff" /></td>
                <td>Product Name Titi</td>
                <td>In stock</td>
                <td><input class="form-control" type="text" value="1" /></td>
                <td class="text-right">70,00 €</td>
                <td class="text-right">
                  <button class="btn btn-sm btn-danger">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-w-14"
                    >
                      <path
                        fill="currentColor"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Sub-Total</td>
                <td class="text-right">255,90 €</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Shipping</td>
                <td class="text-right">6,90 €</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total</strong></td>
                <td class="text-right"><strong>346,90 €</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col mb-2">
        <div class="row">
          <div class="col-sm-12  col-md-6">
            <button class="btn btn-block btn-light">Continue Shopping</button>
          </div>
          <div class="col-sm-12 col-md-6 text-right">
            <button class="btn btn-lg btn-block btn-success text-uppercase">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Listado de Carrito'
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
