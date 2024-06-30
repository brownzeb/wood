<template>
  <section class="reviews">
    <h1 class="heading">customer's <span>review</span></h1>
    <div class="review-slider">
      <div class="wrapper">
        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>

        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>

        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>

        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
        <div class="box">
          <img src="../assets/wood.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus itaque fugit
            sunt eveniet dolorem. Vitae, omnis pariatur! Dolore labore adipisci vitae fugit, cumque
            voluptate earum, tempore similique, repudiandae commodi suscipit.
          </p>
          <h3>john deo</h3>
          <div class="stars">
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  overflow: hidden;
}

.reviews .heading {
  text-align: center;
  margin-bottom: 2rem;
}

.review-slider {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #888 #f1f1f1; /* Firefox */
}

.review-slider::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.review-slider::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.review-slider::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.wrapper {
  display: flex;
  gap: 2rem;
}

.reviews .review-slider .box {
  display: inline-block;
  background: #fff;
  border-radius: 0.5rem;
  text-align: center;
  outline-offset: -1rem;
  width: 40vw; /* Full viewport width */
  box-sizing: border-box;
  outline: var(--box-shadow);
  transition: 0.2s linear;
  flex-shrink: 0; /* Prevent shrinking */
}

.reviews .review-slider .box:hover {
  outline: var(--outline-hover);
  outline-offset: 0rem;
}

.reviews .review-slider .box img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}

.reviews .review-slider .box p {
  padding: 2rem; /* Adjust padding to be responsive */
  line-height: 2.4vw; /* Adjust line-height to be responsive */
  color: var(--light-color);
  font-size: 1.5vw; /* Adjust font-size to be responsive */
  white-space: pre-line;
}

.reviews .review-slider .box h3 {
  padding-bottom: 2vw; /* Adjust padding to be responsive */
  color: var(--black);
  font-size: 2.2vw; /* Adjust font-size to be responsive */
}

.reviews .review-slider .box .stars img {
  color: var(--orange);
  font-size: 1vw; /* Adjust font-size to be responsive */
  width: 30px;
  height: 30px;
}

/* Media Queries */
/* Media Queries */
@media (max-width: 1200px) {
  .reviews .review-slider .box {
    width: 45vw;
  }
  .reviews .review-slider .box img {
    height: 9rem;
    width: 9rem;
  }
  .reviews .review-slider .box p {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding: 1.5rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 1.8rem;
    padding-bottom: 1.5rem;
  }
  .reviews .review-slider .box .stars img {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 992px) {
  .reviews .review-slider .box {
    width: 50vw;
  }
  .reviews .review-slider .box img {
    height: 8rem;
    width: 8rem;
  }
  .reviews .review-slider .box p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding: 1.5rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 1.6rem;
    padding-bottom: 1.5rem;
  }
  .reviews .review-slider .box .stars img {
    width: 20px;
    height: 20px;
  }
  .review-slider::-webkit-scrollbar {
    height: 12px; /* height of horizontal scrollbar */
  }

  .review-slider::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .review-slider::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .review-slider::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .review-slider {
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #888 #f1f1f1; /* Firefox */
  }
}

@media (max-width: 768px) {
  .reviews .review-slider .box {
    width: 60vw;
  }
  .reviews .review-slider .box img {
    height: 7rem;
    width: 7rem;
  }
  .reviews .review-slider .box p {
    font-size: 1rem;
    line-height: 1.4rem;
    padding: 1rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 1.4rem;
    padding-bottom: 1rem;
  }
  .reviews .review-slider .box .stars img {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 576px) {
  .reviews .review-slider .box {
    width: 70vw;
  }
  .reviews .review-slider .box img {
    height: 6rem;
    width: 6rem;
  }
  .reviews .review-slider .box p {
    font-size: 0.9rem;
    line-height: 1.2rem;
    padding: 1rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  .reviews .review-slider .box .stars img {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .reviews .review-slider .box {
    width: 80vw;
  }
  .reviews .review-slider .box img {
    height: 5rem;
    width: 5rem;
  }
  .reviews .review-slider .box p {
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0.8rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 1rem;
    padding-bottom: 0.8rem;
  }
  .reviews .review-slider .box .stars img {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 360px) {
  .reviews .review-slider .box {
    width: 90vw;
  }
  .reviews .review-slider .box img {
    height: 4rem;
    width: 4rem;
  }
  .reviews .review-slider .box p {
    font-size: 0.7rem;
    line-height: 0.9rem;
    padding: 0.7rem;
  }
  .reviews .review-slider .box h3 {
    font-size: 0.9rem;
    padding-bottom: 0.7rem;
  }
  .reviews .review-slider .box .stars img {
    width: 12px;
    height: 12px;
  }
}
</style>
