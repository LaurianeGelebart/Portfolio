<template>
  <header>
    <Header2DInterface v-if="!user3D" />
    <Header3DInterface v-if="isLaptop && user3D"/>
  </header>
</template>

<script>
import Header2DInterface from "@/components/header/2DInterface.vue";
import Header3DInterface from '@/components/header/3DInterface.vue';

export default {
  name: "HeaderPage",
  components: { 
    Header2DInterface, 
    Header3DInterface,
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
  },
};
</script>


<style scoped>

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}
</style>
  