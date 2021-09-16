<template>
  <section class="mb-5">
    <div class="row">
      <div class="col-md-6 mb-4 mb-md-0">
        <div id="mdb-lightbox-ui"></div>

        <div class="mdb-lightbox">
          <div class="row product-gallery mx-1">
            <div class="col-12 mb-0">
              <figure class="view overlay rounded z-depth-1 main-img">
                <a :href="detail[0].image">
                  <img
                    :src="detail[0].image"
                    style="  width: 100%;
                            height: 500px;"
                    class="img-fluid z-depth-1"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h5>{{ detail[0].title }}</h5>

        <p>
          <span class="mr-1"
            ><strong>${{ detail[0].price }}</strong></span
          >
        </p>
        <p class="pt-1">{{ detail[0].description }}.</p>
        <div class="table-responsive">
          <table class="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
                <td>5407X</td>
              </tr>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                <td>Black</td>
              </tr>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Category</strong></th>
                <td>{{ detail[0].category }}</td>
              </tr>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div class="table-responsive mb-2">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <td class="pl-0 pb-0 w-25">Quantity</td>
                <td class="pb-0">Select size</td>
              </tr>
              <tr>
                <td class="pl-0">
                  <div class="def-number-input number-input safari_only mb-0">
                    <button
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      class="minus"
                    ></button>
                    <input
                      class="quantity"
                      min="0"
                      name="quantity"
                      value="1"
                      type="number"
                    />
                    <button
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      class="plus"
                    ></button>
                  </div>
                </td>
                <td>
                  <div class="mt-1">
                    <div class="form-check form-check-inline pl-0">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="small"
                        name="materialExampleRadios"
                        checked
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="small"
                        >Small</label
                      >
                    </div>
                    <div class="form-check form-check-inline pl-0">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="medium"
                        name="materialExampleRadios"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="medium"
                        >Medium</label
                      >
                    </div>
                    <div class="form-check form-check-inline pl-0">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="large"
                        name="materialExampleRadios"
                      />
                      <label
                        class="form-check-label small text-uppercase card-link-secondary"
                        for="large"
                        >Large</label
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-primary btn-md mr-1 mb-2">
          Buy now
        </button>
        <button type="button" class="btn btn-light btn-md mr-1 mb-2">
          <i class="fas fa-shopping-cart pr-2"></i>Add to cart
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      product: 0,
      detail: [],
    };
  },
  created() {
    this.product = this.$route.query.id;
    console.log(this.$store.state.products);
    console.log(this.product);
    this.detail = this.$store.state.products.filter(
      (e) => e.id == this.product
    );
  },
};
</script>
