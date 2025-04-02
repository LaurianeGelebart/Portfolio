<template>
  <nav id="navbar" class="navbar">
    <div class="button" @click="toggleMenu">
      <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <svg v-if="menuOpen" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
    <Transition duration="550" name="nested">
      <div class="menu" v-if="menuOpen" @click="closeMenu">
        <ul>
          <li class="nav-item">
            <a @click="toggleMenu" class="nav-link navbar_element" id="navbar_moi" href="#WhoAmI">Qui suis-je ?</a>
          </li>
          <li class="nav-item">
            <a @click="toggleMenu" class="nav-link navbar_element" id="navbar_real" href="#Gallery">Réalisations</a>
          </li>
          <li class="nav-item">
            <a @click="toggleMenu" class="nav-link navbar_element" id="navbar_contact" href="#Contacts">Contact</a>
          </li>
        </ul>
        <div class="switches">
            <div class="switchTheme">
              <input
                @change="toggleTheme"
                id="checkbox"
                type="checkbox"
                class="switch-checkbox"
              />
              <label for="checkbox" class="switch-label">
                <span>🌙</span>
                <span>☀️</span>
                <div
                  class="switch-toggle"
                  :class="{
                    'switch-toggle-checked': userTheme === 'dark-theme',
                  }"
                ></div>
              </label>
            </div>
            <div v-if=isLaptop class="switch3D">
              <input
                @change="toggle3D"
                id="checkbox3D"
                type="checkbox"
                class="switch-checkbox"
              />
              <label for="checkbox3D" class="switch-label">
                <span>🧊</span>
                <span>✏️</span>
                <div
                  class="switch-toggle"
                  :class="{ 'switch-toggle-checked': user3D === true }"
                ></div>
              </label>
            </div>
          </div>
      </div>
    </Transition>


  </nav>
</template>
<script>
export default {
  name: 'NavbarPage',
  props: {
    isLaptop: { type: Boolean, required: true, default: false },
    user3D: { type: Boolean, required: true, default: false }
  },  
  emits: ["update:user3D"],
  data() {
    return {
      menuOpen: false,
      userTheme: "light-theme"
    }
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const newTheme = this.userTheme === "light-theme" ? "dark-theme" : "light-theme";
      this.setTheme(newTheme);
    },
    toggle3D() {
      this.$emit("update:user3D", !this.user3D);
    },
    toggleMenu(event){
      event.stopPropagation();
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(event) {
      if (this.menuOpen && !this.$el.contains(event.target)) {
        this.menuOpen = false;
      }
    }
  },
  mounted(){
    document.addEventListener('click', this.closeMenu);
  }
}
</script>


<style scoped>
.navbar {
  color: var(--text-secondary-color);
}

.feather {
  transition: 0.15s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

.feather-menu {
  stroke: var(--background-color-secondary);
}

.feather-x {
  stroke: var(--background-color-primary);
}

.feather-menu:hover {
  stroke: var(--accent-color-hover);
}

.feather-x:hover {
  stroke: var(--text-primary-color);
}

.button {
  cursor: pointer;
  margin-bottom: 5vh;
  position: fixed;
  right: 3rem;
  top: 3rem;
  z-index: 100;
}

.menu {
  background-color: var(--background-color-secondary);
  background-color: var(--accent-color-hover);
  padding: 10rem 4rem 5rem;
  height: calc(100vh - 15rem);
  max-width: 50vw;
  position: fixed;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.nested-enter-active,
.nested-leave-active {
  transition: 0.3s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(50rem);
  opacity: 0;
}

a {
  color: var(--text-secondary-color);
  /* color: var(--text-primary-color); */
  font-size: 3.5rem;
  font-family: 'PRIMETIME', sans-serif;
  transition: 0.15s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

a:hover {
  color: var(--text-primary-color);
  /* color: var(--accent-color-hover); */
}

.switches {
  display: flex;
  flex-direction: row;
}

.switches > * {
  padding-right: 2rem;
}

.switch-checkbox {
  display: none;
}

.switch-toggle-checked {
  transform: translateX(calc(3rem * 0.6)) !important;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-secondary);
  border-radius: 50%;
  top: calc(3rem * 0.07);
  left: calc(3rem * 0.07);
  height: calc(3rem * 0.4);
  width: calc(3rem * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-label {
  width: 3rem;

  border-radius: 3rem;
  border: calc(3rem * 0.025) solid var(--text-primary-color);
  padding: calc(3rem * 0.1);
  font-size: calc(3rem * 0.3);
  height: calc(3rem * 0.35);

  align-items: center;
  background: var(--background-color-primary);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background-color 0.5s ease;
  justify-content: space-between;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .menu {
    background-color: var(--background-color-secondary);
    background-color: var(--accent-color-hover);
    padding: 10rem 2rem 5rem;
    height: calc(100vh - 15rem);
    width: calc(100vw - 4rem);
    max-width: 100vw;
  }

  a {
    font-size: 2.5rem;
  }
}
</style>