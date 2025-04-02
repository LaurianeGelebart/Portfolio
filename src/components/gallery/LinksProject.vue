<template>
  <div
    class="LinksProject"
    v-if="
      links.demonstrator ||
      links.project ||
      links.file ||
      links.video ||
      links.git
    "
  >
    <p>Voir le projet :</p>
    <div>
      <span v-if="links.file" title="Lire le dossier">
        <a target="_blank" :href="links.file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-file"
          >
            <path
              d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
            ></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
        </a>
      </span>
      <span v-if="links.demonstrator" title="Voir le démonstrateur">
        <a target="_blank" :href="links.demonstrator"><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-play"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </a>
      </span>
      <span v-if="links.video" title="Voir la vidéo">
        <a target="_blank" :href="links.video">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-play"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </a>
      </span>
      <span v-if="links.git" title="Voir le code">
        <a target="_blank" :href="links.git"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </span>
      <span v-if="links.project" title="Accéder au projet">
        <a target="_blank" :href="links.project">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksProject",
  props: {
    links: { type: Object, required: true },
  },
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>


<style scoped>
.LinksProject {
  display: flex;
  flex-direction: row;
  align-items: center;
}

p {
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
}

.feather {
  stroke: var(--text-primary-color);
  transition: 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.feather:hover {
  stroke: var(--accent-color-hover);
}

span {
  margin: 0 1rem;
}

.LinksProject > span:nth-child(2) {
  margin-left: 0;
}

@media screen and (max-width: 768px) {
  p {
    font-size: 0.8rem;
  }
}
</style>
  