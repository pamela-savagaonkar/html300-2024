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
          <li class="nav-item active">
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

    <!-- Images Section -->
    <section class="container mt-5">
      <h1 class="mb-4">Healthy Food Ideas</h1>
      <div class="row">
        <!-- Loop through images array using v-for -->
        <div
          v-for="(image, index) in images"
          :key="index"
          class="col-lg-4 col-md-6 mb-4"
        >
          <img :src="image.src" class="img-fluid rounded" :alt="image.alt" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/images/10132360493_bde1fe3115_b.jpg",
          alt: "Image 1"
        },
        {
          src: "/images/130384035_0f47baddd6_b.jpg",
          alt: "Image 2"
        },
        {
          src: "/images/13677166343_9fac91c502_b.jpg",
          alt: "Image 3"
        },
        {
          src: "/images/15683243130_b852e6747a_b.jpg",
          alt: "Image 4"
        },
        {
          src: "/images/3044245750_2705dfa7fa_b.jpg",
          alt: "Image 5"
        },
        {
          src: "/images/3854957666_a5c1f4e38d_b.jpg",
          alt: "Image 6"
        },
        {
          src: "/images/4663933277_84c3f2b545_b.jpg",
          alt: "Image 7"
        },
        {
          src: "/images/5940999427_d627f939a2_b.jpg",
          alt: "Image 8"
        },
        {
          src: "/images/9453912426_741f4ef559_b.jpg",
          alt: "Image 9"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Add any custom styles for this component if needed */
</style>
