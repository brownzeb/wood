<template>
  <div class="container">
    <div class="product-container">
      <div class="products">
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
        <!-- Add more product elements as needed -->
        <div class="product">
          <img src="../assets/wood.jpg" alt="Wood pallate" />
          <h3>Wood pallate</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta eveniet
            asperiores? Consequuntur asperiores quibusdam rem laudantium, dolorum assumenda, id
            ullam blanditiis repellendus ducimus quia quis voluptas quidem ex iure!
          </p>
          <div class="buttons">
            <button>Add to cart</button>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.product {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: center;
}

.product img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.product h3 {
  font-size: 1.5em;
  margin: 10px 0;
}

.product p {
  font-size: 1em;
  color: #555;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Media Queries */
@media (max-width: 1200px) {
  .products {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 992px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .product {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 350px) {
  .product {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
