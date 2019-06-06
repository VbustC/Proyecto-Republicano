<template>
  <div class="tabs">
    <div class="tabs__title-container">
      <h2 class="tabs__heading-secondary">PROPUESTAS</h2>
    </div>
    <div class="tabs__container">
      <span
        class="tabs__span"
        :class="{ activeTab: selectedTab === index }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = index"
      >{{ tab }}</span>
    </div>
    <div class="tabs__tab-content">
      <div v-show="selectedTab === 0">
        <div class="tabs__tab-content-wrap">
          <div class="tabs__image-column">
            <img class="tabs__img" :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="tabs__description-column">
            <h2 class="tabs__heading-secondaryTab">{{tabs[selectedTab]}}</h2>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 1">
        <div class="tabs__tab-content-wrap">
          <div class="tabs__image-column">
            <img class="tabs__img" :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="tabs__description-column">
            <h2 class="tabs__heading-secondaryTab">{{tabs[selectedTab]}}</h2>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 2">
        <div class="tabs__tab-content-wrap">
          <div class="tabs__image-column">
            <img class="tabs__img" :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="tabs__description-column">
            <h2 class="tabs__heading-secondaryTab">{{tabs[selectedTab]}}</h2>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 3">
        <div class="tabs__tab-content-wrap">
          <div class="tabs__image-column">
            <img class="tabs__img" :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="tabs__description-column">
            <h2 class="tabs__heading-secondaryTab">{{tabs[selectedTab]}}</h2>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 4">
        <div class="tabs__tab-content-wrap">
          <div class="tabs__image-column">
            <img class="tabs__img" :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="tabs__description-column">
            <h2 class="tabs__heading-secondaryTab">{{tabs[selectedTab]}}</h2>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
            <p class="tabs__paragraph">{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs__title-container">
      <h2 class="tabs__heading-secondary">NUESTROS VALORES</h2>
    </div>
    <section class="proposals">
      <div class="proposals__cards-container">
        <div class="proposals__flex-row">
          <div class="proposals__card">
            <h2 class="proposals__heading-secondary">ESTADO LIMITADO</h2>
            <div class="proposals__image-container">
              <img class="proposals__img" src="@/assets/temple.png" alt="justicia">
            </div>
          </div>
          <div class="proposals__card">
            <h2 class="proposals__heading-secondary">PENSAMIENTO CRITICO</h2>
            <div class="proposals__image-container">
              <img class="proposals__img" src="@/assets/libra.png" alt="justicia">
            </div>
          </div>
          <div class="proposals__card">
            <h2 class="proposals__heading-secondary">ESPIRITU EMPRESARIAL</h2>
            <div class="proposals__image-container">
              <img class="proposals__img" src="@/assets/transaction.png" alt="justicia">
            </div>
          </div>
        </div>
        <div class="proposals__grid-row-bottom">
          <div class="proposals__card--1">
            <h2 class="proposals__heading-secondary">SOLIDARIDAD RESPONSABLE</h2>
            <div class="proposals__image-container">
              <img class="proposals__img" src="@/assets/voting.png" alt="justicia">
            </div>
          </div>
          <div class="proposals__card--2">
            <h2 class="proposals__heading-secondary">MERITOCRACIA CIUDADANA</h2>
            <div class="proposals__image-container">
              <img class="proposals__img" src="@/assets/transaction.png" alt="justicia">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabs: [
        "propuesta #1",
        "propuesta #2",
        "propuesta #3",
        "propuesta #4",
        "propuesta #5"
      ],
      thumbnails: [
        "http://lorempixel.com/600/330/",
        "http://lorempixel.com/600/330/",
        "http://lorempixel.com/550/330/",
        "http://lorempixel.com/600/330/",
        "http://lorempixel.com/600/330/"
      ],
      descriptions: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at error perspiciatis temporibus in unde, voluptatum ut sunt, ipsum aliquam cumque impedit accusamus a commodi assumenda hic explicabo atque magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at error perspiciatis temporibus in unde, voluptatum ut sunt, ipsum aliquam cumque impedit accusamus a commodi assumenda hic explicabo atque magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at error perspiciatis temporibus in unde, voluptatum ut sunt, ipsum aliquam cumque impedit accusamus a commodi assumenda hic explicabo atque magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at error perspiciatis temporibus in unde, voluptatum ut sunt, ipsum aliquam cumque impedit accusamus a commodi assumenda hic explicabo atque magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at error perspiciatis temporibus in unde, voluptatum ut sunt, ipsum aliquam cumque impedit accusamus a commodi assumenda hic explicabo atque magnam."
      ],
      selectedTab: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  &__title-container {
    margin: 4rem auto;
    background-color: #2b375a;

    color: #ffffff;
  }

  &__heading-secondary {
    font-size: 5.5rem;
    padding: 3rem;
  }

  &__tab-content {
    padding: 0 5rem;
  }

  &__paragraph {
    font-size: 1.5rem;
  }

  &__container {
    padding: 0 5rem;
    color: #566387;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 6rem;
    align-items: center;
  }

  &__span {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
  }

  .activeTab {
    background-color: #566387;
    color: #ffffff;
    font-size: 2rem;
  }

  &__tab-content-wrap {
    //border: 1px solid #566387;
    color: #ffffff;
    background-color: #566387;
    display: grid;
    grid-template-columns: 45% 55%;
  }

  &__description-column {
    padding: 3rem;
  }

  &__heading-secondaryTab {
    font-size: 3.2rem;
  }

  &__img {
    display: flex;
    height: 100%;
    max-width: 100%;
  }
}

.proposals {
  &__cards-container {
    padding: 5rem 0px;
    margin: 0 auto;
  }

  &__flex-row {
    display: flex;
    justify-content: space-around;
  }
  &__grid-row-bottom {
    margin: 5rem 15rem 0 15rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }

  &__card {
    width: 30rem;

    &--1 {
      justify-content: end;
    }
  }
  &__img {
    width: 16rem;
    height: 16rem;
    margin: 2rem 0;
  }

  &__heading-secondary {
    font-size: 2rem;
  }
}

@media (max-width: 842px) {
  .tabs {
    &__tab-content-wrap {
      grid-template-columns: initial;
      grid-template-rows: 45% 55%;
    }

    &__image-column {
      grid-row-start: 2;
      img {
        width: 100%;
      }
    }
    &__description-column {
      grid-row-start: 1;
      padding: 5px 2rem 3rem;
    }
  }
  .proposals {
    &__grid-row-bottom {
      grid-column-gap: initial;
    }
  }
}
@media (max-width: 767px) {
  .tabs {
    &__tab-content-wrap {
      grid-template-rows: 50% 50%;
    }
  }
}
@media (max-width: 651px) {
  .proposals {
    &__cards-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__flex-row {
      display: block;
    }
    &__grid-row-bottom {
      display: flex;
      flex-direction: column;
      margin: 0;
      margin-bottom: 3rem;
    }
    &__card {
      margin-bottom: 3rem;
    }
  }
}
@media (max-width: 600px) {
  .tabs {
    &__tab-content {
      padding: 0;
    }
    &__container {
      padding: 0;
      grid-template-columns: initial;
      grid-template-rows: repeat(5, 5rem);
    }

    &__tab-content-wrap {
      grid-template-rows: 62% 38%;
    }

    &__title-container {
      margin: initial;
    }
  }
}
</style>
    