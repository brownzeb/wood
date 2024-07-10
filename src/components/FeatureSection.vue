<template>
  <section class="feature">
    <h1 class="heading">our <span>features</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="../assets/wood.jpg" alt="" width="400px" height="400px" />
        <h3>fresh and organic</h3>
        <p>
          At EcoPallets, we take pride in sourcing only the highest quality, fresh, and organic wood
          for all our products
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>

      <div class="box">
        <img src="../assets/delivery.avif" alt="" width="400px" height="400px" />
        <h3>free delivery</h3>
        <p>
          At EcoPallets, we believe in providing not only top-quality products but also exceptional
          service. That’s why we offer free delivery on all orders, ensuring your products arrive
          safely at your doorstep.
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>

      <div class="box">
        <img src="../assets/warehouse.jpg" alt="" width="400px" height="400px" />
        <h3>easy payment</h3>
        <p>
          At EcoPallets, we strive to make your buying experience as smooth and convenient as
          possible. That’s why we offer a range of easy payment options designed to fit your needs.
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>
    </div>
    <div class="test">
      <h4>Key Features</h4>
      <p>
        Explore the exceptional benefits of EcoPallets. Our products are crafted from sustainable
        materials, providing robust durability and reliability for all your shipping requirements.
        With customizable solutions designed to fit your exact needs and a strong commitment to
        eco-friendly practices, EcoPallets offers cost-effective, high-quality pallet options that
        prioritize sustainability and performance.
      </p>

      <p>
        Discover the unique advantages of EcoPallets. Our products are made from sustainable
        materials, ensuring durability and reliability for all your shipping needs. With custom
        solutions tailored to your specifications and a commitment to eco-friendly practices,
        EcoPallets offers cost-effective and high-quality pallet options that support both your
        business and the environment.
      </p>
    </div>
  </section>
</template>

<style scoped>
.feature .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.feature .box-container .box {
  padding: 2rem 1rem;
  background: #fff;
  outline: var(--outline);
  outline-offset: -1rem;
  text-align: center;
  /* box-shadow: var(--box-shadow); */
}
.feature .box-container .box:hover {
  outline: var(--outline-hover);
  outline-offset: 0rem;
}
.feature .box-container .box img {
  margin: 1rem;
  height: 15rem;
  width: 20rem;
}
.feature .box-container .box h3 {
  font-size: 2.5rem;
  line-height: 1.8;
  color: var(--black);
}
.feature .box-container .box p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: var(--light-color);
  padding: 1rem 0;
}
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  gap: 10px;
}
.test h4 {
  font-size: 28pt;
  margin-bottom: 10px;
}

.test p {
  font-size: large;
  margin-bottom: 20px;
  text-align: center;
}

/* Media Queries */
@media (max-width: 1200px) {
  .feature .box-container .box img {
    width: 100%;
    height: auto;
  }
  .feature .box-container .box h3 {
    font-size: 2rem;
  }
  .feature .box-container .box p {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .feature .box-container .box img {
    width: 100%;
    height: auto;
  }
  .feature .box-container .box h3 {
    font-size: 1.8rem;
  }
  .feature .box-container .box p {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .feature .box-container .box {
    padding: 2rem 1rem;
  }
  .feature .box-container .box img {
    margin: 1rem 0;
    height: 12rem;
  }
  .feature .box-container .box h3 {
    font-size: 1.6rem;
  }
  .feature .box-container .box p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .feature .box-container .box {
    width: 290px;
    padding: 1.5rem 1rem;
  }
  .feature .box-container .box img {
    margin: 0.5rem 0;
    height: 10rem;
  }
  .feature .box-container .box h3 {
    font-size: 1.4rem;
  }
  .feature .box-container .box p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .feature .box-container .box {
    width: 343px;
    padding: 1rem 1rem;
  }
  .feature .box-container .box img {
    margin: 0.5rem 0;
    height: 8rem;
  }
  .feature .box-container .box h3 {
    font-size: 1.2rem;
  }
  .feature .box-container .box p {
    padding: 1rem 3rem;
    font-size: 0.8rem;
  }
  .feature .box-container .box .btn {
    margin-bottom: 30px;
  }
}

@media (max-width: 360px) {
  .feature .box-container .box {
    width: 56%;
    padding: 0.5rem 0.5rem;
  }
  .feature .box-container .box img {
    margin: 0.5rem 0;
    height: 6rem;
    width: 15.5rem;
  }
  .feature .box-container .box h3 {
    font-size: 1rem;
  }
  .feature .box-container .box p {
    font-size: 0.7rem;
  }
  .feature .box-container .box .btn {
    margin-bottom: 30px;
  }
  .feature .box-container .box p {
    padding: 1rem 3rem;
  }
}
</style>

-
