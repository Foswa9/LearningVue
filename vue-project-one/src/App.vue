<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import CivSelector from './components/CivSelector.vue'

</script>

<template >
    <div>
      <NavBar></NavBar>
    </div>
    <div>
      <CivSelector></CivSelector>
    </div>

    <div class="civ-overview-parent">
      <div class="civ-overview-flagicon"> <img src="../images/French.webp" style="width:250px"></div>
      <div class="civ-overview-text">
          <div><p>badd ass quote goes here</p></div>
          <div><p>Excels at: thing1, thing 2 , thing 3</p></div>
      </div>
    </div>
  
 
    <!-- <div class="wrapper">
      <HelloWorld msg="" />

      <nav class="nav-div">
        <div>
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <RouterLink to="/spearmen">spearman</RouterLink>
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
        
        <div>
          <RouterLink :to="{name: 'UnitShowCase'}">Click</RouterLink>
        </div>
        
        
       
            
      </nav>
    </div> -->

    <!-- <RouterView /> -->
    <router-view>
      
    </router-view>

</template>

<style scoped>

.civ-overview-parent{
  background-color: red;
  justify-content: center;
  display: flex;
}

.civ-overview-text{
  display: flex;
  flex-direction: column;
}

.all-content-container{
  background-color: aquamarine;
}

.civ-selector-container{
  background-color: tomato;
}

.nav-div{
  
  display: flex;
  justify-content: center;

}
.nav-div div{
  margin: 10px;
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
