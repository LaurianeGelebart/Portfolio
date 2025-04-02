<template>
  <header>
    <Header2DInterface v-if="!user3D" />
    <Interface3D v-if="isLaptop && user3D"/>
  </header>
</template>

<script>
import Header2DInterface from "@/components/header/2DInterface.vue";
import Interface3D from '@/components/header/Interface3D.vue';

export default {
  name: "HeaderPage",
  components: { 
    // Header3DInterface, 
    Header2DInterface, 
    Interface3D,
  },
  props: {
    user3D: { type: Boolean, required: true, default: false },
    isLaptop: { type: Boolean, required: true, default: false },
  },
  emits: {},
  data() {
    return {};
  },
  methods: {},
  beforeMount() {
    // console.log(this.user3D)
  },
};
</script>


<style scoped>
/* header {
  color: var(--background-color-primary);
  position: relative;
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  padding-top: 4rem;
} */



@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
  