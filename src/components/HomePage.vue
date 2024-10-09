<template>
    <main class="main">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Healthy Bites</router-link>
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
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/images">Images</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/grid">Grid Layout</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/accordion">Accordion</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Hero Section (Jumbotron) -->
      <div class="jumbotron text-center bg-light-orange">
        <h1 class="display-4">Welcome to Healthy Bites!</h1>
        <p class="lead">Your go-to resource for delicious and nutritious recipes.</p>
        <router-link class="btn btn-primary btn-lg" to="/grid" role="button">Explore Recipes</router-link>
      </div>
  
      <!-- Carousel Slider -->
      <div id="foodCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#foodCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#foodCarousel" data-slide-to="1"></li>
          <li data-target="#foodCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="image.src" class="d-block w-100" :alt="image.alt" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ image.title }}</h5>
              <p>{{ image.caption }}</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#foodCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#foodCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  
      <!-- Introduction -->
      <section class="container mt-5">
        <h2>About Us</h2>
        <p>
          At Healthy Bites, we're passionate about making nutritious eating fun and accessible. Whether you're looking for new recipes, tips on healthy living, or just a bit of food humor, we've got you covered. Dive in and discover the joys of healthy eating!
        </p>
      </section>
  
      <!-- Feature Section -->
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="p-4 bg-light-orange border">
              <h3>Delicious Recipes</h3>
              <!-- Tooltip added without jQuery -->
              <router-link class="btn btn-secondary" to="/grid" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">See Recipes</router-link>
              <span v-if="showTooltip" class="tooltip-text">Explore more recipes!</span>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="p-4 bg-light-orange border">
              <h3>Tips & Tricks</h3>
              <router-link class="btn btn-secondary" to="#">Learn More</router-link>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="p-4 bg-light-orange border">
              <h3>Healthy Myths</h3>
              <router-link class="btn btn-secondary" to="/accordion">Get the Facts</router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="text-center mt-5 py-4 bg-light">
        <p>&copy; 2024 Healthy Bites | Follow us on <router-link to="#">Social Media</router-link></p>
      </footer>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carouselImages: [
          {
            src: "images/15683243130_b852e6747a_b.jpg",
            alt: "Healthy Salad",
            title: "Fresh & Tasty",
            caption: "A healthy salad to brighten your day!",
          },
          {
            src: "images/4113689496_667d52a5fa.jpg",
            alt: "Fruit Smoothie",
            title: "Refreshing Smoothies",
            caption: "Blend your way to a healthier you!",
          },
          {
            src: "images/130384035_0f47baddd6_b.jpg",
            alt: "Grilled Vegetables",
            title: "Grilled Goodness",
            caption: "Grilled veggies packed with flavor and nutrients.",
          },
        ],
        showTooltip: false,
      };
    },
  };
  </script>
  
  <!-- Add custom styles here -->
  <style scoped>
  .carousel-item img {
    max-height: 400px;
    object-fit: cover;
  }
  
  .tooltip-text {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>
  
  