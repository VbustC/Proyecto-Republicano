<template>
  <div id="nav" class="nav">
    <router-link class="brand" :to="{ name: 'home' }">Proyecto Republicano</router-link>

    <nav class="links">
      <div class="router-container">
        <router-link :to="{ name: 'home' }">
          <span>Inicio</span>
        </router-link>
        <router-link :to="{ name: 'nosotros' }">
          <span>Nosotros</span>
        </router-link>
        <router-link :to="{ name: 'contacto' }">
          <span>Contacto</span>
        </router-link>
        <router-link :to="{ name: 'blog' }">
          <span>Blog</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.burger__menu {
  display: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;
}
.links {
  margin-right: 2rem;
}
.router-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.nav * {
  color: #fff;
}
.nav a {
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  background: none !important;
  font-weight: 700;
  font-size: 2.4rem;
  color: #ffffff;
  text-decoration: none;
}

.nav .router-link-exact-active {
  background: #0d2773;
}

@media (max-width: 800px) {
  .nav {
    display: block;
    padding: initial;
  }
  .nav a {
    background-color: hsl(225, 63%, 39%, 0.5);
  }

  .links {
    margin: initial;
  }
}
@media (max-width: 350px) {
  .nav a {
    font-size: 1.4rem;
  }
}
</style>

    