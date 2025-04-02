<template>
  <section class="WhoAmI" id="WhoAmI">
    <h2 id="titrePresentation" class="titrePartie">Qui suis-je ?</h2>
    <div class="presentation_flex">
      <div v-if="!isLaptop" class="laPhoto">
        <div class="jaune"></div>
        <img src="@/img/photo_moi.jpg" alt="photo de moi" class="photo" />
        <div class="vert"></div>
      </div>
      <div class="lesInformations">
        <p v-if="aProposData.description"  id="description" class="description"
        v-html="aProposData.description">
        </p>
        <a
          class="buttonCV"
          href="https://laurianegelebart.fr/CV.pdf"
          target="_blank"
          >VOIR MON CV</a
        >
      </div>
      <div v-if="isLaptop" class="laPhoto">
        <div class="jaune"></div>
        <img src="@/img/photo_moi.jpg" alt="photo de moi" class="photo" />
        <div class="vert"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { getWhoIam } from '@/api/getData.js'

export default {
  name: "WhoAmI",
  props: {
    isLaptop: { type: Boolean, required: true },
  },
  emits: {},
  data() {
    return {
      aProposData: []
    };
  },
  beforeMount() {
    this.retrieveData()
  },
  methods: {
    async retrieveData() {
      this.aProposData = await getWhoIam();
    }
  },
}
</script>


<style scoped>
.presentation_flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.description {
  padding: 0 2vw;
  font-size: 1.3vw;
  text-align: justify;
}

.lesInformations {
  opacity: 1;
  width: 50%;
  display: block;
}

.lesInformations.scroll {
  opacity: 1;
  animation: scroll2 1.3s ease-in-out;
}

@keyframes scroll2 {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.laPhoto {
  width: 50%;
  height: 50vh;
  position: relative;
}

.phone {
  display: none;
}

.photo {
  overflow: hidden;
  max-width: 800px;
  max-height: 70vh;
  padding: 0 20%;
  width: 60%;
  z-index: 1;
  position: absolute;
  top: -5vw;
  left: 3vw;
}

.jaune {
  width: 15vw;
  height: 15vw;
  background-color: #ffdc00;
  z-index: 0;
  position: absolute;
  right: 0;
  top: -10vw;
}

.vert {
  width: 12vw;
  height: 12vw;
  background-color: #079386;
  z-index: 0;
  position: absolute;
  left: 7vw;
  top: 12vw;
}

.buttonCV {
  display: block;
  background-color: var(--text-primary-color);
  color: var(--text-secondary-color);
  font-size: 1.5rem;
  padding: 2vh;
  text-align: center;
  width: 25vh;
  /* height: 15vh; */
  margin: 6vh 25%;
  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.buttonCV:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 1024px) {
  .presentation_flex {
    flex-direction: column;
  }

  .description {
    font-size: 1.3rem;
    width: 100%;
  }

  .laPhoto {
    width: 90vw;
    height: 30vh;
    margin: 5vh 0 0;
  }

  .photo {
    width: 50%;
    top: 0;
    left: 0;
    padding: 0 25%;
  }

  .jaune {
    width: 20vw;
    height: 20vw;
    right: 15vw;
    top: -5vw;
  }

  .vert {
    width: 23vw;
    height: 23vw;
    left: 14vw;
    top: 28vw;
  }

  .lesInformations {
    width: 70vw;
    margin: 10vh 0;
  }

  .buttonCV {
    font-size: 2.8rem;
    margin-bottom: 6vh;
    margin-top: 4vh;
  }
}

@media screen and (max-width: 768px) {
  .laPhoto {
    margin: 5vh 0 0;
  }

  .lesInformations {
    width: 90vw;
    margin: 0;
  }

  .description {
    font-size: 0.8rem;
  }

  .buttonCV {
    font-size: 1rem;
    margin: 6vh;
  }
}
</style>
  