<template>
        <div class="container main-page">
      <div class="container1" v-if="cart">
        <div class="card-header">
          Cart<i class="fa fa-shopping-cart" style="font-size:24px;"></i>
        </div>
        <div v-if="this.$store.state.cart.length">
        <div >
          <div v-for="(cart, index) in this.$store.state.cart" :key="cart.id">
               <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" :src="cart.image" width="40">
                        <div class="ml-2"><span class="font-weight-bold d-block">{{cart.title}}</span><span class="spec">{{cart.category}}</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">{{cart.quantity}}</span><span class="d-block ml-5 font-weight-bold">${{cart.price}}</span><i class="fa fa-trash-o ml-3 text-black-50" v-on:click="removeItem(index)"></i></div>
                </div>
            <!-- <div
              class="card mb-1 mt-2 ml-2 mr-2 shadow"
              style=";"
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="cart.image" class="card-img" height="200px" alt="kdjfk" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ cart.title.substring(0, 20) + "..." }}
                    </h5>
                    <p class="card-text">${{ cart.price }}</p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <button
                      v-on:click="removeItem(index)"
                      class="btn btn-danger ml-4"
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
          <button v-on:click="placeOrder" class="btn btn-warning">
            Place Order
          </button>
        </div>
        <div v-else><h4>Cart is Empty</h4></div>

        <!-- <li style="display:flex"  ><img style="background-size:cover" width="70px" :src="cart.image" alt=""  />
    <p style="padding:10px 60px; ">
      {{(cart.title).substring(0, 20)+'...'}}<br>
      ${{cart.price}}
      </p>
      <i class="fa fa-remove" @click="removeItem(index)" style="font-size:36px;"></i>
      </li> -->
      </div>

     
    </div>
</template>
<script>
export default {
  data() {
    return {
      cart: true,
    };
  },
  mounted() {
    // const hamburger = document.querySelector(".hamburger");
    // const navLinks = document.querySelector(".nav-links");
    // const links = document.querySelectorAll(".nav-links li");

    // hamburger.addEventListener("click", () => {
    //   //Animate Links
    //   navLinks.classList.toggle("open");
    //   links.forEach((link) => {
    //     link.classList.toggle("fade");
    //   });

    //   //Hamburger Animation
    //   hamburger.classList.toggle("toggle");
    // });
  },
  methods: {
    placeOrder() {
      this.$store.dispatch("placeOrder", this.$store.state.cart);
      this.cart = !this.cart;
      this.$router.push({path:"/myOrders"})
    },
    removeItem(id) {
      debugger;
      this.$store.dispatch("removeItemFromcart", id);
    },
    // showCartItem() {
    //   this.cart = !this.cart;
    // },
  },
};
</script>
<style scoped>
@media (max-width: 767px) {
    .card-header{
        margin-top: 33%;
    }
}
</style>