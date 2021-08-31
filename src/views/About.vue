<template>
  <div class="about">
    <!-- {{this.$store.state.cart}} -->
    <!-- Total Items in Cart = {{this.$store.state.cart.length}}
    {{this.$store.state.cart}} -->
    <!-- <h1>This is an about page</h1> -->

    <div class="row">
      <div
        
        v-for="product in products"
        :key="product.id"
      >
      
            <div class="container">
              <div class="card">
                <img :src="product.image" alt="" />
                <div class="card-body">
                  <div class="row1">
                    <div class="card-title">
                      <h4>{{ product.title.substring(0, 10) + "..." }}</h4>
                      <h3>${{ product.price }}</h3>
                    </div>
                    <div class="view">
                      <a href="">View Details</a>
                    </div>
                  </div>
                  <hr />
                  <!-- <p>
     {{(product.description).substring(0, 30)+'...'}}
      </p> -->
                  <div class="btn-group">
                    <div class="btn">
                      <span @click="addToCart(product)"
                        ><i
                          class="fa fa-shopping-cart"
                          style="font-size:24px"
                        ></i
                        >Add To Cart</span
                      >
                    </div>
                    <!-- <a href=""> Cancel</a> -->
                  </div>
                </div>
              </div>
            </div>
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
@media (max-width: 767px) {
.row {
  padding: 2em;
}
.row1{
  padding: 1em
}

}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

.container {
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.card {
  /* display: inclu; */
  padding: 1em;
  width: 300px;
  height: 440px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
}
.card > *:not(img) {
  padding: 5px 10px;
}

.card img {
  width: 100%;
  height: 180px;
}

.card-body {
  padding: 5px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}

.card-body p {
  color: #3d3d3d;
  margin-bottom: 20px;
  font-size: 14px;
}

.view-btn a {
  padding: 5px 15px;
  border: 1.5px solid #007bff;
  border-radius: 3px;
  text-decoration: none;
  color: #007bff;
}

.btn-group {
  display: flex;
}

.btn-group .btn span {
  padding: 5px 15px;
  background-color: #28a745;
  color: #fff;
  border-radius: 3px;
  margin-left: -2px;
  cursor: pointer;
}
.btn-group a {
  margin: 0 10px;
  text-decoration: none;
  color: #000;
}
</style>
