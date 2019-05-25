<template>
  <section class="container py-3">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div>
      <h1 class="title">
        Checkout
      </h1>

      <div class="row py-5">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  placeholder=""
                  value=""
                  required=""
                  style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  placeholder=""
                  value=""
                  required=""
                />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input
                  id="username"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  required=""
                />
                <div class="invalid-feedback" style="width: 100%;">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email"
                >Email <span class="text-muted">(Optional)</span></label
              >
              <input
                id="email"
                type="email"
                class="form-control"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                id="address"
                type="text"
                class="form-control"
                placeholder="1234 Main St"
                required=""
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2"
                >Address 2 <span class="text-muted">(Optional)</span></label
              >
              <input
                id="address2"
                type="text"
                class="form-control"
                placeholder="Apartment or suite"
              />
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select
                  id="country"
                  class="custom-select d-block w-100"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select
                  id="state"
                  class="custom-select d-block w-100"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input
                  id="zip"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                id="same-address"
                type="checkbox"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="same-address"
                >Shipping address is the same as my billing address</label
              >
            </div>
            <div class="custom-control custom-checkbox">
              <input
                id="save-info"
                type="checkbox"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="save-info"
                >Save this information for next time</label
              >
            </div>
            <hr class="mb-4" />

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="transbank"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked=""
                  required=""
                />
                <label class="custom-control-label" for="transbank"
                  >Transbank</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="alipay"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="alipay">Alipay</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="stripe"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="stripe">Stripe</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="khipu"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="khipu">khipu</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="mercado-pago"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required=""
                />
                <label class="custom-control-label" for="mercado-pago"
                  >Mercado Pago</label
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  id="cc-name"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required=""
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  id="cc-number"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  id="cc-expiration"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input
                  id="cc-cvv"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4" />
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Checkout',
      items: [
        {
          text: 'Inicio',
          href: '/'
        },
        {
          text: 'Checkout',
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
