<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import CivSelector from './components/CivSelector.vue'
import Test from './components/Test.vue'

</script>

<template >
  <div>
    <NavBar></NavBar>
  </div>
  <div>
    <CivSelector></CivSelector>
  </div>
  <div>
    <Test title="Trajan"></Test>
  </div>
 
    <div class="wrapper">
      <HelloWorld msg="" />

      <nav class="nav-div">
        <div>
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/spearmen">
            <img src="../images/Generic-Spearmen-Icon.webp" width="">
            Spearmen
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/Knight">Knight</RouterLink>
        </div>
        <div>
          <RouterLink to="/MAA">MAA</RouterLink>
        </div>
        <div>
          <RouterLink to="/Archer">Archer</RouterLink>
        </div>
        
       
            
      </nav>
    </div>

    <!-- <RouterView /> -->
    <router-view>
      
    </router-view>

</template>

<style scoped>


.all-content-container{
  background-color: aquamarine;
}

.civ-selector-container{
  background-color: tomato;
}

.nav-div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-div div{
  background-color: aqua;
}



/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
