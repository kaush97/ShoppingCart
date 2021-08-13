<template>
  <div id="app">
    <nav class="navbar navbar-dark sticky-top bg-custom-2">
      <div class="container">
        <a class="navbar-brand" href="#a">ShoppingCart</a>
        <div id="nav">
          <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

          <div class="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/2000px-Intel-logo.svg.png"
              alt=""
              width="130"
            />
          </div>

          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/myOrders"> My Orders</router-link></li>
            <li>
              <span style="" @click="showCartItem"
                >Cart<i
                  class="fa badge"
                  style="font-size:24px"
                  :value="this.$store.state.cart.length"
                  >&#xf07a;</i
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container main-page">
      <div class="container1" v-if="cart">
        <div class="card-header">
          Cart<i class="fa fa-shopping-cart" style="font-size:24px;"></i>
        </div>

        <div v-if="this.$store.state.cart.length">
          <div v-for="(cart, index) in this.$store.state.cart" :key="cart.id">
            <div
              class="card mb-1 mt-2 ml-2 mr-2 shadow"
              style="max-width: 540px;"
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="cart.image" class="card-img" alt="kdjfk" />
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
                      class="btn btn-danger"
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
                      v-on:click="placeOrder"
                      class="btn btn-warning"
                    >
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

      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: false,
    };
  },
  methods: {
    placeOrder(){
            this.$store.dispatch("placeOrder",this.$store.state.cart);
             this.cart = !this.cart;
    },
    removeItem(id) {
      debugger;
      this.$store.dispatch("removeItemFromcart", id);
    },
    showCartItem() {
      this.cart = !this.cart;
    },
  },
};
</script>
<style scoped>
.container1 {
  position: fixed;
  width: 30%;
  padding: 20px;
  height: 50%;
  overflow: auto;
  /* border-radius: 70px 0px 70px 0px; */
  right: 0;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);

  /* height: 10vh; */
  /* justify-content: center;
  align-items: center;
  display: flex; */
}
* {
  transition: all 0.3s ease-in-out;
}

.container {
  clear: both;
  overflow: auto;
}

/* nav{float:right;} */

.logo img {
  float: left;
}
li p {
  color: aliceblue;
}
ul li {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  font-family: raleway;
}

ul li:hover {
  color: orange;
}
.bg-custom-1 {
  background-color: #85144b;
}

.bg-custom-2 {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
.main-page {
  margin-top: 1rem;
}
</style>
<style>
.badge:after {
  content: attr(value);
  font-size: 12px;
  background: orange;
  border-radius: 50%;
  padding: 3px;
  position: relative;
  left: -8px;
  top: -10px;
  opacity: 0.9;
}
li {
  list-style-type: none;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: orange;
}
</style>
