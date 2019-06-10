<template>
  <div class="h-100 d-flex flex-column">
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
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
    <footer class="footer mt-auto font-small unique-color-dark">
      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">XIAO PROTO</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px;"
            />
            <p>
              Avisos de Clasificados de Vehículos en Chile.
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Enlaces</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px;"
            />
            <p>
              <nuxt-link to="/">Inicio</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/vehiculos">Vehículos</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/categorias">Categorías</nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center py-3">
        2019
        <nuxt-link to="/">xiao-proto.herokuapp.com</nuxt-link>
      </div>
    </footer>
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
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}
.footer {
  width: 100%;
  background-color: #f5f5f5;
}
</style>
