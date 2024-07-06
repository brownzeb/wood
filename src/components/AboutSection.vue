<template>
  <section class="about">
    <h1 class="heading">our <span>features</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="../assets/about.jpg" alt="" />

        <div class="article">
          <h3>About <span>company</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore, porro cumque
            aspernatur repellendus at accusantium fugiat esse voluptatem et veniam eum similique
            dolores perspiciatis laborum dolore a corrupti dignissimos excepturi molestias. Illum
            sed voluptatem dolorem ex labore voluptate dolorum aliquid incidunt minima quod nostrum
            provident repudiandae, animi sit nisi!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore, porro cumque
            aspernatur repellendus at accusantium fugiat esse voluptatem et veniam eum similique
            dolores perspiciatis laborum dolore a corrupti dignissimos excepturi molestias. Illum
            sed voluptatem dolorem ex labore voluptate dolorum aliquid incidunt minima quod nostrum
            provident repudiandae, animi sit nisi!
          </p>
          <button class="btn">see more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about .box-container .box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.about .box-container .box img {
  height: 500px;
  width: 500px;
}
.about .box-container .box .article h3 {
  font-size: 28pt;
  margin-bottom: 10px;
}
.about .box-container .box .article h3 span {
  color: var(--orange);
}
.about .box-container .box .article p {
  font-size: large;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .about .box-container .box {
    /* margin: 0rem 9rem; */

    /* padding-right: 11rem;
    padding-left: 11rem; */
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .about .box-container .box img {
    height: 200px;
    width: 200px;
  }
  .about .box-container .box .article h3 {
    font-size: 28px;
    /* margin-right: 40px; */
    /* padding: 0.5rem; */
  }
  .about .box-container .box .article p {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* padding: 0.5rem 2rem; */
    /* text-align: center; */
  }
}
</style>
