<template>
  <div class="tabs-section">
    <div class="title-container">
      <h2>PROPUESTAS</h2>
    </div>
    <div class="tabs-container">
      <span
        class="tabs"
        :class="{ activeTab: selectedTab === index }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = index"
      >{{ tab }}</span>
    </div>
    <div class="tab-content">
      <div v-show="selectedTab === 0">
        <div class="tab-content-wrap">
          <div class="image-column">
            <img :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="description-column">
            <h2>{{tabs[selectedTab]}}</h2>
            <p>{{descriptions[selectedTab]}}</p>
            <p>{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 1">
        <div class="tab-content-wrap">
          <div class="image-column">
            <img :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="description-column">
            <h2>{{tabs[selectedTab]}}</h2>
            <p>{{descriptions[selectedTab]}}</p>
            <p>{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 2">
        <div class="tab-content-wrap">
          <div class="image-column">
            <img :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="description-column">
            <h2>{{tabs[selectedTab]}}</h2>
            <p>{{descriptions[selectedTab]}}</p>
            <p>{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 3">
        <div class="tab-content-wrap">
          <div class="image-column">
            <img :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="description-column">
            <h2>{{tabs[selectedTab]}}</h2>
            <p>{{descriptions[selectedTab]}}</p>
            <p>{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 4">
        <div class="tab-content-wrap">
          <div class="image-column">
            <img :src="thumbnails[selectedTab]" alt="imagen">
          </div>
          <div class="description-column">
            <h2>{{tabs[selectedTab]}}</h2>
            <p>{{descriptions[selectedTab]}}</p>
            <p>{{descriptions[selectedTab]}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title-container">
      <h2>NUESTROS VALORES</h2>
    </div>
    <section id="proposals">
      <div class="cards-container">
        <div class="flex-row">
          <div class="card">
            <h2>ESTADO LIMITADO</h2>
            <div class="image-container">
              <img src="@/assets/temple.png" alt="justicia">
            </div>
          </div>
          <div class="card">
            <h2>PENSAMIENTO CRITICO</h2>
            <div class="image-container">
              <img src="@/assets/libra.png" alt="justicia">
            </div>
          </div>
          <div class="card">
            <h2>ESPIRITU EMPRESARIAL</h2>
            <div class="image-container">
              <img src="@/assets/transaction.png" alt="justicia">
            </div>
          </div>
        </div>
        <div class="grid-row-bottom">
          <div class="card">
            <h2>SOLIDARIDAD RESPONSABLE</h2>
            <div class="image-container">
              <img src="@/assets/voting.png" alt="justicia">
            </div>
          </div>
          <div class="card">
            <h2>MERITOCRACIA CIUDADANA</h2>
            <div class="image-container">
              <img src="@/assets/transaction.png" alt="justicia">
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
.tabs-section {
  margin: 0 0 30px 0;
  .title-container {
    margin: 40px auto;
    background-color: #2b375a;

    color: #ffffff;
    h2 {
      font-size: 55px;
      padding: 30px;
    }
  }
  .tab-content {
    padding: 0 50px;
  }
  .tabs-container {
    padding: 0 50px;
    color: #566387;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 60px;
    align-items: center;

    .tabs {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
    }
    .activeTab {
      background-color: #566387;
      color: #ffffff;
      font-size: 20px;
    }
  }
  .tab-content-wrap {
    //border: 1px solid #566387;
    color: #ffffff;
    background-color: #566387;
    display: grid;
    grid-template-columns: 45% 55%;
    .description-column {
      padding: 30px;
      h2 {
        font-size: 2em;
      }
    }
    .image-column {
      img {
        display: flex;
        height: 100%;
        max-width: 100%;
      }
    }
  }
}
#proposals {
  .cards-container {
    padding: 50px 0px;
    margin: 0 auto;
    .flex-row {
      display: flex;
      justify-content: space-around;
    }
    .grid-row-bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10%;
    }
    .grid-row-bottom > .card:first-child {
      justify-self: end;
    }
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

@media (max-width: 842px) {
  .tabs-section {
    .tab-content-wrap {
      grid-template-columns: initial;
      grid-template-rows: 45% 55%;
      .image-column {
        grid-row-start: 2;
        img {
          width: 100%;
        }
      }
      .description-column {
        grid-row-start: 1;
        padding: 5px 20px 30px;
      }
    }
  }
  #proposals {
    .grid-row-bottom {
      grid-column-gap: initial !important;
    }
  }
}
@media (max-width: 767px) {
  #tabs-section {
    .title-container h2 {
      font-size: 2.8em;
    }
    .tab-content-wrap {
      grid-template-rows: 50% 50%;
    }
  }
}
@media (max-width: 651px) {
  #proposals {
    .cards-container {
      font-size: 23px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .flex-row {
        display: block;
      }
      .grid-row-bottom {
        display: initial;
      }
      .card {
        margin-bottom: 25px;
        .image-container img {
          width: 220px;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  #tabs-section {
    .tabs-section {
      .tab-content {
        padding: 0;
      }
      .tabs-container {
        padding: 0;
        grid-template-columns: initial;
        grid-template-rows: repeat(5, 50px);
      }
      .tab-content-wrap {
        grid-template-rows: 62% 38%;
      }
      .title-container {
        margin: initial;
      }
    }
  }
}
</style>
    