<template>
  <section class="Gallery" v-if="projects" id="Gallery">
    <h2 id="titreRealisations" class="titrePartie">Mes réalisations</h2>
    <ul class="allProjects">
      <li v-for="(project, index) in projects" :key="index">
        <div v-if="project.display === 'OK'">
          <Card @click="openProject(index, $event)" :name="project.name" :img="project.img" :tags="project.tags"></Card>
          <Transition name="arrived">
            <Project v-if="panelOpen && index === panelId" :name="project.name" v-model:panelOpen="panelOpen"
              :description="project.description" :img="project.img" :date="project.date"
              :links="project.links" :isLaptop="isLaptop">
            </Project>
          </Transition>
        </div>
      </li>
    </ul>
  </section>
</template>
 
<script>
import { getProjects } from '@/api/getData.js'
import Card from "@/components/gallery/Card.vue"
import Project from "@/components/gallery/Project.vue"
export default {
  name: 'GalleryPage',
  components: {
    Card,
    Project
  },
  props: {
    isLaptop: { type: Boolean, required: true },
    scrollLocked: { type: Boolean, required: true }
  },
  emits: ["update:scrollLocked"],
  data() {
    return {
      projects: [],
      panelOpen: false,
      panelId: ""
    }
  },
  methods: {
    async retrieveData() {
    this.projects = await getProjects();
    this.projects = this.shuffleArray(this.projects);
  },
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
    openProject(id, event) {
      event.stopPropagation()
      this.panelId = id
      this.panelOpen = true
      this.$emit("update:scrollLocked", true)
    }
  },
  watch: {
    panelOpen: function () {
      if (!this.panelOpen) this.$emit("update:scrollLocked", false)
    }
  },
  beforeMount() {
    this.retrieveData()
  }
}
</script>
  
<style scoped>
.Gallery {}

.allProjects {
  display: flex !important;
  flex-wrap: wrap;
  width: 100%;
}

.arrived-enter-active,
.arrived-leave-active {
  transition: 0.3s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

.arrived-enter-from,
.arrived-leave-to {
  /* transform: translateX(50%); */
  opacity: 0;
}

@media screen and (max-width: 1024px) {}

@media screen and (max-width: 768px) {}
</style>