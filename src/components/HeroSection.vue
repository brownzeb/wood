<template>
  <section class="hero">
    <div class="content">
      <h3>fresh and <span>organic</span> product for your</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vel tempore quos saepe
        nostrum, necessitatibus nisi, blanditiis magnam recusandae nesciunt culpa ea. Aut debitis
      </p>
      <router-link to="/" class="btn">shop now</router-link>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/background1.jpg);
  background-position: center;
  background-size: cover;
  padding-top: 17rem;
  padding-bottom: 10rem;
  /* opacity: 0.9; */
  filter: brightness(50%);
}

.hero .content {
  text-align: center;
  width: 60rem;
}

.hero .content h3 {
  color: rgb(138, 138, 194);
  font-size: 3rem;
}

.hero .content span {
  color: #fff;
  font-size: 3rem;
}

.hero .content p {
  color: #fff;

  font-size: 1.5rem;
  padding: 1rem 0rem;
}

/* Media Queries */
@media (max-width: 1200px) {
  .hero .content {
    width: 50rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 2.5rem;
  }
  .hero .content p {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .hero .content {
    width: 40rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 2.2rem;
  }
  .hero .content p {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 15rem;
    padding-bottom: 8rem;
  }
  .hero .content {
    width: 30rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 2rem;
  }
  .hero .content p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding-top: 12rem;
    padding-bottom: 6rem;
  }
  .hero .content {
    width: 100%;
    padding: 0 1rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 1.8rem;
  }
  .hero .content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
  .hero .content {
    width: 100%;
    padding: 0 1rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 1.5rem;
  }
  .hero .content p {
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .hero {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
  .hero .content {
    width: 100%;
    padding: 0 1rem;
  }
  .hero .content h3,
  .hero .content span {
    font-size: 1.2rem;
  }
  .hero .content p {
    font-size: 0.7rem;
  }
}
</style>
