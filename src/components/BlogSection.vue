<template>
  <section class="blogs">
    <h1 class="heading">our <span>blogs</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="../assets/wood.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
          </div>
          <h3>Fresh organic vegetables and fruits</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium velit, aut
          </p>
          <router-link to="/" class="btn">read more</router-link>
        </div>
      </div>

      <div class="box">
        <img src="../assets/wood.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
          </div>
          <h3>Fresh organic vegetables and fruits</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium velit, aut
          </p>
          <router-link to="/" class="btn">read more</router-link>
        </div>
      </div>

      <div class="box">
        <img src="../assets/wood.jpg" alt="" />
        <div class="content">
          <div class="icons">
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
            <router-link to="/"
              ><img src="../assets/logo.svg" alt="" width="30px" height="30px" />by
              user</router-link
            >
          </div>
          <h3>Fresh organic vegetables and fruits</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium velit, aut
          </p>
          <router-link to="/" class="btn">read more</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base styles */
.blogs .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}
.blogs .box-container .box {
  overflow: hidden;
  border-radius: 0.2rem;
  background: #fff;
}
.blogs .box-container .box img {
  height: 25rem;
  width: 100%;
  object-fit: cover;
}
.blogs .box-container .box .content {
  padding: 2rem;
}
.blogs .box-container .box .content .icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  margin-bottom: 0.4rem;
  border-bottom: var(--border);
}
.blogs .box-container .box .content .icons a {
  color: var(--light-color);
  font-size: 1.5rem;
}
.blogs .box-container .box .content .icons a:hover {
  color: var(--black);
}
.blogs .box-container .box .content .icons a img {
  color: var(--orange);
  padding-right: 0.5rem;
  width: 40px;
  height: 20px;
}
.blogs .box-container .box .content h3 {
  line-height: 1.3;
  color: var(--black);
  font-size: 2.2rem;
  padding: 1rem 0;
}
.blogs .box-container .box .content p {
  line-height: 1.5;
  color: var(--light-color);
  font-size: 1.2rem;
  padding: 0rem 0;
}

/* Media Queries */
@media (max-width: 1200px) {
  .blogs .box-container .box img {
    height: 20rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 2rem;
  }
  .blogs .box-container .box .content p {
    font-size: 1.1rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .blogs .box-container .box img {
    height: 18rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 1.8rem;
  }
  .blogs .box-container .box .content p {
    font-size: 1rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .blogs .box-container .box img {
    height: 16rem;
  }
  .blogs .box-container .box .content {
    padding: 1.5rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 1.6rem;
  }
  .blogs .box-container .box .content p {
    font-size: 0.9rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .blogs .box-container .box img {
    height: 14rem;
  }
  .blogs .box-container .box .content {
    padding: 1rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 1.4rem;
  }
  .blogs .box-container .box .content p {
    font-size: 0.8rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .blogs .box-container .box {
    width: 369px;
    /* background-color: red; */
  }
  .blogs .box-container .box img {
    height: 12rem;
  }
  .blogs .box-container .box .content {
    padding: 0.8rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 1.2rem;
  }
  .blogs .box-container .box .content p {
    font-size: 0.7rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .blogs .box-container .box {
    width: 55%;
    /* background-color: red; */
  }
  .blogs .box-container .box img {
    height: 10rem;
    width: 100%;
  }
  .blogs .box-container .box .content {
    padding: 0.5rem;
  }
  .blogs .box-container .box .content h3 {
    font-size: 1rem;
  }
  .blogs .box-container .box .content p {
    font-size: 0.6rem;
  }
  .blogs .box-container .box .content .icons a {
    font-size: 0.7rem;
  }
}
</style>
