<template>
  <div>
    <header>
      <div class="logo-container">
        <div class="logo-block"></div>
        <router-link to="/" class="logo"><p>Itel</p></router-link>
        <div class="logo-text">
          <p>deliver anywhere in</p>
          <span>NIGERIA</span>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="search product">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
        </span>
      </div>
        <!-- <nav class="navbar" :class="{ 'navbar--open': menu }">
          <router-link to="/">home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/product">Product</router-link>
          <router-link to="/">FAQ</router-link>
          <router-link to="/">Blogs</router-link>
          <router-link to="/">Contact</router-link>
        </nav> -->
      <div class="icons">
        <div class="icon" id="menu-btn" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M15 15H9a4 4 0 0 0-3.834 2.856A8.98 8.98 0 0 0 12 21a8.98 8.98 0 0 0 6.834-3.144A4 4 0 0 0 15 15" opacity="0.16"/><path stroke="currentColor" stroke-width="2" d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"/><path fill="currentColor" d="M13 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-6.834 9.856l-.959-.285l-.155.523l.355.413zm13.668 0l.76.651l.354-.413l-.155-.523zM9 16h6v-2H9zm0-2a5 5 0 0 0-4.793 3.571l1.917.57A3 3 0 0 1 9 16zm3 6a7.98 7.98 0 0 1-6.075-2.795l-1.518 1.302A9.98 9.98 0 0 0 12 22zm3-4c1.357 0 2.506.902 2.876 2.142l1.916-.571A5 5 0 0 0 15 14zm3.075 1.205A7.98 7.98 0 0 1 12 20v2a9.98 9.98 0 0 0 7.593-3.493z"/></g></svg>
          <p>settings</p>
        </div>
        <div class="icon" @click="toggleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>
          <p>settings</p>
        </div>
        <div class="icon" @click="toggleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g></svg>
          <p>settings</p>
        </div>
        <div class="icon" @click="toggleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>
          <p>settings</p>
        </div>
        <div class="icon" @click="toggleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8.5-3h9.25L19 7H7.312"/></svg>
          <p>cart</p>
        </div>
      </div>
      <!-- <div class="shopping-cart" v-if="addCart">
        <div class="box" v-for="product in productStore.carts" :key="product.id">
          <div class="delete-icon" @click="deleteFromCart(product.id)">D</div>
          <img :src="product.image" alt="Wood pallate" />
          <div class="content">
            <h3>{{ product.title }}</h3>
            <span class="price">{{ product.prize }}</span>
            <input v-model="product.quantity" type="number" class="quantity" placeholder="quantity" />
          </div>
        </div>
        <div class="total">${{ productStore.totalPrice }}</div>
        <button class="btn" @click.prevent="checkout">checkout</button>
      </div> -->
      <div class="shopping-cart" v-if="addCart">
        <div class="box" v-for="product in productStore.carts" :key="product.id">
          <div class="image">
            <img :src="product.image" alt="Wood pallate" />
          </div>
          <div class="content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            <h2>Delivery Wed, sept 4</h2>
            <h3>shipping to Asaba</h3>
            <h1>$ 250,000.00</h1>
            <button  @click="deleteFromCart(product.id)">remove</button>
          </div>
    
            <div class="quatity">
              <h2>Quantity</h2>
              <input v-model="product.quantity" type="number" placeholder="quantity" />
            </div>
    
        </div>
        <div class="color">
          <div class="checkout">
            <div class="total">${{ productStore.totalPrice }}</div>
            <button class="btn" @click.prevent="checkout">checkout</button>
          </div>
      </div>
      </div>
      <form action="" class="login-form" v-if="login">
        <h3>login now</h3>
        <input type="email" placeholder="your email" class="box" />
        <input type="password" placeholder="your password" class="box" />
        <p>forget your password <router-link>click here</router-link></p>
        <p>Dont have an account <router-link>create now</router-link></p>
        <input type="submit" value="login now" class="btn" />
      </form>
    
    <div class="links">
      <router-link to="/">home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/product">Product</router-link>
      <!-- <router-link to="/">FAQ</router-link> -->
      <!-- <router-link to="/">Blogs</router-link> -->
      <!-- <router-link to="/">Contact</router-link> -->
  </div>
    </header>
  </div>

  
</template>

<script setup>
// import { Icon } from '@iconify/vue'

import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore.js'

const productStore = useProductStore()

const menu = ref(false)
const addCart = ref(false)
const login = ref(false)

const toggleCart = () => {
  if (!addCart.value) {
    login.value = false
    menu.value = false
  }
  addCart.value = !addCart.value
}

// const toggleLogin = () => {
//   if (!login.value) {
//     addCart.value = false
//     menu.value = false
//   }
//   login.value = !login.value
// }

const toggleMenu = () => {
  if (!menu.value) {
    addCart.value = false
    login.value = false
  }
  menu.value = !menu.value
}

const checkout = () => {
  let totalPrice = 0
  let totalQuantity = 0
  let orderDetails = 'Order Details:\n\n'

  productStore.carts.forEach((product) => {
    const price = parseFloat(product.prize.replace(/[^0-9.-]+/g, '')) // Removes any non-numeric characters
    const itemTotal = price * product.quantity
    totalPrice += itemTotal
    totalQuantity += product.quantity

    orderDetails += `Product: ${product.title}\n`
    orderDetails += `Quantity: ${product.quantity}\n`
    orderDetails += `Price: ${product.prize}\n`
    orderDetails += `Total: $${itemTotal.toFixed(2)}\n\n`
  })

  orderDetails += `Total Price: $${totalPrice.toFixed(2)}\n`
  orderDetails += `Total Quantity: ${totalQuantity}\n`

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(orderDetails)}`
  window.location.href = whatsappUrl
}

const deleteFromCart = (productId) => {
  productStore.deleteCart(productId)
}
</script>

<style scoped>
.links{
  display: flex;
  text-align: center; 
  justify-content: center;
  gap: 10px; 
  /* background-color: blue; */

}

.links a{
  text-decoration: none;
  font-size: 14px;
  color: white;
  font-size:16px ;
}
.search input::placeholder {
  color: #ffffff; /* Sets the placeholder text color */
  opacity: 1; /* Ensures the placeholder is fully opaque */
  padding-left: 10px;
}
.icon svg {
  width: 25px; /* Sets the width of the SVG */
  height: 25px; /* Sets the height of the SVG */
  fill: #333; /* Sets the color of the SVG */
  transition: fill 0.3s; /* Smooth transition on hover */
}
.icon{
  color: white;
  display: flex;
  flex-direction: column;
}
.icon p {
  font-size: 14px; /* Sets font size */
  color: white; /* Sets text color */
  margin: 0; /* Removes default margin */
  text-transform: capitalize; /* Capitalizes the first letter */
  transition: color 0.3s; /* Smooth transition on hover */
  margin-top: 5px;
}
.search{
  display: flex;
  align-items: center;
  /* gap: 10px; */
  /* background-color: rgb(43, 43, 43); */
  width: 100%;
}
.search span{
  width: 12%;
  display: flex;
  align-items: center;
  background-color: rgb(119, 119, 119);
  height: 40px;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 30px;
  padding-left: 2px;
  padding-right: 2px;
  /* height: 40px; */
  border-radius: 0 30px 30px 0;
}
.search input{
  width: 100%;
  height: 40px;
  border-radius: 30px 0 0 30px;
  background-color: #7F5282;
  border: none;
}
.logo-container{
  display: flex;
  align-items: center;
  gap: 10px;
  /* background-color: gray; */
  width: 100%;
}
.logo-block{
  height: 40px;
  width: 50px;
  border-radius: 10px;
  background-color: white;
}
.logo-text{
  font-size: 12px;
  color: white;
}
.logo-text span{
  font-size: 18px;
  font-weight: 700;
  /* color: rgb(0, 102, 0); */
  color: white;
  /* line-height: 20px; */
}
.color{
  background-color: rgb(180, 99, 255);
  width: 100%;
  height: 180px;
  overflow: hidden;
  /* position: fixed; */
  /* position: fixed; */
  /* padding: 10px; */
  /* display: flex; */
  border-radius: 10px;
}
.checkout{
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:50px;
  border-radius: 30px 30px 30px 0px;
  overflow: hidden;
  background-color: rgb(163, 163, 163);
  float: right;
  margin-top: 20px;
  margin-right: 15px;

}
.quatity {
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:50px;
  border-radius: 30px 30px 30px 0px;
  overflow: hidden;
  background-color: rgb(163, 163, 163);
}
.quatity input {
  width: 90%;
  display: flex;
  /* align-items: bottom; */
  /* margin-top: 70px; */
  border: none;
  padding: 10px 40px;
  border-radius: 10px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #432545;
  /* background: #fff; */
  /* box-shadow: var(--box-shadow); */
}
header a {
  text-decoration: none;
}
header .logo {
  font-size: 38px;
  font-weight: bolder;
  /* color: var(--black); */
  color: white;
}
header .logo p {
  text-decoration: none;
  /* color: var(--orange); */
  color: white;
}
header .navbar {
  display: flex;
}

header .navbar a:hover {
  color: var(--orange);
}
header .icons {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  width: 100%;
  /* background-color: #eee; */
  align-items: right;
  margin-right: 20px;

}header .icon div:hover {
  /* background: var(--orange); */
  color: rgb(41, 41, 41);
  color: #fff;
}
header .icons div {
  /* height: 2.5rem; */
  /* width: 100%; */
  line-height: 1.5rem;
  border-radius: 0.3rem;
  /* background-color: #eee; */
  /* color: var(--black); */
  color: white;
  /* font-size: 25px; */
  /* margin-left: 3rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

#menu-btn {
  display: none;
}
header .shopping-cart {
  position: absolute;
  top: 110%;
  right: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 18px rgba(255, 255, 255, 0.1);
  width: 60rem;
  max-height: 550px;
  background: rgb(255, 255, 255);
  height: min-content;
  overflow: hidden;
  overflow-y: auto;
  -webkit-box-shadow: -1px 0px 32px -3px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 0px 32px -3px rgba(0,0,0,0.75);
box-shadow: -1px 0px 32px -3px rgba(0,0,0,0.75);
}
header .shopping-cart .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
  border-bottom:white 2px solid;
  margin: 1rem 0;
  padding: 20px;
}
.image {
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0px 30px;
  overflow: hidden;
  background-color: rgb(163, 163, 163);
}
.quantity {
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0px 30px;
  overflow: hidden;
  background-color: rgb(20, 20, 20);
}
.quantity input {
  height: 20px;
  background-color: green;
}
.image img {
  width: 100px;
  height: 100px;
  border-radius: 30px;
}
header .shopping-cart .box .delete-icon {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  cursor: pointer;
  color: var(--light-color);
  transform: translateY(-50%);
}
header .shopping-cart .box .delete-icon:hover {
  color: var(--orange);
}
header .shopping-cart .box .content p {
  color: var(--black);
  font-size: 1.1rem;
  /* padding-bottom: 1rem; */
  margin-bottom: 5px;

}
header .shopping-cart .box .content h1 {
  color: black;
  font-size: 1.5rem;
  /* padding-bottom: 1rem; */
  /* margin-bottom: 5px; */
  margin-bottom: 5px;
}
header .shopping-cart .box .content h2 {
  color: black;
  font-size: 1rem;
  /* padding-bottom: 1rem; */
  /* margin-bottom: 10px; */
}
header .shopping-cart .box .content h3 {
  color: black;
  font-size: 1rem;
  /* padding-bottom: 1rem; */
  margin-bottom: 5px;
}
header .shopping-cart .box .content span {
  color: var (--light-color);
  font-size: 1rem;
}
.content button{
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  margin-top: 5px;
  background-color: rgb(243, 0, 0);
  color: white;
}
header .shopping-cart .box .content .quantity {
  padding-left: 1rem;
  padding: 5px 4px;
  border-radius: 10px;
  margin-left: 10px;
}
header .shopping-cart .total {
  font-size: 1.5rem;
  padding-top: 30px;
  /* padding: 1rem 1rem; */
  text-align: center;
  color: var(--black);
}
header .shopping-cart .btn {
  display: block;
  text-align: center;
  margin-bottom: 20px;
}
header .login-form {
  position: absolute;
  top: 110%;
  right: 2rem;
  width: 30rem;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;
  text-align: center;
}
header .login-form h3 {
  font-size: 1.7rem;
  text-transform: uppercase;
  color: var(--black);
}
header .login-form .box {
  width: 100%;
  margin: 0.5rem;
  background: #eee;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.6rem;
  color: var(--black);
  text-transform: none;
}

header .login-form p {
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: var(--light-color);
}
header .login-form p a {
  color: var(--orange);
}

/* media queries*/

@media (max-width: 991px) {
  header {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  #menu-btn {
    display: inline-block;
  }
  header .navbar {
    display: none;
  }
  header .navbar.navbar--open {
    display: flex;
    position: absolute;
    top: 110%;
    right: 0.5rem;
    width: 30rem;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background: #fff;
    flex-direction: column;
  }
  header .navbar a {
    font-size: 1.4rem;
    margin: 1rem;
    display: block;
  }
  header .icons div {
    height: 2rem;
    width: 100%;
    line-height: 1rem;
    border-radius: 0.3rem;
    /* background: #eee; */
    color: var(--black);
    font-size: 1rem;
    margin-left: 1rem;
    text-align: center;
    cursor: pointer;
  }
  header .shopping-cart,
  header .login-form {
    right: 1rem;
    width: 25rem;
  }
  header .shopping-cart .box img {
    height: 6rem;
  }
  
  header .shopping-cart .box .content h3 {
    font-size: 1rem;
  }
  header .shopping-cart .box .content span {
    font-size: 0.8rem;
  }
  header .shopping-cart .total {
    font-size: 2rem;
  }
  header .shopping-cart .box .delete-icon {
    font-size: 0.9rem;
    position: absolute;
    top: 50%;
    right: 0rem;
    cursor: pointer;
    color: var(--light-color);
    transform: translateY(-50%);
  }
}

@media (max-width: 450px) {
  #menu-btn {
    display: inline-block;
  }

  header .navbar {
    display: none;
  }
  header .navbar.navbar--open {
    display: flex;
    position: absolute;
    top: 110%;
    right: 0.5rem;
    width: 20rem;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background: #fff;
    flex-direction: column;
  }
  header .navbar a {
    font-size: 1rem;
    margin: 1rem;
    display: block;
  }
  header .icons div {
    height: 1.5rem;
    width: 1.5rem;
    line-height: 0.7rem;
    border-radius: 0.3rem;
    background: #eee;
    color: var(--black);
    font-size: 1rem;
    margin-left: 1rem;
    text-align: center;
    cursor: pointer;
  }
  header .logo {
    font-size: 1rem;
    font-weight: bolder;
    color: var(--black);
  }
  header .shopping-cart,
  header .login-form {
    right: 2.5rem;
    width: 20rem;
  }
  header .shopping-cart .box img {
    height: 4rem;
  }
  header .shopping-cart .box .content h3 {
    font-size: 0.9rem;
  }
  header .shopping-cart .box .content span {
    font-size: 0.7rem;
  }
  header .shopping-cart .box .delete-icon {
    font-size: 0.9rem;
    position: absolute;
    top: 50%;
    right: 0rem;
    cursor: pointer;
    color: var(--light-color);
    transform: translateY(-50%);
  }
  header .shopping-cart .total {
    font-size: 1.8rem;
  }
  header .login-form .box {
    font-size: 1.2rem;
  }
  header .login-form h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 350px) {
  #menu-btn {
    display: inline-block;
  }

  header .navbar {
    display: none;
  }
  header .navbar.navbar--open {
    display: flex;
    position: absolute;
    top: 110%;
    right: 0.5rem;
    width: 17rem;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background: #fff;
    flex-direction: column;
  }
  header .navbar a {
    font-size: 0.8rem;
    margin: 0.8rem;
    display: block;
  }
  header .icons div {
    height: 1.5rem;
    width: 1.5rem;
    line-height: 0.7rem;
    border-radius: 0.3rem;
    background: #eee;
    color: var(--black);
    font-size: 1rem;
    margin-left: 1rem;
    text-align: center;
    cursor: pointer;
  }
  header .logo {
    font-size: 1rem;
    font-weight: bolder;
    color: var(--black);
  }
  header .shopping-cart,
  header .login-form {
    right: 0.9rem;
    width: 18rem;
  }
  header .shopping-cart .box img {
    height: 3.5rem;
  }
  header .shopping-cart .box .content h3 {
    font-size: 0.9rem;
  }
  header .shopping-cart .box .content span {
    font-size: 0.7rem;
  }
  header .shopping-cart .box .delete-icon {
    font-size: 0.9rem;
    position: absolute;
    top: 50%;
    right: 0rem;
    cursor: pointer;
    color: var(--light-color);
    transform: translateY(-50%);
  }
  header .shopping-cart .total {
    font-size: 1.8rem;
  }
  header .login-form .box {
    font-size: 1.2rem;
  }
  header .login-form h3 {
    font-size: 1.4rem;
  }
}
</style>
