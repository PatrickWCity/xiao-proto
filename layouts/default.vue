<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <nuxt-link class="navbar-brand" to="/">XIAO</nuxt-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/vehiculos" active-class="active">
                Vehículos
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/categorias"
                active-class="active"
              >
                Categorías
              </nuxt-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item mx-auto">
              <nuxt-link
                class="btn btn-warning"
                to="/cart"
                role="button"
                active-class="active"
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
                Carrito
                <b-badge variant="light">3</b-badge>
              </nuxt-link>
              <nuxt-link
                class="btn btn-secondary"
                to="/checkout"
                role="button"
                active-class="active"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                  ></path>
                </svg>
                Checkout
              </nuxt-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.svg-inline--fa,
svg:not(:root).svg-inline--fa {
  overflow: visible;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}
</style>
