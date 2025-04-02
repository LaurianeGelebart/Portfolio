<template>
  <div id="app">
    <Navbar :user3D="user3D" @update:user3D="value => user3D = value" :isLaptop="isLaptop"></Navbar>
    <Header :user3D="user3D" :isLaptop="isLaptop"></Header>
    <main>
      <WhoAmI :isLaptop="isLaptop"></WhoAmI>
      <Gallery :isLaptop="isLaptop" :scrollLocked="scrollLocked" @update:scrollLocked="value => scrollLocked = value"></Gallery>
    </main>
    <Footer></Footer>
    <div v-if="scrollLocked" class="black"></div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Gallery from '@/components/gallery/Gallery.vue'
import WhoAmI from '@/components/WhoAmI.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Gallery,
    WhoAmI,
    Footer
  },
  data() {
    return {
      scrollLocked: false,
      isLaptop: false,
      user3D: true,
    }
  },
  methods: {
    isMobileDevice() {
      this.isLaptop = window.innerWidth >= 1024
    },
  },
  watch: {
    scrollLocked: function () {
      document.body.style.overflow = this.scrollLocked ? 'hidden' : 'auto'
    }
  },
  beforeMount() {
    this.isMobileDevice()
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

@font-face {
  font-family: PRIMETIME;
  src: url('./font/primetime.ttf');
}

:root {
  --background-color-primary: rgb(250, 250, 250);
  --background-color-secondary: rgb(34, 34, 34);
  /* --accent-color: #FFDC00; */
  --accent-color-hover: #FFDC00;
  --text-primary-color: rgb(34, 34, 34);
  --text-secondary-color: rgb(250, 250, 250);
}

:root.dark-theme {
  --background-color-primary: rgb(34, 34, 34);
  --background-color-secondary: rgb(250, 250, 250);
  /* --accent-color: #FFDC00; */
  --accent-color-hover: #FFDC00;
  --text-primary-color: rgb(250, 250, 250);
  --text-secondary-color: rgb(34, 34, 34);
}

html {
  scroll-behavior: smooth;
  position: relative;
  background-color: var(--background-color-primary) !important;
  color: var(--text-primary-color);
}


body {
  overflow-x: hidden;
  position: relative;
  height: 100%;
  margin: 0;
  font-family: 'Raleway', sans-serif;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h2 {
  z-index: 2;
  font-family: 'Raleway', sans-serif;
}

section {
  margin: 4vh 0;
  padding: 2vh 4vw;
}

#app>* {
  display: block;
}

main {
  margin: 0;
  padding: 5% 0;
  height: 80%;
  box-sizing: border-box;
  background-color: var(--background-color-primary);
}

main>* {
  margin: 4vh 0;
  padding: 5vh 6vw;
}

.titrePartie {
  margin: 5vh 0 2vh;
  font-family: 'PRIMETIME', sans-serif;
  text-transform: uppercase;
  font-size: 5vw;
  color: var(--accent-color-hover);
  /* opacity: 0; */
}

.titrePartie.scroll {
  animation: scroll 1s ease-in-out;
  opacity: 1;
}

.black {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 10;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scroll {
  0% {
    transform: translateY(-40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  .titrePartie {
    font-size: 5rem;
  }
}

@media screen and (max-width: 768px) {
  .titrePartie {
    font-size: 2rem;
  }
}
</style>