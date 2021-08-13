<template>
  <div class="home">
 

<!-- Modal -->

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <div class="container1">
        <div class="card-header">
          My Orders
        </div>

        <div v-if="this.$store.state.orders.length">
          <div v-for="(cart, index) in this.$store.state.orders" :key="cart.id">
            <div
              class="card mb-1 mt-2 ml-2 mr-2 shadow"
              style="max-width: 100%;max-height:350px"
            >
              <div class="row no-gutters">
                <div class="col-md-4 mt-5" style="width:200px; height:210px">
                  <img :src="cart.image" style="width:200px; height:200px"  class="card-img" alt="kdjfk" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ cart.title}}
                    </h5>
                    <p class="card-text">${{ cart.price }}</p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <button
                      v-on:click="removeItem(index)"
                      class="btn btn-danger"
                    >
                      Cancel Order
                    </button>
                    <div class="md-stepper-horizontal orange">
    <div class="md-step active done">
      <div class="md-step-circle"><span>1</span></div>
      <div class="md-step-title">Checkout</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active done">
      <div class="md-step-circle"><span>2</span></div>
      <div class="md-step-title">dispatch</div>
      <!-- <div class="md-step-optional">Optional</div> -->
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active done">
      <div class="md-step-circle"><span>3</span></div>
      <div class="md-step-title">Out Of Delevery</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step">
      <div class="md-step-circle"><span>4</span></div>
      <div class="md-step-title">Review</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
  </div>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
      
        </div>
        <div v-else><h4>No Orders</h4></div>
      
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
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
html {
	-webkit-font-smoothing: antialiased!important;
	-moz-osx-font-smoothing: grayscale!important;
	-ms-font-smoothing: antialiased!important;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  color:#555555; 
}
.md-stepper-horizontal {
	display:table;
	width:100%;
	margin:0 auto;
	background-color:inherit;
	/* box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
}
.md-stepper-horizontal .md-step {
	display:table-cell;
	position:relative;
	padding:24px;
}
.md-stepper-horizontal .md-step:hover,
.md-stepper-horizontal .md-step:active {
	background-color:rgba(0,0,0,0.04);
}
.md-stepper-horizontal .md-step:active {
	border-radius: 15% / 75%;
}
.md-stepper-horizontal .md-step:first-child:active {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.md-stepper-horizontal .md-step:last-child:active {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.md-stepper-horizontal .md-step:hover .md-step-circle {
	background-color:#757575;
}
.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
	display:none;
}
.md-stepper-horizontal .md-step .md-step-circle {
	width:30px;
	height:30px;
	margin:0 auto;
	background-color:#999999;
	border-radius: 50%;
	text-align: center;
	line-height:30px;
	font-size: 16px;
	font-weight: 600;
	color:#FFFFFF;
}
.md-stepper-horizontal.green .md-step.active .md-step-circle {
	background-color:#00AE4D;
}
.md-stepper-horizontal.orange .md-step.active .md-step-circle {
	background-color:#F96302;
}
.md-stepper-horizontal .md-step.active .md-step-circle {
	background-color: rgb(33,150,243);
}
.md-stepper-horizontal .md-step.done .md-step-circle:before {
	font-family:'FontAwesome';
	font-weight:100;
	content: "\f00c";
}
.md-stepper-horizontal .md-step.done .md-step-circle *,
.md-stepper-horizontal .md-step.editable .md-step-circle * {
	display:none;
}
.md-stepper-horizontal .md-step.editable .md-step-circle {
	-moz-transform: scaleX(-1);
	-o-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
	font-family:'FontAwesome';
	font-weight:100;
	content: "\f040";
}
.md-stepper-horizontal .md-step .md-step-title {
	margin-top:16px;
	font-size:16px;
	font-weight:600;
}
.md-stepper-horizontal .md-step .md-step-title,
.md-stepper-horizontal .md-step .md-step-optional {
	text-align: center;
	color:rgba(0,0,0,.26);
}
.md-stepper-horizontal .md-step.active .md-step-title {
	font-weight: 600;
	color:rgba(0,0,0,.87);
}
.md-stepper-horizontal .md-step.active.done .md-step-title,
.md-stepper-horizontal .md-step.active.editable .md-step-title {
	font-weight:600;
}
.md-stepper-horizontal .md-step .md-step-optional {
	font-size:12px;
}
.md-stepper-horizontal .md-step.active .md-step-optional {
	color:rgba(0,0,0,.54);
}
.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
	position:absolute;
	top:36px;
	height:1px;
	border-top:1px solid #DDDDDD;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
	right:0;
	left:50%;
	margin-left:20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
	left:0;
	right:50%;
	margin-right:20px;
}
.container1 {
  position: fixed;
  width: 100%;
  padding: 20px;
  height: 70%;
  overflow: auto;
  /* border-radius: 70px 0px 70px 0px; */
  right: 0;
  /* z-index: 10; */
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);

  /* height: 10vh; */
  /* justify-content: center;
  align-items: center;
  display: flex; */
}
</style>