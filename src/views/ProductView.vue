<script setup>
import ProductPage from '@/components/ProductPage.vue'
import HeaderComp from '@/components/HeaderComp.vue'
</script>

<template>
  <main>
    <HeaderComp />
    <main>
      <ProductPage />
    </main>
  </main>
</template>

<style scoped>
main {
  margin-top: 100px;
}
</style>
