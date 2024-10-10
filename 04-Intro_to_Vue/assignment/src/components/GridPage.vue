<template>
    <main class="main">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">UW Course HTML 300</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/images">Images</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/grid">Grid Layout</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/accordion">Accordion</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Grid Layout Section -->
      <section class="container mt-5">
        <h1 class="mb-4">Carrot Cake Recipe</h1>
  
        <!-- Ingredients Section -->
        <div class="row">
          <div class="col-md-8 mb-4">
            <div class="p-4 bg-light-orange border">
              <h2>Ingredients</h2>
              <ul>
                <!-- Loop through ingredients array using v-for -->
                <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
              </ul>
            </div>
          </div>
  
          <!-- Skill Level and Time Section -->
          <div class="col-md-4 mb-4">
            <div class="p-4 bg-light-orange border">
              <h2>Details</h2>
              <p><strong>Skill Level:</strong> {{ details.skillLevel }}</p>
              <p><strong>Time Required:</strong> {{ details.timeRequired }}</p>
            </div>
          </div>
        </div>
  
        <!-- Steps Section -->
        <div class="row">
          <div class="col-12 mb-4">
            <div class="p-4 bg-light-orange border">
              <h2>Steps</h2>
              <ol>
                <!-- Loop through steps array using v-for -->
                <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
              </ol>
            </div>
          </div>
        </div>
  
        <!-- Photo and Additional Photo Section -->
        <div class="row">
          <!-- Photo of Finished Product -->
          <div class="col-md-8 mb-4">
            <div class="p-4 bg-light-orange border text-center">
              <img :src="finishedProductImage" class="img-fluid rounded" alt="Delicious carrot cake" />
            </div>
          </div>
  
          <!-- Additional Photo -->
          <div class="col-md-4 mb-4">
            <div class="p-4 bg-light-orange border text-center">
              <img :src="additionalImage" class="img-fluid rounded" alt="Fresh carrots" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ingredients: [
          "2 cups flour",
          "1 1/2 teaspoons baking powder",
          "1 teaspoon baking soda",
          "1 teaspoon salt",
          "1 teaspoon ground cinnamon",
          "1/2 teaspoon ground nutmeg",
          "1/2 teaspoon ground ginger",
          "1 1/2 cups sugar",
          "1 cup vegetable oil",
          "4 large eggs",
          "3 cups grated carrots",
          "1 cup chopped walnuts (optional)"
        ],
        details: {
          skillLevel: "Intermediate",
          timeRequired: "1 hour 30 minutes"
        },
        steps: [
          "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
          "In a large bowl, whisk together the flour, baking powder, baking soda, salt, cinnamon, nutmeg, and ginger.",
          "In another bowl, beat the sugar and oil until well combined. Add the eggs one at a time, beating well after each addition.",
          "Gradually add the dry ingredients to the wet ingredients, mixing just until combined.",
          "Fold in the grated carrots and walnuts.",
          "Divide the batter evenly between the prepared pans.",
          "Bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
          "Allow the cakes to cool in the pans for 10 minutes, then turn them out onto a wire rack to cool completely.",
          "Frost and assemble the cake as desired."
        ],
        finishedProductImage: "images/4113689496_667d52a5fa.jpg",
        additionalImage: "images/carrots.jpg"
      };
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles can be added here if necessary */
  </style>
  