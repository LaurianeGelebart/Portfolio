<template>
  <div class="Images">
    <Transition name="fade">
      <div class="front">
        <img
          :src="'../img/' + img[frontImage].src"
          :alt="img[frontImage].alt"
        />
      </div>
    </Transition>
    <div class="previews">
      <div
        class="preview"
        v-for="(image, index) in img.slice(1)"
        @click="changeFront(index)"
        :key="image.src"
      >
        <div class="imageContainer">
          <img :src="getSrc(index)" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
  


<script>
export default {
  name: "ImagesPage",
  props: {
    img: { type: Object, required: true },
  },
  data() {
    return {
      frontImage: 1,
    };
  },
  methods: {
    getSrc(index) {
      const image = this.img[index + 1];
      let src = image.src;
      if (src.endsWith(".gif")) {
        src = src.replace(".gif", ".png");
      }
      return "../img/" + src;
    },
    changeFront(id) {
      this.frontImage = id + 1;
    },
  },
};
</script>

<style scoped>
.Images {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.front {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.front img {
  max-width: 100%;
  max-height: 100%;
}

.previews {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.preview {
  width: 30%;
  height: 6rem;
  margin: 1rem 0.5rem;
  cursor: pointer;
  overflow: hidden;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.preview > div:first-child {
  margin-left: 0;
}

.preview img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1024px) {
  .front {
    height: auto;
    max-height: 60vh;
    width: auto;
  }

  .front img {
    height: 100%;
  }

  .preview {
    height: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .front {
    max-height: 35vh;
  }
}
</style>
