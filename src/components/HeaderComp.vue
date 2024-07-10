<template>
  <header>
    <router-link to="/" class="logo"><p>Shipping</p></router-link>

    <nav class="navbar" :class="{ 'navbar--open': menu }">
      <router-link to="/">home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/">FAQ</router-link>
      <router-link to="/">Blogs</router-link>
      <router-link to="/">Contact</router-link>
    </nav>

    <div class="icons">
      <div class="icon" id="menu-btn" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
        </svg>
      </div>
      <div class="icon" @click="toggleCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
          />
        </svg>
      </div>
      <!-- <div class="icon" @click="toggleLogin"></div> -->
    </div>

    <div class="shopping-cart" v-if="addCart">
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
    </div>

    <form action="" class="login-form" v-if="login">
      <h3>login now</h3>
      <input type="email" placeholder="your email" class="box" />
      <input type="password" placeholder="your password" class="box" />
      <p>forget your password <router-link>click here</router-link></p>
      <p>Dont have an account <router-link>create now</router-link></p>
      <input type="submit" value="login now" class="btn" />
    </form>
  </header>
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
  background: #fff;
  box-shadow: var(--box-shadow);
}
header a {
  text-decoration: none;
}
header .logo {
  font-size: 2.5rem;
  font-weight: bolder;
  color: var(--black);
}
header .logo p {
  text-decoration: none;
  color: var(--orange);
}
header .navbar {
  display: flex;
}
header .navbar a {
  font-size: 1.2rem;
  margin: 0 1rem;
  color: var(--black);
}
header .navbar a:hover {
  color: var(--orange);
}
header .icons {
  display: flex;
}
header .icons div {
  height: 2.5rem;
  width: 2.5rem;
  line-height: 1.5rem;
  border-radius: 0.3rem;
  background: #eee;
  color: var(--black);
  font-size: 2rem;
  margin-left: 3rem;
  text-align: center;
  cursor: pointer;
}
header .icons div:hover {
  background: var(--orange);
  color: #fff;
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
  box-shadow: var(--box-shadow);
  width: 35rem;
  background: #fff;
}
header .shopping-cart .box {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin: 1rem 0;
}
header .shopping-cart .box img {
  height: 8rem;
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
header .shopping-cart .box .content h3 {
  color: var(--black);
  font-size: 1.2rem;
  padding-bottom: 1rem;
}
header .shopping-cart .box .content span {
  color: var (--light-color);
  font-size: 1rem;
}
header .shopping-cart .box .content .quantity {
  padding-left: 1rem;
  padding: 5px 4px;
  border-radius: 10px;
  margin-left: 10px;
}
header .shopping-cart .total {
  font-size: 2.5rem;
  padding: 1rem 0;
  text-align: center;
  color: var(--black);
}
header .shopping-cart .btn {
  display: block;
  text-align: center;
  margin: 1rem;
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
    width: 2rem;
    line-height: 1rem;
    border-radius: 0.3rem;
    background: #eee;
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
