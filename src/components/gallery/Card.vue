<template>
  <div @mouseover="hover=true" @mouseleave="hover=false" class="itemGallery">
    <img :src="'../img/' + img[0].src" :alt="img[0].alt" />
    <Transition duration="1000" name="nested">
    <div v-show="hover" class="infos">
      <h2>{{ name }}</h2>
      <div class="tags">
        <p v-for="tag in tags" :key="tag">{{ tag }}</p>
      </div>
    </div>
  </Transition>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
  components: {},
  props: {
    name: { type: String, required: true },
    img: { type: Object, required: true },
    tags: { type: Object, required: true }
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {},
  beforeMount() { }
}
</script>
  
<style scoped>
.itemGallery {
  position: relative;
  transition: 1s ease-in-out;
  width: 26vw;
  height: 20vw;
  /* height: 26vw; */
  background-color: var(--background-color-secondary);
  margin: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden; 
  cursor: pointer; 
}

.itemGallery img {
  width: 100%;
  height: 100%;
  transition: inherit;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  object-position: center center;
  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  opacity: 0.9;
}
/* 
.itemGallery:hover img {
  transform: scale(1);
  opacity: 0.5;
} */

.infos {
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: rgba(24, 24, 24, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%
}

.itemGallery h2 {
  font-family: 'PRIMETIME', sans-serif;
  font-size: 2.5rem;
  color: var(--accent-color-hover);
  margin: auto;
  padding: 0 4rem ;
}

.tags {
  background-color: var(--accent-color-hover);
  color: black;
  display: flex;
  flex-direction: row;
  padding: 0 1rem ; 
  justify-content: center; 
}

.tags p {
  padding: 0 0.5rem;
}


.nested-enter-active,
.nested-leave-active {
  transition: 0.3s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(-50rem);
  opacity: 0;
}


@media screen and (max-width: 1024px) {
  .itemGallery {
    width: 40vw;
    height: 35vw;
    margin: 2vw;
  }
}

@media screen and (max-width: 768px) {
  .itemGallery {
    width: 85vw;
    height: 70vw;
    margin: 6vw 0;
  }
}
</style>
  