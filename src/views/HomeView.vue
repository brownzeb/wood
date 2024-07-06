<template>
  <main>
    <HeaderComp />
    <main>
      <HeroComp />
      <AboutSection />
      <FeatureComp />
      <CategoryComp />
      <ReviewsComp />
      <BlogSection />
      <FooterSection />
    </main>
  </main>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import HeroComp from '@/components/HeroSection.vue'
import FeatureComp from '@/components/FeatureSection.vue'
import CategoryComp from '@/components/CategorySection.vue'
import ReviewsComp from '@/components/ReviewsSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<style setup>
main {
  margin-top: 100px;
}
</style>
