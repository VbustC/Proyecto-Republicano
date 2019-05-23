<template>
  <div id="footer">
    <div class="logo-section">
      <img src="@/assets/logo/logo.png" alt="logo">
      <p>2019 Proyecto Republicano</p>
      <p>Todos los Derechos Reservados</p>
    </div>
    <div class="info-section">
      <h3>Mapa del sitio</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            <span>Inicio</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'nosotros' }">
            <span>Nosotros</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacto' }">
            <span>Contacto</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'blog' }">
            <span>Blog</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="social-section">
      <h3>Redes sociales</h3>
      <div class>
        <ul class>
          <li class>
            <a class>
              <i class="fab fa-facebook"></i>
              <a href="https://twitter.com/ProRepublicano">Facebook</a>
            </a>
          </li>
          <li class>
            <a class>
              <i class="fab fa-twitter"></i>
              <a href="https://twitter.com/ProRepublicano">Twitter</a>
            </a>
          </li>
          <li class>
            <a class>
              <i class="fab fa-instagram"></i>
              <a href="https://twitter.com/ProRepublicano">Instagram</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #1b1d23;
  padding: 15px 30px;
  a,
  a:hover,
  a:active,
  a:focus,
  p,
  span,
  h3 {
    color: #ffffff;
    text-decoration: none;
  }
  .logo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 180px;
      margin-bottom: 15px;
    }
    p {
      margin: 0;
    }
  }
  .info-section,
  .social-section {
    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: repeat(4, 48px);
      align-items: center;
      font-size: 18px;
    }
  }
  .social-section {
    a {
      margin-left: 10px;
    }
  }
}
@media (max-width: 480px) {
  #footer {
    display: block;
    padding: 20px 30px 0px;
    height: 100%;
  }
}
</style>