<template>
  <div class="footer">
    <div class="footer__logo-section">
      <img class="footer__logo" src="@/assets/logo/logo.png" alt="logo">
      <p class="footer__paragraph">2019 Proyecto Republicano</p>
      <p class="footer__paragraph">Todos los Derechos Reservados</p>
    </div>
    <div class="footer__info-section">
      <h3 class="footer__heading-tertiary">Mapa del sitio</h3>
      <ul class="footer__list">
        <li>
          <router-link class="footer__link" :to="{ name: 'home' }">
            <span>Inicio</span>
          </router-link>
        </li>
        <li>
          <router-link class="footer__link" :to="{ name: 'nosotros' }">
            <span>Nosotros</span>
          </router-link>
        </li>
        <li>
          <router-link class="footer__link" :to="{ name: 'contacto' }">
            <span>Contacto</span>
          </router-link>
        </li>
        <li>
          <router-link class="footer__link" :to="{ name: 'blog' }">
            <span>Blog</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer__social-section">
      <h3 class="footer__heading-tertiary">Redes sociales</h3>
      <div class>
        <ul class="footer__list">
          <li class>
            <a class="footer__link">
              <i class="fab fa-facebook"></i>
              <a class="footer__link" href="https://twitter.com/ProRepublicano">Facebook</a>
            </a>
          </li>
          <li class>
            <a class="footer__link">
              <i class="fab fa-twitter"></i>
              <a class="footer__link" href="https://twitter.com/ProRepublicano">Twitter</a>
            </a>
          </li>
          <li class>
            <a class="footer__link">
              <i class="fab fa-instagram"></i>
              <a class="footer__link" href="https://twitter.com/ProRepublicano">Instagram</a>
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
.footer {
  margin: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #1b1d23;
  padding: 1.5rem 3rem;

  &__link,
  &__link :hover,
  &__link :active,
  &__link :focus,
  &__paragraph,
  &__heading-tertiary {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.6rem;
  }
  &__logo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    width: 18rem;
    margin-bottom: 1.5rem;
  }

  &__paragraph {
    margin: 0;
    font-size: 1.5rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(4, 48px);
    align-items: center;
    font-size: 1.8rem;
  }

  &__link {
    margin-left: 1rem;
  }
}
@media (max-width: 480px) {
  .footer {
    display: block;
    padding: 2rem 0px;
    height: 100%;
  }
}
</style>