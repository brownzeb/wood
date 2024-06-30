<template>
  <section class="feature">
    <h1 class="heading">our <span>features</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="../assets/wood.jpg" alt="" width="400px" height="400px" />
        <h3>fresh and organic</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam similique est
          optio quia veritatis, tempora.
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>

      <div class="box">
        <img src="../assets/woods.jpg" alt="" width="400px" height="400px" />
        <h3>free delivery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam similique est
          optio quia veritatis, tempora.
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>

      <div class="box">
        <img src="../assets/sample.jpg" alt="" width="400px" height="400px" />
        <h3>easy payment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam similique est
          optio quia veritatis, tempora.
        </p>
        <router-link to="/" class="btn">read more</router-link>
      </div>
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
  padding: 3rem 2rem;
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
    width: 315px;
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
    width: 55%;
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
