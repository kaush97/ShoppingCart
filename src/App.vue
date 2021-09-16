<template>
  <div id="app">
    <!-- <nav class="navbar navbar-dark sticky-top bg-custom-2">
      <div class="container">
        <a class="navbar-brand" href="#a">ShoppingCart</a>
        <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    <!-- <div class="logo">
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
    </nav> -->
    <!-- <nav class="navbar navbar-dark sticky-top bg-custom-2">
        <div class="logo">
            <img src="./assets/logo3.gif" alt="Logo Image">
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><router-link to="/"> Home</router-link></li>
            <li><router-link to="/myOrders">Services</router-link></li>
            <li><router-link to="/myOrders"> Category</router-link></li>
            <li><router-link to="/myOrders"> My Orders</router-link></li>
            <li><a href="#">Contact Us</a></li>
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
            <li><button class="login-button" href="#">Login</button></li>
            <li><button class="join-button" href="#">Join</button></li>
        </ul>
    </nav> -->
    <div class="hero-anime" >
      <div class="navigation-wrap bg-light start-header start-style">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-md navbar-light">
                <a
                  class="navbar-brand"
                  href="https://front.codes/"
                  target="_blank"
                >
                  <h3>
                    <span>E-</span><span>S</span><span>h</span><span>o</span
                    ><span>p</span>
                  </h3></a
                >

                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto py-4 py-md-0">
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <router-link  class="nav-link"  to="/">Home</router-link
                      >
                      <!-- <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                        <a class="dropdown-item" href="#">Another action</a>
                      </div> -->
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <router-link  class="nav-link"  to="/">Best Sellers</router-link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                     <router-link  class="nav-link"  to="/">New Releases</router-link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Services</a
                      >
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                        <a class="dropdown-item" href="#">Another action</a>
                      </div>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                     <router-link  class="nav-link"  to="/">Today's Deal</router-link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <router-link  class="nav-link"  to="/">Contact</router-link>
                    </li>
                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <router-link to="/cart">
  <span style="" @click="showCartItem"
                ><i
                  class="fa badge"
                  style="font-size:24px"
                  :value="this.$store.state.cart.length"
                  >&#xf07a;</i
                >
           
              </span></router-link>
                    </li>
                                         <a href="#demo-modal" @click="showdialog"  v-if="!login" >Login /Sign Up </a>

                     <li  v-else class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <!-- <a
                       
                        >Services</a
                      > -->
                      
                     <img  class="nav-link dropdown-toggle avatar"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false" :src='this.$store.state.userData?this.$store.state.userData.profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"'>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><i class="fa fa-user" aria-hidden="true"></i>Profile</a>
                        <a class="dropdown-item" href="#" @click="signOut"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                       
                      </div>
                    </li>
                     <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4"> -->
                      <!-- <img class="avatar" src='https://lh3.googleusercontent.com/a-/AOh14GiGbvmCpboslZboTulDDS3GeHgnIjyKPNYX9ur0Ew=s96-c'> -->
                  
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
 

<div v-if="show" id="demo-modal" class="modal">
    <div class="modal__content">
        <!-- <h2>Login With Google</h2> -->
    <!-- <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
      Google
    </a> -->
        <!-- <p> -->
            <!-- <div class="signup-buttons">
    <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
      Google
    </a>
  </div> -->
            <div class="g_body" >
    <button class="g-button"  @click.prevent="loginWithGoogle">
      <img class="g-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png" alt="Google Logo">
      <p class="g-text">Sign in with Google</p>
    </button>
  </div>
<!-- </p> -->

        <div class="modal__footer">
            <!-- Made with <i class="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a> -->
        </div>

        <a href="#" class="modal__close" @click="closedialog">&times;</a>
    </div>
</div>
      <div class="section full-height">

              <router-view />
         
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: false,
      show:false,
      
      login: this.$store.state.userData?true:false,
      userData:this.$store.state.userData
      
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
    closedialog(){
this.show = false
    },
    signOut(){
       this.$gAuth.signOut()
        .then(GoogleUser => {
          // localStorage.setItem('userData',GoogleUser)
          // on success do something
          console.log('GoogleUser', GoogleUser)
          localStorage.userData =null
          localStorage.userInfo=null
          this.$store.state.userData=""
          // var userInfo = {
          //   loginType: 'google',
          //   google: GoogleUser
          // }
          this.login= false
          // this.show = false
          // console.log(userInfo,"userInfo")
          // this.userAvatar =GoogleUser.Rs.$I
          // // this.$store.commit('setLoginUser', userInfo)
          // this.$router.push('/')
        })
      
    },
    showdialog(){
      this.show =true
    },
       loginWithGoogle () {
         debugger
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          localStorage.setItem('userData',GoogleUser)
          // on success do something
          console.log('GoogleUser',JSON.stringify(GoogleUser))
          var userInfo = {
            loginType: 'google',
            google: GoogleUser
          }
          this.login= true
          this.show = false
          console.log(userInfo,"userInfo")
          let data = GoogleUser.Rs

          let userInformation = {
            name: data.Qe,
            email: data.Ct,
            profile:data.$I
          }
          localStorage.setItem('userInfo', JSON.stringify(userInformation))
          // this.userAvatar =GoogleUser.Rs.$I
          // this.$store.commit('setLoginUser', userInfo)
          this.$router.push('/')
          window.location.reload()
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    placeOrder() {
      this.$store.dispatch("placeOrder", this.$store.state.cart);
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
<style>
/* Please ❤ this if you like it! */

@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");

/* #Primary
================================================== */
.avatar {
  /* position: absolute; */
  /* right: 0; */
/* float: right; */
	width: 40px;
	height: 40px;
  border-radius: 40px; /* половина ширины и высоты */
  /* margin: 10px; */
}

.g_body{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-button{
  border: 1px solid rgb(169, 164, 164);
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: rgb(169, 164, 164);
  display: flex;
}

.g-logo{
  width: 45px;
  height: 41px;
  padding: 8px 10px;
  /* background: white; */
}

.g-text{
  font-size: 16px;
  padding: 8px 10px;
  color: white;
  font-family: roboto;
  text-align: center;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #212112;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg");
  background-position: center;
  background-repeat: repeat;
  background-size: 7%;
  background-color: #fff;
  overflow-x: hidden;
  transition: all 200ms linear;
}
::selection {
  color: #fff;
  background-color: #8167a9;
}
::-moz-selection {
  color: #fff;
  background-color: #8167a9;
}

/* #Navigation
================================================== */
/* If you like this, be sure to ❤️ it. */
.wrapper {
  height: 100vh;
  /* This part is important for centering the content */
  display: flex;
  align-items: center;
  justify-content: center;
  /* End center */
  background: -webkit-linear-gradient(to right, #834d9b, #d04ed6);
  background: linear-gradient(to right, #834d9b, #d04ed6);
}

.wrapper a {
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  color: #585858;
  font-family: 'Roboto', sans-serif;
}

.modal {
  /* visibility: hidden; */
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal__footer {
  text-align: right;

}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}
.start-header {
  opacity: 1;
  transform: translateY(0);
  padding: 20px 0;
  box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.start-header.scroll-on {
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  padding: 10px 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.start-header.scroll-on .navbar-brand img {
  height: 24px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navigation-wrap {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navbar {
  padding: 0;
}
.navbar-brand img {
  height: 28px;
  width: auto;
  display: block;
  filter: brightness(10%);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navbar-toggler {
  float: right;
  border: none;
  padding-right: 0;
}
.navbar-toggler:active,
.navbar-toggler:focus {
  outline: none;
}
.navbar-light .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 1px solid #000;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after,
.navbar-light .navbar-toggler-icon:before {
  width: 24px;
  position: absolute;
  height: 1px;
  background-color: #000;
  top: 0;
  left: 0;
  content: "";
  z-index: 2;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after {
  top: 8px;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
  transform: rotate(45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}
.nav-link {
  color: #212121 !important;
  font-weight: 500;
  transition: all 200ms linear;
}
.nav-item:hover .nav-link {
  color: #8167a9 !important;
}
.nav-item.active .nav-link {
  color: #777 !important;
}
.nav-link {
  position: relative;
  padding: 5px 0 !important;
  display: inline-block;
}
.nav-item:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #8167a9;
  opacity: 0;
  transition: all 200ms linear;
}
.nav-item:hover:after {
  bottom: 0;
  opacity: 1;
}
.nav-item.active:hover:after {
  opacity: 0;
}
.nav-item {
  position: relative;
  transition: all 200ms linear;
}

/* #Primary style
================================================== */

.bg-light {
  background-color: #fff !important;
  transition: all 200ms linear;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.full-height {
  margin-top: 10%;
  height: 100vh;
}
.over-hide {
  overflow: hidden;
}
.absolute-center {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 40px;
  transform: translateY(-50%);
  z-index: 20;
}
h1 {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  color: #212112;
  text-align: center;
}
p {
  text-align: center;
  margin: 0;
  padding-top: 10px;
  opacity: 1;
  transform: translate(0);
  transition: all 300ms linear;
  transition-delay: 1700ms;
}
body.hero-anime p {
  opacity: 0;
  transform: translateY(40px);
  transition-delay: 1700ms;
}
h1 span {
  display: inline-block;
  transition: all 300ms linear;
  opacity: 1;
  transform: translate(0);
}
body.hero-anime h1 span:nth-child(1) {
  opacity: 0;
  transform: translateY(-20px);
}
body.hero-anime h1 span:nth-child(2) {
  opacity: 0;
  transform: translateY(-30px);
}
body.hero-anime h1 span:nth-child(3) {
  opacity: 0;
  transform: translateY(-50px);
}
body.hero-anime h1 span:nth-child(4) {
  opacity: 0;
  transform: translateY(-10px);
}
body.hero-anime h1 span:nth-child(5) {
  opacity: 0;
  transform: translateY(-50px);
}
body.hero-anime h1 span:nth-child(6) {
  opacity: 0;
  transform: translateY(-20px);
}
body.hero-anime h1 span:nth-child(7) {
  opacity: 0;
  transform: translateY(-40px);
}
body.hero-anime h1 span:nth-child(8) {
  opacity: 0;
  transform: translateY(-10px);
}
body.hero-anime h1 span:nth-child(9) {
  opacity: 0;
  transform: translateY(-30px);
}
body.hero-anime h1 span:nth-child(10) {
  opacity: 0;
  transform: translateY(-20px);
}
h1 span:nth-child(1) {
  transition-delay: 1000ms;
}
h1 span:nth-child(2) {
  transition-delay: 700ms;
}
h1 span:nth-child(3) {
  transition-delay: 900ms;
}
h1 span:nth-child(4) {
  transition-delay: 800ms;
}
h1 span:nth-child(5) {
  transition-delay: 1000ms;
}
h1 span:nth-child(6) {
  transition-delay: 700ms;
}
h1 span:nth-child(7) {
  transition-delay: 900ms;
}
h1 span:nth-child(8) {
  transition-delay: 800ms;
}
h1 span:nth-child(9) {
  transition-delay: 600ms;
}
h1 span:nth-child(10) {
  transition-delay: 700ms;
}
body.hero-anime h1 span:nth-child(11) {
  opacity: 0;
  transform: translateY(30px);
}
body.hero-anime h1 span:nth-child(12) {
  opacity: 0;
  transform: translateY(50px);
}
body.hero-anime h1 span:nth-child(13) {
  opacity: 0;
  transform: translateY(20px);
}
body.hero-anime h1 span:nth-child(14) {
  opacity: 0;
  transform: translateY(30px);
}
body.hero-anime h1 span:nth-child(15) {
  opacity: 0;
  transform: translateY(50px);
}
h1 span:nth-child(11) {
  transition-delay: 1300ms;
}
h1 span:nth-child(12) {
  transition-delay: 1500ms;
}
h1 span:nth-child(13) {
  transition-delay: 1400ms;
}
h1 span:nth-child(14) {
  transition-delay: 1200ms;
}
h1 span:nth-child(15) {
  transition-delay: 1450ms;
}
#switch,
#circle {
  cursor: pointer;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
#switch {
  width: 60px;
  height: 8px;
  border: 2px solid #8167a9;
  border-radius: 27px;
  background: #000;
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  opacity: 1;
  transform: translate(0);
  transition: all 300ms linear;
  transition-delay: 1900ms;
}
body.hero-anime #switch {
  opacity: 0;
  transform: translateY(40px);
  transition-delay: 1900ms;
}
#circle {
  position: absolute;
  top: -11px;
  left: -13px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #000;
}
.switched {
  border-color: #000 !important;
  background: #8167a9 !important;
}
.switched #circle {
  left: 43px;
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
  background: #fff;
}
.nav-item .dropdown-menu {
  transform: translate3d(0, 10px, 0);
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  display: block;
  padding: 0;
  margin: 0;
  transition: all 200ms linear;
}
.nav-item.show .dropdown-menu {
  opacity: 1;
  visibility: visible;
  max-height: 999px;
  transform: translate3d(0, 0px, 0);
}
.dropdown-menu {
  padding: 10px !important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  transition: all 200ms linear;
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  padding: 3px 15px;
  color: #212121;
  border-radius: 2px;
  transition: all 200ms linear;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  background-color: rgba(129, 103, 169, 0.6);
}

body.dark {
  color: #fff;
  background-color: #1f2029;
}
body.dark .navbar-brand img {
  filter: brightness(100%);
}
body.dark h1 {
  color: #fff;
}
body.dark h1 span {
  transition-delay: 0ms !important;
}
body.dark p {
  color: #fff;
  transition-delay: 0ms !important;
}
body.dark .bg-light {
  background-color: #14151a !important;
}
body.dark .start-header {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
}
body.dark .start-header.scroll-on {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
}
body.dark .nav-link {
  color: #fff !important;
}
body.dark .nav-item.active .nav-link {
  color: #999 !important;
}
body.dark .dropdown-menu {
  color: #fff;
  background-color: #1f2029;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}
body.dark .dropdown-item {
  color: #fff;
}
body.dark .navbar-light .navbar-toggler-icon {
  border-bottom: 1px solid #fff;
}
body.dark .navbar-light .navbar-toggler-icon:after,
body.dark .navbar-light .navbar-toggler-icon:before {
  background-color: #fff;
}
body.dark .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}

/* #Media
================================================== */

@media (max-width: 767px) {
  .full-height {
  margin-top: 20%;
  height: 100vh;
}
  h1 {
    font-size: 38px;
  }
  .nav-item:after {
    display: none;
  }
  .nav-item::before {
    position: absolute;
    display: block;
    top: 15px;
    left: 0;
    width: 11px;
    height: 1px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
  }
  .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 10px;
    left: -23px;
    width: 1px;
    height: 11px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"]::after {
    transform: rotate(90deg);
    opacity: 0;
  }
  .dropdown-menu {
    padding: 0 !important;
    background-color: transparent;
    box-shadow: none;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
    margin-top: 10px !important;
    margin-bottom: 20px !important;
  }
  body.dark .nav-item::before {
    background-color: #fff;
  }
  body.dark .dropdown-toggle::after {
    background-color: #fff;
  }
  body.dark .dropdown-menu {
    background-color: transparent;
    box-shadow: none;
  }
}

/* #Link to page
================================================== */

.logo {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
  filter: brightness(10%);
  transition: all 250ms linear;
}
body.dark .logo img {
  filter: brightness(100%);
}
.badge:after {
  content: attr(value);
  font-size: 12px;
  background: orange;
  border-radius: 50%;
  padding: 3px;
  color: #fff;
  position: relative;
  left: -8px;
  top: -10px;
  opacity: 0.9;
}
li {
  list-style-type: none;
}
</style>

