<template>
  <div>
    <section id="brief">
      <div class="content-container">
        <div class="text-container">
          <h2>EL PROYECTO</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur i velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p>eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div class="image-container">
          <img src="@/assets/Component.png" alt="logo2">
        </div>
      </div>
    </section>
    <section id="objectives-section">
      <div class="cards-container">
        <div class="objective-card">
          <div class="title-container">
            <h3>MISION</h3>
          </div>
          <div class="text-container">
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
        <div class="objective-card">
          <div class="title-container">
            <h3>VISION</h3>
          </div>
          <div class="text-container">
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
      </div>
    </section>
    <section id="tabs-section">
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
#brief {
  .content-container {
    display: flex;
    padding: 65px 60px 30px 60px;
    justify-content: space-between;

    .text-container {
      padding-right: 6%;
      h2 {
        font-size: 50px;
        color: #0d2773;
        font-weight: bold;
        letter-spacing: 12px;
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
        width: 400px;
        height: 400px;
      }
    }
  }
}

#objectives-section {
  display: flex;
  .cards-container {
    padding: 30px 60px 10px 60px;
    display: grid;
    grid-template-columns: 47% 47%;
    grid-column-gap: 6%;
    .objective-card {
      color: #ffffff;
      .title-container {
        background-color: #2b375a;
        padding: 30px;
        h3 {
          font-size: 40px;
          margin: 0;
        }
      }
      .text-container {
        background-color: #566387;
        padding: 30px 20px;
        p {
          margin: 0 0 30px 0;
          font-size: 20px;
          text-align: left;
          line-height: 1.5;
        }
      }
    }
  }
}
#tabs-section {
  .tabs-content {
    .tab-content-wrap {
      .image-column img {
        height: 100%;
      }
    }
  }
}
@media (max-width: 1024px) {
  #brief {
    .content-container {
      .image-container img {
        height: initial;
        margin-top: 15%;
      }
      .text-container h2 {
        font-size: 2.65em;
      }
    }
  }
}
@media (max-width: 842px) {
  #brief {
    .content-container {
      display: initial;
      .image-container img {
        height: 100%;
        margin-top: initial;
        width: 50%;
      }
      .text-container {
        padding-right: initial;
        margin: 7% 7% 0px;
        h2 {
          text-align: center;
        }
        p {
          padding: 0px 3%;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  #brief {
    .content-container {
      .text-container {
        h2 {
          margin-top: 110px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  #brief {
    .content-container {
      .text-container {
        margin: initial;
        h2 {
          font-size: 2em;
        }
      }
    }
  }
  #objectives-section {
    .cards-container {
      font-size: 30px;
      grid-column-gap: initial;
      grid-template-columns: initial;
      grid-row-gap: 5%;
      margin-bottom: 5%;
    }
  }
}
@media (max-width: 600px) {
  #objectives-section {
    .cards-container {
      padding: 0;
      margin-bottom: 16%;
    }
  }
}
@media (max-width: 520px) {
  #brief {
    .content-container {
      .text-container {
        margin: initial;
        h2 {
          font-size: 2em;
        }
      }
    }
  }
}
</style>