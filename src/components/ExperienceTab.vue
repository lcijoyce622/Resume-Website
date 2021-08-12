<template>
  <section id="experience">
    <div class="container">
      <h1 class="mb-5">Experiences</h1>
      <div class="row justify-content-evenly">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" id="tab_list" class="tab_list col-lg-3 col-12">
          <button
            v-for="tab in tabArr"
            :key="tab.thisTab"
            @click="selectTab(tab.thisTab)"
            :class="{ isChoose: tab.select == true }"
          >
            <h4>{{ tab.content }}</h4>
            <div class="after"></div>
          </button>
        </div>

        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="content_list col-lg-6 col-12 mt-3 mt-lg-0">
          <div v-for="(item, index) in contentArr" :key="index">
            <div v-if="clickTab == item.tab">
              <div v-for="(content, idx) in item.content" :key="idx">
                <h4>{{ content.subtitle }}</h4>
                <p>{{ content.context }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      clickTab: "tab1",
      tabArr: [
        { content: "大學在校時期", thisTab: "tab1", select: true },
        { content: "網頁前端設計", thisTab: "tab2", select: false },
        { content: "網頁前端工程", thisTab: "tab3", select: false },
        { content: "網頁前端架構", thisTab: "tab4", select: false },
      ],
      contentArr: [
        {
          tab: "tab1",
          content: [
            {
              subtitle: "畢業於靜宜大學資訊工程學系",
              context: ` 在校使用java學習，修習資料結構、演算法、程式設計等課程。
              積極參與各類活動，並擔任系上榮譽學長姐帶領新生。
              創立社團及擔任系學會、社團幹部。 具規劃多個活動與執行經驗。`,
            },
            {
              subtitle: "畢業專題-LineUp專題",
              context: `代表學校參賽，榮獲南臺科技大學-行動與智慧終端創新應用競賽佳作。
              專案使用Android Studio開發，語言使用java，負責客戶端前端功能開發。
              掃描店家QRcode即掃即排。
              解決排隊時對於等待時間的不確定性，能直接於app上確認需等待時間與目前叫號並提醒使用者。
              解決傳統號碼牌紙張浪費的環保問題。`,
            },
          ],
        },
        {
          tab: "tab2",
          content: [
            {
              subtitle: "RWD前端網頁設計課程",
              context: `學習photoshop、illustrator。 設計icon、製作名片、matte
              painting等作品。 從零開始的ui/ux設計與網站功能。`,
            },
            {
              subtitle: "Bootstrap開發、撰寫CSS/SCSS",
              context: `使用Bootstrap的元件和工具加上SCSS幫助開發，加強撰寫網頁的能力與完整度。
              使用swiper、AOS等套件讓動畫更加順暢。
              參考codepen，利用parallax等設計讓畫面更精緻。 利用Figma製作設計稿
              設計履歷網站。`,
            },
          ],
        },
        {
          tab: "tab3",
          content: [
            {
              subtitle: "山野閃靈專題",
              context: `負責功能開發與程式碼整合。
              使用javascript、HTML5、scss、css3、jquery、bootstrap撰寫。`,
            },
            {
              subtitle: "RWD響應式網頁撰寫",
              context: ` 使用Bootstrap快速開發RWD功能 撰寫履歷網站
              完成靜態網站撰寫，整理作品集。
              設計網站ui/ux與動畫、HTML5、scss、css3、jquery、bootstrap撰寫。
              RWD響應式網頁設計。`,
            },
          ],
        },
        {
          tab: "tab4",
          content: [
            {
              subtitle: "持續進修網頁前端",
              context: `使用Udemy學習Vue3。 使用VUE CLI開發專案。 使用github pages
              demo作品。`,
            },
            {
              subtitle: "撰寫學習筆記",
              context: ` 在NOTION裡整理筆記教學。`,
            },
            {
              subtitle: "撰寫Side Project",
              context: ` 參加網路夏令營開發Side Project。`,
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectTab(val) {
      switch (val) {
        case "tab1":
          this.clickTab = "tab1";
          this.tabArr.forEach((tab) => (tab.select = false));
          this.tabArr[0].select = true;
          break;
        case "tab2":
          this.clickTab = "tab2";
          this.tabArr.forEach((tab) => (tab.select = false));
          this.tabArr[1].select = true;
          break;
        case "tab3":
          this.clickTab = "tab3";
          this.tabArr.forEach((tab) => (tab.select = false));
          this.tabArr[2].select = true;
          break;
        case "tab4":
          this.clickTab = "tab4";
          this.tabArr.forEach((tab) => (tab.select = false));
          this.tabArr[3].select = true;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#experience {
  letter-spacing: 4px;
  line-height: 2rem;
  padding: 10rem 0;
  min-height: 80vh;
  overflow-x: hidden;
  h1 {
    letter-spacing: 10px;
  }
  .tab_list {
    position: relative;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
    border-right: 2px solid;
    padding: 0;
    animation-duration: 2s;

    .isChoose {
      color: #8b7381;
      background-color: #ffede9;
      box-shadow: 0 2px 10px #ddb9b3;
      border-radius: 50px;
      h4:before {
        content: "▹ ";
        left: 0;
        // color: rgb(255, 203, 243);
        color: #96858f;
      }
      .after {
        // background-color: rgb(255, 203, 243);
        background-color: #96858f;
      }
    }

    button {
      height: 100%;
      border: none;
      border-radius: 0;
      background-color: transparent;
      color: inherit;
      position: relative;
      transition-duration: 0.5s;

      .after {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #d7a297;
        position: absolute;
        right: -6px;
        top: 31px;
      }
    }
  }

  .content_list {
    // margin-left: 2rem;
    text-align: start;
  }
  @media (max-width: 991.98px) {
    #tab_list::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #d8bfbf;
    }

    #tab_list::-webkit-scrollbar {
      height: 8px;
    }

    #tab_list::-webkit-scrollbar-thumb {
      border-radius: 80px;
      background-color: #ffffff94;
    }
    #tab_list {
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .tab_list {
      flex-direction: row;
      height: unset;
      border-right: none;
      white-space: nowrap;
      .isChoose {
        // color: ivory;
        background-color: unset;
        box-shadow: none;

        .after {
          width: 90%;
          height: 3px;
          left: 0;
        }
      }
      button {
        .after {
          width: 0;
          height: 0;
          margin: auto;
        }
      }
    }
  }
}
</style>