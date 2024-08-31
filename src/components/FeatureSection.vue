<template>
  <section>
    <div class="container">
      <div class="product-container">
        <div class="products">
          <div class="product" v-for="product in productStore.products" :key="product.id">
            <div class="image">
            <img :src="product.image" alt="" />
            </div>
            <div class="product-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, asperiores.</p>
            <h3>{{ product.title }}</h3>
            <h2 class="prize">{{ product.prize }}</h2>
              <button>see more</button>
            </div>
          </div>
           <!-- Insert a div between every row of 4 products -->
         <div v-if="(index + 1) % 4 === 0" class="row-divider">
              <!-- Content of the divider, if any -->
              <h1>phones</h1>
         </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore.js'

const productStore = useProductStore()


</script>

<style scoped>
.container{
  height: min-content;
  width: 100%;
  background-color: transparent;
  padding: 10px;
}
.products{
  height: min-content;
  width: 100%;
 display: flex;
 flex-wrap: wrap;  
  gap: 10px;
  padding: 10px;
  /* overflow: hidden; */
  border-radius: 10px;
  /* background-color: rgb(177, 177, 177); */
}
.product{
  height: min-content;
  max-height: 450px;
  background-color: rgb(255, 255, 255);
  flex: 1 1 calc(25% - 10px);
  overflow: hidden;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.product img {
  width: 100%;
  height: 250px;
  border-radius: 10px 10px 0 0;
}
.product img img {
  background-color: rgb(255, 255, 255);
  top: 200px;
  height: 1200px;
  padding-left: 10px;
  padding-right: 10px;
}
.product-content{
  height: min-content;
  width: 100%;
  background-color: white;
}
.product-content p{
  font-size: 1.4em;
  line-height: 20px;
}
.product-content h3{
  font-size: 2em;
}
.product-content h2{
  font-size: 2.1em;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  color: red;
}
.product-content button{
  padding: 10px 20px;
  border-radius: 15px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  border: none;
}
.row-divider {
  width: 100%;
  height: 20px; /* Adjust as needed */
  background-color: #f0f0f0; /* Divider styling */
  margin: 10px 0; /* Spacing around the divider */
}


</style>