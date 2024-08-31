<template>
  <footer>
    <div class="wrapper">
      <small>&copy;2024 <strong>itel Company</strong>, All Rights Reserved</small>
      <nav class="footer-nav">
        <a href="#">Back to Top</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed as this is a static footer component.
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:400,700';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer {
  margin-top: 30px;
  background-color: #ddd;
  padding: 20px;
  font-size: 20px;

}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.footer-nav {
  display: flex;
  gap: 10px;
  font-size: 20px;
}

.footer-nav a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: darkorange;
}
</style>
