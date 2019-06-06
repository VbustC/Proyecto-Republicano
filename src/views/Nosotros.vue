<template>
  <div class="container">
    <section class="brief">
      <div class="brief__content-container">
        <div class="brief__text-container">
          <h2 class="brief__heading-secondary">EL PROYECTO</h2>
          <p
            class="brief__paragraph"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p
            class="brief__paragraph"
          >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p
            class="brief__paragraph"
          >eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div class="brief__image-container">
          <img class="brief__logo" src="@/assets/Component.png" alt="logo2">
        </div>
      </div>
    </section>
    <section class="objectives">
      <div class="objectives__cards-container">
        <div class="objectives__objective-card">
          <div class="objectives__title-container">
            <h3 class="objectives__heading-tertiary">MISION</h3>
          </div>
          <div class="objectives__text-container">
            <p
              class="objectives__paragraph"
            >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p
              class="objectives__paragraph"
            >eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
        <div class="objectives__objective-card">
          <div class="objectives__title-container">
            <h3 class="objectives__heading-tertiary">VISION</h3>
          </div>
          <div class="objectives__text-container">
            <p
              class="objectives__paragraph"
            >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p
              class="objectives__paragraph"
            >eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
      </div>
    </section>
    <section class="tabs-section">
      <Tabs></Tabs>
    </section>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  components: { Tabs }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 3rem;
  background-color: #f9f9f9;
}

.brief {
  &__content-container {
    display: flex;
    padding: 6.5rem 6rem 3rem 6rem;
    justify-content: space-between;
  }

  &__text-container {
    padding-right: 6%;
    animation: moveInLeft 1.5s;
  }

  &__heading-secondary {
    font-size: 5rem;
    color: #0d2773;
    font-weight: bold;
    letter-spacing: 1.2rem;
    text-align: left;
  }

  &__paragraph {
    font-size: 2rem;
    font-weight: 500;
    line-height: 110%;
    text-align: left;
    margin-bottom: 3rem;
  }

  &__logo {
    margin-top: 3.5rem;
    width: 40rem;
    height: 40rem;
    animation: moveInRight 1.5s;
  }
}

.objectives {
  display: flex;

  &__cards-container {
    padding: 3rem 6rem 1rem 6rem;
    display: grid;
    grid-template-columns: 47% 47%;
    grid-column-gap: 6%;
    animation: moveInUp 1.5s;
  }

  &__objective-card {
    color: #ffffff;
  }

  &__title-container {
    background-color: #2b375a;
    padding: 3rem;
  }

  &__heading-tertiary {
    font-size: 4rem;
    margin: 0;
  }

  &__text-container {
    background-color: #566387;
    padding: 3rem 2rem;
  }

  &__paragraph {
    margin: 0 0 3rem 0;
    font-size: 2rem;
    text-align: left;
    line-height: 1.5;
  }
}

@media (max-width: 1024px) {
  .brief {
    &__logo {
      height: initial;
      margin-top: 15%;
    }
  }
}
@media (max-width: 842px) {
  .brief {
    &__content-container {
      display: initial;
    }
    &__logo {
      height: 100%;
      margin-top: initial;
      width: 50%;
    }
    &__text-container {
      padding-right: initial;
      margin: 7% 7% 0px;
    }

    &__heading-secondary {
      text-align: center;
    }
    &__paragraph {
      padding: 0px 3%;
    }
  }
}
@media (max-width: 800px) {
  .brief {
    &__heading-secondary {
      margin-top: 110px;
    }
  }
}
@media (max-width: 767px) {
  .brief {
    &__text-container {
      margin: initial;
    }
  }
  .objectives {
    &__cards-container {
      grid-column-gap: initial;
      grid-template-columns: initial;
      grid-row-gap: 5%;
      margin-bottom: 5%;
    }
  }
}
@media (max-width: 600px) {
  .objectives {
    &__cards-container {
      padding: 0;
      margin-bottom: 16%;
    }
  }
}
@media (max-width: 520px) {
  .brief {
    &__text-container {
      margin: initial;
    }
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInUp {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>