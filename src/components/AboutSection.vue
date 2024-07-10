<template>
  <section class="about">
    <h1 class="heading">our <span>features</span></h1>
    <div class="box-container">
      <div class="box">
        <img src="../assets/about.jpg" alt="" />

        <div class="article">
          <h3>About <span>company</span></h3>
          <p>
            At EcoPallets, our mission is to revolutionize the shipping industry with sustainable,
            high-quality pallet solutions. We are dedicated to reducing environmental impact by
            providing eco-friendly pallets that do not compromise on strength or durability.
          </p>

          <p>
            Founded in [Year], EcoPallets began with a vision to create a greener future for
            logistics and shipping. What started as a small initiative has now grown into a leading
            provider of sustainable pallet solutions, trusted by businesses across various
            industries.
          </p>

          <p>
            Our team is a diverse group of passionate individuals with expertise in sustainability,
            logistics, and customer service. We work together to deliver the best products and
            experiences for our clients. Meet the people who make it all possible:
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
