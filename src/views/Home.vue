<template>
  <div>
    <section class="slider">
      <div class="slider__carousel-box">
        <mdb-carousel class="slider__carousel" :interval="5500" showControls>
          <mdb-carousel-item img :src="getImgUrl('Caracas.jpg')" alt="Caracas"/>
          <mdb-carousel-item img :src="getImgUrl('Merida.jpg')" alt="Merida"/>
          <mdb-carousel-item img :src="getImgUrl('tepuy.jpg')" alt="tepuy"/>
        </mdb-carousel>
        <div class="scroll">
          <a @click="scrollMeTo('brief')">
            <img class="scroll__arrow" src="@/assets/DownScroll.png" alt="Scroll Down">
          </a>
        </div>
      </div>
    </section>
    <section class="brief" ref="brief">
      <div class="brief__content-container">
        <div class="brief__text-container">
          <h2 class="brief__heading">¿Por qué Proyecto Republicano?</h2>
          <p
            class="brief__paragraph"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p
            class="brief__paragraph"
          >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div class="brief__image-container">
          <img class="brief__logo-image" :src="getImgUrl('logo/logo.png')" alt="logo">
        </div>
      </div>
    </section>
    <section class="quote">
      <div class="quote__phrase-container">
        <blockquote class="quote__block">eum iure reprehenderit qui in ea</blockquote>
        <blockquote class="quote__block">voluptate velit esse quam nihil</blockquote>
        <blockquote class="quote__block">molestiae consequatur, vel illum qui dolor</blockquote>
      </div>
    </section>
    <section class="linkbar">
      <router-link class="linkbar__link" :to="{ name: 'contacto' }">
        <div class="linkbar__contact-link">
          <h2 class="linkbar__heading">CONTACTANOS</h2>
        </div>
      </router-link>
    </section>
    <section class="cards">
      <div class="cards__container">
        <div class="cards__card">
          <div class="cards__image-container">
            <img class="cards__img" src="@/assets/temple.png" alt="justicia">
          </div>
          <div class="cards__text-container">
            <span class="cards__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link class="cards__link" :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="cards__card">
          <div class="cards__image-container">
            <img class="cards__img" src="@/assets/libra.png" alt="justicia">
          </div>
          <div class="cards__text-container">
            <span class="cards__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link class="cards__link" :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="cards__card">
          <div class="cards__image-container">
            <img class="cards__img" src="@/assets/voting.png" alt="justicia">
          </div>
          <div class="cards__text-container">
            <span class="cards__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link class="cards__link" :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="cards__card">
          <div class="cards__image-container">
            <img class="cards__img" src="@/assets/transaction.png" alt="justicia">
          </div>
          <div class="cards__text-container">
            <span class="cards__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link class="cards__link" :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="linkbar">
      <router-link class="linkbar__link" :to="{ name: 'blog' }">
        <div class="linkbar__articles-link">
          <h2 class="linkbar__heading">LEE NUESTROS ULTIMOS ARTICULOS</h2>
        </div>
      </router-link>
    </section>
  </div>
</template>
<script>
import { mdbCarousel, mdbCarouselItem } from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
    mdbCarouselItem
  },
  methods: {
    getImgUrl(name) {
      var images = require("@/assets/" + name);
      return images;
    },
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  &__carousel {
    position: relative;
    z-index: -2;
  }
}

.scroll {
  position: absolute;
  top: 49%;
  left: 50%;
  z-index: 10;
  transform: translateX(-48%);

  &__arrow {
    width: 10rem;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 100px;

    &:hover {
      transform: translateY(0.8rem);
    }
  }
}

.brief {
  &__content-container {
    display: flex;
    padding: 3rem 6rem;
    justify-content: space-between;
  }

  &__text-container {
    padding-right: 4.5rem;
  }

  &__heading {
    font-size: 3.5rem;
    color: #0d2773;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: left;
  }

  &__paragraph {
    font-size: 2rem;
    font-weight: 500;
    line-height: 110%;
    text-align: left;
    margin-bottom: 3rem;
  }

  &__logo-image {
    width: 35rem;
  }
}
.quote {
  &__phrase-container {
    background-color: #2b375a;
    padding: 8rem 4rem;
  }

  &__block {
    letter-spacing: 3px;
    font-size: 3.5rem;
    color: #ffffff;
    margin-bottom: 2rem;
    margin-block-end: 2rem;
    margin-block-start: 2rem;
  }
}
.linkbar {
  background-color: #3b3939;
  &__heading {
    font-weight: bold;
    font-size: 4rem;
    color: #ffffff;
    margin: 0 auto;
    padding: 3rem;
  }
  &__link,
  &__link:active,
  &__link:focus,
  &__link:hover {
    text-decoration: none;
  }
}
.cards {
  &__container {
    padding: 5rem 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 5rem;
    width: 80%;
    margin: 0 auto;
  }

  &__card {
    width: 30rem;
  }

  &__image-container {
  }

  &__img {
    width: 18rem;
    margin: 2rem 0;
  }

  &__text-container {
    font-size: 1.4rem;
  }

  &__link {
    margin: 5px 0;
    display: block;
  }

  &__link,
  &__link:hover,
  &__link:focus,
  &__link:active {
    color: #0d2773;
  }
}
@media (max-width: 1024px) {
  .brief {
    &__logo-image {
      margin-top: 20%;
    }
  }

  .cards {
    &__cards-container {
      grid-column-gap: 10%;
      margin: 0 10%;
    }
  }
}
@media (max-width: 842px) {
  .brief {
    &__content-container {
      flex-wrap: wrap;
      justify-content: center;
    }

    &__logo-image {
      margin-top: auto;
    }

    &__text-container {
      padding-right: initial;
    }

    &__heading {
      text-align: center;
    }
  }
  .quote {
    &__phrase-container {
      padding: 3rem 2rem;
    }
    &__block {
      font-size: 3rem;
    }
  }
  .cards {
    &__container {
      grid-column-gap: 10%;
      margin: 0 10%;
    }

    &__card {
      width: 100%;
    }
  }
}
@media (max-width: 690px) and (orientation: portrait) {
  .cards {
    &__container {
      grid-template-columns: auto;
    }
  }
  .brief {
    &__heading {
      font-size: 3rem;
    }
  }
}
</style>