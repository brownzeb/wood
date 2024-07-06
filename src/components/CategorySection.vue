<template>
  <section class="category">
    <h1 class="heading">product <span>categories</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="../assets/wood.jpg" alt="" width="400px" height="400px" />
        <h3>wood pallate</h3>
        <p>upto 45% off</p>
        <router-link to="" class="btn">shop now</router-link>
      </div>

      <div class="box">
        <img src="../assets/laserpen1.jpg" alt="" width="400px" height="400px" />
        <h3>Laser-pen</h3>
        <p>upto 45% off</p>
        <router-link to="" class="btn">shop now</router-link>
      </div>

      <div class="box">
        <img src="../assets/wood.jpg" alt="" width="400px" height="400px" />
        <h3>wood pallate</h3>
        <p>upto 45% off</p>
        <router-link to="" class="btn">shop now</router-link>
      </div>

      <div class="box">
        <img src="../assets/saw.jpg" alt="" width="400px" height="400px" />
        <h3>laser-pen</h3>
        <p>upto 45% off</p>
        <router-link to="" class="btn">shop now</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.category .box-container .box {
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: var(--outline);
  outline-offset: -1rem;
  text-align: center;
}
.category .box-container .box:hover {
  outline: var(--outline-hover);
  outline-offset: 0rem;
}
.category .box-container .box img {
  margin: 1rem 0;
  height: 15rem;
}
.category .box-container .box h3 {
  font-size: 2rem;
  color: var(--black);
  line-height: 1.8;
}
.category .box-container .box p {
  font-size: 1.7rem;
  color: var(--light-color);
  line-height: 1.8;
  padding: 1rem 0;
}

/* Media Queries */
@media (max-width: 1200px) {
  .category .box-container .box img {
    width: 100%;
    height: auto;
  }
  .category .box-container .box h3 {
    font-size: 1.8rem;
  }
  .category .box-container .box p {
    font-size: 1.5rem;
  }
}

@media (max-width: 992px) {
  .category .box-container .box img {
    width: 100%;
    height: auto;
  }
  .category .box-container .box h3 {
    font-size: 1.6rem;
  }
  .category .box-container .box p {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .category .box-container .box {
    padding: 2rem 1rem;
  }
  .category .box-container .box img {
    margin: 1rem 0;
    height: 12rem;
  }
  .category .box-container .box h3 {
    font-size: 1.4rem;
  }
  .category .box-container .box p {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .category .box-container .box {
    width: 290px;
    padding: 1.5rem 1rem;
  }
  .category .box-container .box img {
    margin: 0.5rem 0;
    height: 10rem;
  }
  .category .box-container .box h3 {
    font-size: 1.2rem;
  }
  .category .box-container .box p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .category .box-container .box {
    width: 343px;

    padding: 1rem 0.5rem;
  }
  .category .box-container .box img {
    margin: 0.5rem 0;
    height: 8rem;
  }
  .category .box-container .box h3 {
    font-size: 1rem;
  }
  .category .box-container .box p {
    padding: 1rem 3rem;
    font-size: 0.8rem;
  }
  .category .box-container .box .btn {
    margin-bottom: 30px;
  }
}

@media (max-width: 360px) {
  .category .box-container .box {
    width: 55%;
    padding: 0.5rem 0.5rem;
  }
  .category .box-container .box img {
    margin: 0.5rem 0;
    height: 6rem;
    width: 15.5rem;
  }
  .category .box-container .box h3 {
    font-size: 0.9rem;
  }
  .category .box-container .box p {
    font-size: 0.7rem;
  }
  .category .box-container .box .btn {
    margin-bottom: 30px;
  }
  .category .box-container .box p {
    padding: 1rem 3rem;
  }
}
</style>
