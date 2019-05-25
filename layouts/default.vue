<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <nuxt-link class="navbar-brand" to="/">XIAO</nuxt-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/empleos" active-class="active">
                Empleos
              </nuxt-link>
            </li>
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
            <li class="nav-item">
              <nuxt-link class="btn btn-warning" to="/cart" role="button">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />Carrito
                <span class="badge badge-light">
                  3
                </span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/checkout" active-class="active">
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
</style>
