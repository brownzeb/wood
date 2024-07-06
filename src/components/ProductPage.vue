<template>
  <div class="container">
    <div class="product-container">
      <div class="products">
        <div class="product" v-for="product in productStore.products" :key="product.id">
          <img :src="product.image" alt="" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <h2 class="prize">{{ product.prize }}</h2>
          <div class="buttons">
            <button @click="toggleCart(product.id)">
              {{ product.cart ? 'Remove from cart' : 'Add to cart' }}
            </button>
          </div>
        </div>
      </div>
    </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.product-container {
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.product {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: center;
}

.product img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.product h3 {
  font-size: large;
  margin: 10px 0;
}

.product p {
  font-size: 1.3em;
  color: #555;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
