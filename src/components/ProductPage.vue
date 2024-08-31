<template>
  <div class="container">
    <div class="links">
      <div class="link">phones</div>
      <div class="link">phones</div>
      <div class="link">phones</div>
      <div class="link">phones</div>
      <div class="link">phones</div>
      <div class="link">phones</div>
    </div>
    <div class="product-container">
      <div class="products">
        <!-- <div class="product" v-for="product in productStore.products" :key="product.id">
          <div class="image">
            <img :src="product.image" alt="" />
          </div>
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, asperiores.</p>
            <h3>{{ product.prize }}</h3>
            <h2 class="prize">{{ product.prize }}</h2>
            <div class="buttons">
              <button @click="toggleCart(product.id)">
                {{ product.cart ? 'Remove from cart' : 'Add to cart' }}
              </button>
            </div>
          </div>
        </div> -->
        <div class="product" v-for="product in productStore.products" :key="product.id">
          <div class="image">
            <img :src="product.image" alt="" />
          </div>
          <div class="product-content">
            <p>{{ product.title  }}</p>
            <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p> -->
            <h1>$ 250,000.00</h1>
            <h2>Delivery Wed, sept 4</h2>
            <h3>shipping to Asaba</h3>
            <button @click="toggleCart(product.id)">
              {{ product.cart ? 'Remove from cart' : 'Add to cart' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{ product.description }}</p> -->
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore.js'

const productStore = useProductStore()

const toggleCart = (productId) => {
  productStore.toggleCart(productId)
}
</script>

<style scoped>
.links{
  height: 60px;
  width: 100%;
  background-color:rgb(83, 2, 83) ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.link{
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: .2s;
}
.link:hover{
  color: purple;
}
.image {
  /* background-color: rgb(97, 97, 97); */
  background-color: rgb(255, 255, 255);
  padding: 20px;
  height: 190px;
  overflow: hidden;
  border-radius: 10px;
}
.image img {
  height: 150px;
  width: 150px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
}

.product-container {
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.prize {
  font-size: 20px;
  margin-top: 20px;
  color: red;
}

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.product {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* padding: 20px; */
  max-width: 211px;
  height: 352px;
  text-align: start;
  margin-top: 20px;
}

.product img {
  width: 100%;
  /* border-radius: 20px 20px 20px 20px; */
}
.product img img
.product-content {
  background-color: rgb(255, 255, 255);
  top: 200px;
  height: min-content;
  padding-left: 10px;
  padding-right: 10px;
}
.product-content {
  padding-left: 10px;
  padding-right: 10px;
}

.product h1 {
  font-size: 2em;
  margin-bottom: 5px;
  /* margin: 10px 0; */
}
.product h2 {
  font-size: 1.2em;
  margin-bottom: 5px;
  /* margin: 10px 0; */
}
.product h3 {
  font-size: 1em;
  margin-bottom: 5px;
  /* margin: 10px 0; */
}

.product p {
  font-size: 1.5em;
  color: #000000;
  margin-bottom: 5px;
  line-height: 18px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
button {
  background-color: rgb(114, 114, 114);
  color: white;
  padding: 10px 20px;
  border-radius:  20px;
  margin-top: 10px;
  border: none;
}

button:hover {
  background-color: #0056b3;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Media Queries */
@media (max-width: 1200px) {
  .products {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 992px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .product {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 350px) {
  .product {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
