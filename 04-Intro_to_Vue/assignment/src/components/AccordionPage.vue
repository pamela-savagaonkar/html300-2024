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
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/images">Images</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/grid">Grid Layout</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/accordion">Accordion</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Accordion Section -->
      <section class="container mt-5">
        <h1 class="mb-4">Healthy Food: Frequently Asked Questions</h1>
  
        <div class="accordion" id="accordionExample">
          <!-- Use v-for to iterate over the faq array -->
          <div v-for="(item, index) in faq" :key="index" class="card">
            <div class="card-header" :id="'heading' + index">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#collapse' + index"
                  :aria-expanded="index === 0"
                  :aria-controls="'collapse' + index"
                >
                  {{ item.question }}
                </button>
              </h2>
            </div>
  
            <div
              :id="'collapse' + index"
              class="collapse"
              :class="{ show: index === 0 }"
              :aria-labelledby="'heading' + index"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                {{ item.answer }}
              </div>
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
        faq: [
          {
            question: "Why did my parents always try to feed me brussels sprouts?",
            answer:
              "Ah, the age-old mystery! Parents have been trying to convince kids to eat their brussels sprouts for generations. Turns out, they're packed with nutrients that help you grow big and strong! Plus, it's a rite of passage to learn how to avoid them on your plate—until you discover how delicious they are when roasted with a bit of olive oil and garlic!"
          },
          {
            question: "Is it true that eating carrots will help me see in the dark?",
            answer:
              "While you won’t gain superhero night vision from munching on carrots, they do contain beta-carotene, which your body converts to vitamin A—a key nutrient for good vision. So, while carrots might not turn you into Batman, they definitely help keep your eyes healthy!"
          },
          {
            question: "If I eat too much spinach, will I turn into Popeye?",
            answer:
              "Not exactly! But spinach is rich in iron and other nutrients that are great for your muscles. While you won’t sprout bulging biceps immediately, eating spinach will help keep you strong and healthy—just like our sailor friend!"
          },
          {
            question: "Why does kale always end up in my salad?",
            answer:
              "Kale is like the overachiever of the vegetable world. It’s packed with vitamins, minerals, and fiber, making it a superfood. Plus, its slightly bitter taste adds a nice contrast to sweeter salad ingredients. So, it’s not just a trend—kale is here to stay in your salad bowl!"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  