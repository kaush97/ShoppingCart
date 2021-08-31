<template>
  <div class="home">
 

        <div v-if="this.$store.state.orders.length">
          <div class="main-page" >
<div class="container mt-5 p-3 rounded cart">
    <div class="row no-gutters">
        <div class="col-md-8">
            <div class="product-details mr-2">
                <div class="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2"><router-link to="/"> Continue Shopping</router-link></span></div>
                <hr>
                <h6 class="mb-0">Shopping cart</h6>
                <div class="d-flex justify-content-between"><span>You have {{this.$store.state.totalItemsInCart}} items in your cart</span>
                    <div class="d-flex flex-row align-items-center"><span class="text-black-50">Sort by:</span>
                        <div class="price ml-2"><span class="mr-1">price</span><i class="fa fa-angle-down"></i></div>
                    </div>
                </div>
                <div v-for="(cart, index) in this.$store.state.orders" :key="index">
                <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" :src="cart.image" width="40">
                        <div class="ml-2"><span class="font-weight-bold d-block">{{cart.title}}</span><span class="spec">{{cart.category}}</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">{{cart.quantity}}</span><span class="d-block ml-5 font-weight-bold">${{cart.price}}</span></div>
                </div></div>
                <!-- <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" src="https://i.imgur.com/GQnIUfs.jpg" width="40">
                        <div class="ml-2"><span class="font-weight-bold d-block">One pro 7T</span><span class="spec">256GB, Navy Blue</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">2</span><span class="d-block ml-5 font-weight-bold">$900</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" src="https://i.imgur.com/o2fKskJ.jpg" width="40">
                        <div class="ml-2"><span class="font-weight-bold d-block">Google pixel 4 XL</span><span class="spec">256GB, Axe black</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">1</span><span class="d-block ml-5 font-weight-bold">$800</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                    <div class="d-flex flex-row"><img class="rounded" src="https://i.imgur.com/Tja5H1c.jpg" width="40">
                        <div class="ml-2"><span class="font-weight-bold d-block">Samsung galaxy Note 10&nbsp;</span><span class="spec">256GB, Navy Blue</span></div>
                    </div>
                    <div class="d-flex flex-row align-items-center"><span class="d-block">1</span><span class="d-block ml-5 font-weight-bold">$999</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                </div> -->
            </div>
        </div>
        <div class="col-md-4">
            <div class="payment-info">
                <div class="d-flex justify-content-between align-items-center"><span>Card details</span><img class="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30"></div><span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
                <label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                <div><label class="credit-card-label">Name on card</label><input type="text" class="form-control credit-inputs" placeholder="Name"></div>
                <div><label class="credit-card-label">Card number</label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"></div>
                <div class="row">
                    <div class="col-md-6"><label class="credit-card-label">Date</label><input type="text" class="form-control credit-inputs" placeholder="12/24"></div>
                    <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text" class="form-control credit-inputs" placeholder="342"></div>
                </div>
                <hr class="line">
                <div class="d-flex justify-content-between information"><span>Subtotal</span><span>${{(totalCost).toFixed(2)}}</span></div>
                <div class="d-flex justify-content-between information"><span>Shipping</span><span>$50.00</span></div>
                <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>${{(totalCost+50).toFixed(2)}}</span></div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>${{(totalCost+50).toFixed(2)}}</span><span @click="checkOut">Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></button>
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
      

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
checkOut(){
        this.$store.dispatch("checkOut");
this.$router.push({path:"/"})
}
  },
  computed:{
    totalCost: function(){
      debugger
      let cost =0
      this.$store.state.orders.forEach(element => {
       cost = cost + element.quantity*element.price
      });
      return cost
    }
  }
}
</script>
<style scoped>
@media (max-width: 767px) {
    .main-page{
      /* background-color: blue; */
        margin-top: 30%;
    }
}
.payment-info {
    background: blue;
    padding: 10px;
    border-radius: 6px;
    color: #fff;
    font-weight: bold
}

.product-details {
    padding: 10px
}

body {
    background: #eee
}

.cart {
    background: #fff
}

.p-about {
    font-size: 12px
}

.table-shadow {
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42)
}

.type {
    font-weight: 400;
    font-size: 10px
}

label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    padding: 1px 12px;
    border: 2px solid #ada9a9;
    display: inline-block;
    color: #8f37aa;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 300
}

label.radio input:checked+span {
    border-color: #fff;
    background-color: blue;
    color: #fff
}

.credit-inputs {
    background: rgb(102, 102, 221);
    color: #fff !important;
    border-color: rgb(102, 102, 221)
}

.credit-inputs::placeholder {
    color: #fff;
    font-size: 13px
}

.credit-card-label {
    font-size: 9px;
    font-weight: 300
}

.form-control.credit-inputs:focus {
    background: rgb(102, 102, 221);
    border: rgb(102, 102, 221)
}

.line {
    border-bottom: 1px solid rgb(102, 102, 221)
}

.information span {
    font-size: 12px;
    font-weight: 500
}

.information {
    margin-bottom: 5px
}

.items {
    -webkit-box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.08)
}

.spec {
    font-size: 11px
}

</style>