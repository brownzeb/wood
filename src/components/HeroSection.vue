<template>
  <section class="hero">
    <div class="content">
      <h3>Sustainable <span>Pallet</span> Solutions for a Greener Future</h3>
      <p>
        Transform your shipping with our eco-friendly, durable, and cost-effective wooden pallets.
      </p>
      <router-link to="/" class="btn">shop now</router-link>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  height: 400px;
  justify-content: flex-start; /* Align content to the left */
  background: url(../assets/chiderabackground.jpg);
  background-position: center;
  background-size: cover;
  padding-top: 17rem;
  padding-bottom: 10rem;
  /* filter: brightness(50%); */
  padding-left: 6rem;
}

.hero .content {
  display: flex;
  flex-direction: column;
  text-align: left; /* Align text to the left */
  width: 30rem;
}

.hero .content h3 {
  color: black;
  font-size: 2rem;
}

.hero .content span {
  color: brown;
  font-size: 2rem;
}

.hero .content p {
  color: black;
  font-size: 1rem;
  padding: 1rem 0;
}

/* Media Queries */
@media (max-width: 1200px) {
  .hero {
    padding-left: 4rem;
  }
  .hero .content {
    width: 40rem;
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
  .hero {
    padding-left: 3rem;
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
    padding-left: 2rem;
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
    padding-left: 1rem;
  }
  .hero .content {
    width: 100%;
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
  .hero .content h3,
  .hero .content span {
    font-size: 1.5rem;
  }
  .hero .content p {
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .hero .content h3,
  .hero .content span {
    font-size: 1.2rem;
  }
  .hero .content p {
    font-size: 0.7rem;
  }
}
</style>
