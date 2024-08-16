<template>
  <section class="about">
    <h1 class="heading">new products</h1>
    <div class="box-container">
      <div class="box1">
        <div class="text1">
          <h2>S24</h2>
          <p>10MP Clear Imaging</p>
        </div>
      </div>
      <div class="box">
        <div class="card">
          <img src="../assets/about.jpg" alt="" />
          <div class="text">
            <h2>ps2</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/about.jpg" alt="" />
          <div class="text">
            <h2>ps2</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/about.jpg" alt="" />
          <div class="text">
            <h2>ps2</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box1 {
  height: 350px;
  width: 100%;
  background-color: blue;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  background-image: url(../assets/itel1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.text1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
}
.text1 h2 {
  font-size: 32px;
  font-weight: 800;
}
.text1 p {
  font-size: 18px;
  font-weight: 300;
}
.box {
  display: flex;
  gap: 10px;
}
.box .card:first-child {
  width: 600px; /* Adjust this value as needed */
}
.card {
  background-color: white;
  border-radius: 10px;
  width: 400px;
}
.card img {
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}
@media screen and (max-width: 768px) {
  .box1 {
    height: 250px; /* Adjust height for smaller screens */
  }

  .text1 h2 {
    font-size: 24px; /* Adjust text size for smaller screens */
  }

  .text1 p {
    font-size: 16px;
  }

  .card {
    width: 100%;
    flex: 1 1 100%;
  }
}

@media screen and (max-width: 480px) {
  .box1 {
    height: 200px; /* Further adjustments for very small screens */
    padding-left: 10px;
  }

  .text1 h2 {
    font-size: 20px;
  }

  .text1 p {
    font-size: 14px;
  }

  .card img {
    height: 150px;
  }
}
</style>
