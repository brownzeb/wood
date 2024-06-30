<template>
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>Shipping <img src="../assets/logo.svg" alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis enim sed iusto, nemo m
        </p>
        <div class="share">
          <!-- <router-link to="/">fb</router-link>
          <router-link to="/">fb</router-link>
          <router-link to="/">fb</router-link>
          <router-link to="/">fb</router-link>
          <router-link to="/">fb</router-link> -->
        </div>
      </div>

      <div class="box">
        <h3>Contact info</h3>
        <router-link to="/" class="links">+123 4567 893</router-link>
        <router-link to="/" class="links">+123 4567 893</router-link>
        <router-link to="/" class="links">+123 4567 893</router-link>
        <router-link to="/" class="links">+123 4567 893</router-link>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <router-link to="/" class="links">home</router-link>
        <router-link to="/" class="links">about</router-link>
        <router-link to="/" class="links">product</router-link>
        <router-link to="/" class="links">faq</router-link>
        <router-link to="/" class="links">blogs</router-link>
        <router-link to="/" class="links">contact</router-link>
      </div>

      <div class="box">
        <h3>Newsletter</h3>
        <p>subscribe for latest update</p>
        <input type="email" placeholder="your email" class="email" />
        <input type="submit" value="subscribe" class="btn" />
        <img src="../assets/sample.jpg" alt="" class="payment-img" />
      </div>
    </div>

    <div class="credit">created by <span>mr. web designer</span> / all rights reserved</div>
  </section>
</template>

<style scoped>
.footer {
  background: #fff;
  text-align: center;
}
.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.5rem;
}
.footer .box-container h3 {
  font-size: 2.5rem;
  color: var(--black);
  padding: 1rem 0;
}
.footer .box-container h3 img {
  color: var(--orange);
  width: 50px;
  height: 40px;
}
.footer .box-container .box .links {
  display: block;
  font-size: 1.5rem;
  color: var(--light-color);
  padding: 1rem 0;
}
.footer .box-container .box .links:hover {
  padding-right: 2rem;
  color: var(--orange);
}
.footer .box-container .box p {
  line-height: 1.8;
  font-size: 1.5rem;
  color: var(--light-color);
  padding: 1rem 0;
}
.footer .box-container .box .share {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  border-radius: 5rem;
  font-size: 2rem;
  color: var(--black);
  margin-left: 2rem;
  background: #eee;
  text-align: center;
}
.footer .box-container .box .share:hover {
  background: var(--orange);
  color: #fff;
}
.footer .box-container .box .email {
  margin: 1rem 0;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background: #eee;
  color: var(--black);
  text-transform: none;
}
.footer .box-container .box .payment-img {
  margin-top: 0.2rem;
  margin-left: 20px;
  padding-top: 30px;
  height: 4rem;
  width: 9rem;
}
.footer .credit {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;
  font-size: 2rem;
  color: var(--black);
  border-top: var(--border);
}
.footer .credit span {
  color: var(--orange);
}

/* Media Queries */
@media (max-width: 1200px) {
  .footer .box-container h3 {
    font-size: 2.2rem;
  }
  .footer .box-container .box .links {
    font-size: 1.4rem;
  }
  .footer .box-container .box p {
    font-size: 1.4rem;
  }
  .footer .box-container .box .email {
    font-size: 1.4rem;
  }
  .footer .credit {
    font-size: 1.8rem;
  }
}

@media (max-width: 992px) {
  .footer .box-container h3 {
    font-size: 2rem;
  }
  .footer .box-container .box .links {
    font-size: 1.3rem;
  }
  .footer .box-container .box p {
    font-size: 1.3rem;
  }
  .footer .box-container .box .email {
    font-size: 1.3rem;
  }
  .footer .credit {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .footer .box-container {
    gap: 1rem;
  }
  .footer .box-container h3 {
    font-size: 1.8rem;
  }
  .footer .box-container .box .links {
    font-size: 1.2rem;
  }
  .footer .box-container .box p {
    font-size: 1.2rem;
  }
  .footer .box-container .box .email {
    font-size: 1.2rem;
  }
  .footer .credit {
    font-size: 1.4rem;
  }
}

@media (max-width: 576px) {
  .footer .box-container {
    grid-template-columns: 1fr;
  }
  .footer .box-container h3 {
    font-size: 1.6rem;
  }
  .footer .box-container .box .links {
    font-size: 1.1rem;
  }
  .footer .box-container .box p {
    font-size: 1.1rem;
  }
  .footer .box-container .box .email {
    font-size: 1.1rem;
  }
  .footer .credit {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .footer .box-container h3 {
    font-size: 1.4rem;
  }
  .footer .box-container .box .links {
    font-size: 1rem;
  }
  .footer .box-container .box p {
    font-size: 1rem;
  }
  .footer .box-container .box .email {
    font-size: 1rem;
  }
  .footer .credit {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .footer .box-container h3 {
    font-size: 1.2rem;
  }
  .footer .box-container .box .links {
    font-size: 0.9rem;
  }
  .footer .box-container .box p {
    font-size: 0.9rem;
  }
  .footer .box-container .box .email {
    font-size: 0.9rem;
  }
  .footer .credit {
    font-size: 0.8rem;
  }
}
</style>
