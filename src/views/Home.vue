<template>
  <div>
    <section id="slider">
      <div class="img-carousel">
        <mdb-carousel class="carousel" :interval="5500" showControls>
          <mdb-carousel-item img :src="getImgUrl('Caracas.jpg')" alt="Caracas"/>
          <mdb-carousel-item img :src="getImgUrl('Merida.jpg')" alt="Merida"/>
          <mdb-carousel-item img :src="getImgUrl('tepuy.jpg')" alt="tepuy"/>
        </mdb-carousel>
        <div class="scroll">
          <a @click="scrollMeTo('brief')">
            <img src="@/assets/DownScroll.png" alt="Scroll Down">
          </a>
        </div>
      </div>
    </section>
    <section id="brief" ref="brief">
      <div class="content-container">
        <div class="text-container">
          <h2>¿Por qué Proyecto Republicano?</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p>eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div class="image-container">
          <img class="logo-image" :src="getImgUrl('logo/logo.png')" alt="logo">
        </div>
      </div>
    </section>
    <section id="quote-phrase">
      <div class="phrase-container">
        <blockquote>eum iure reprehenderit qui in ea</blockquote>
        <blockquote>voluptate velit esse quam nihil</blockquote>
        <blockquote>molestiae consequatur, vel illum qui dolor</blockquote>
      </div>
    </section>
    <section id="contact-us">
      <router-link :to="{ name: 'contacto' }">
        <div id="contact-link">
          <h2>CONTACTANOS</h2>
        </div>
      </router-link>
    </section>
    <section id="proposals">
      <div class="cards-container">
        <div class="card">
          <div class="image-container">
            <img src="@/assets/temple.png" alt="justicia">
          </div>
          <div class="text-container">
            <span>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img src="@/assets/libra.png" alt="justicia">
          </div>
          <div class="text-container">
            <span>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img src="@/assets/voting.png" alt="justicia">
          </div>
          <div class="text-container">
            <span>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img src="@/assets/transaction.png" alt="justicia">
          </div>
          <div class="text-container">
            <span>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            </span>
            <router-link :to="{name: 'nosotros'}">MAS INFORMARCION</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="articles">
      <router-link :to="{ name: 'blog' }">
        <div id="articles-link">
          <h2>LEE NUESTROS ULTIMOS ARTICULOS</h2>
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
.carousel {
  position: relative;
  z-index: -2;
}
.scroll {
  position: absolute;
  top: 85%;
  left: 47%;
  z-index: 100;
  img {
    width: 100px;
    cursor: pointer;
  }
}

#brief {
  .content-container {
    display: flex;
    padding: 30px 60px;
    justify-content: space-between;
    .text-container {
      padding-right: 6%;
      h2 {
        font-size: 35px;
        color: #0d2773;
        font-weight: bold;
        letter-spacing: 3px;
        text-align: left;
      }
      p {
        font-size: 20px;
        font-weight: 500;
        line-height: 110%;
        text-align: left;
        margin-bottom: 30px;
      }
    }
    .image-container {
      img {
        width: 450px;
      }
    }
  }
}
#quote-phrase {
  .phrase-container {
    background-color: #2b375a;
    padding: 80px 40px;
    blockquote {
      letter-spacing: 3px;
      font-size: 45px;
      color: #ffffff;
      margin-bottom: 20px;
      margin-block-end: 20px;
      margin-block-start: 20px;
    }
  }
}
#contact-us,
#articles {
  background-color: #3b3939;
  h2 {
    font-weight: bold;
    font-size: 50px;
    color: #ffffff;
    margin: 0 auto;
    padding: 30px;
  }
  a,
  a:active,
  a:focus,
  a:hover {
    text-decoration: none;
  }
}
#proposals {
  .cards-container {
    padding: 50px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 50px;
    width: 80%;
    margin: 0 auto;
    .card {
      width: 300px;
      .image-container {
        img {
          width: 180px;
          margin: 20px 0;
        }
      }
      .text-container {
        a {
          margin: 5px 0;
          display: block;
        }
        a,
        a:hover,
        a:focus,
        a:active {
          color: #0d2773;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  #brief {
    .content-container {
      .image-container img {
        margin-top: 20%;
      }
    }
  }
  #proposals {
    .cards-container {
      grid-column-gap: 10%;
      margin: 0 10%;
    }
  }
}
@media (max-width: 842px) {
  .scroll {
    left: 45%;
    top: 90%;
  }
  #brief {
    .content-container {
      .image-container img {
        margin-top: auto;
        width: 100%;
      }
      .text-container {
        padding-right: initial;
        h2 {
          text-align: center;
        }
        p {
          font-size: 1.2em !important;
        }
      }
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  #quote-phrase {
    .phrase-container {
      padding: 30px 20px;
    }
    .phrase-container blockquote {
      font-size: 2.4em;
    }
  }
  #proposals {
    .cards-container {
      grid-column-gap: 10%;
      margin: 0 10%;
      .card {
        width: 100%;
      }
    }
  }
}
@media (max-width: 690px) and (orientation: portrait) {
  #proposals {
    .cards-container {
      grid-template-columns: auto;
    }
  }
  #brief {
    .content-container {
      .text-container h2 {
        font-size: 1.85em;
      }
    }
  }
}
@media (max-width: 480px) {
  .scroll {
    left: 40%;
  }
  #contact-link {
    h2 {
      font-size: 2.2em;
    }
  }
  #articles-link {
    h2 {
      font-size: 1.7em;
    }
  }
}
@media (max-width: 380px) {
  #contact-link {
    h2 {
      font-size: 1.6em;
    }
  }
  #articles-link {
    h2 {
      font-size: 1.4em;
    }
  }
  #quote-phrase {
    .phrase-container blockquote {
      font-size: 1.3em;
    }
  }
  #brief {
    .content-container {
      .text-container {
        h2 {
          font-size: 1.5em;
        }
        p {
          font-size: 1em;
        }
      }
    }
  }
}
</style>