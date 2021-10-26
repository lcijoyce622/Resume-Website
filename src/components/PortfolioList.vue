<template>
  <section id="portfolio">
    <div class="container">
      <h1 class="mb-5">Portfolio</h1>
      <portfolio-card 
        v-for="(card, index) in portfolioArr"
        :key="index"
        :url="card.url"
        :imgUrl="card.imgUrl"
        :title="card.title"
        :context="card.context"
        :arr="card.arr"
        :content2="card.content2"
      ></portfolio-card>
    </div>
  </section>
</template>
<script>
import PortfolioCard from "./layout/PortfolioCard.vue";
export default {
  components: {
    PortfolioCard,
  },
  data() {
    return {
      portfolioArr: [
         {
          url: "https://lcijoyce622.github.io/Chat-Room/",
          imgUrl: "chatroom.svg",
          title: "Chatroom App",
          context: "使用Firebase realtime database製作google帳號登入的簡易聊天室。",
          arr: ["Firebase","Vue3", "Bootstrap"],
          content2: true,
        },
        {
          url: "https://lcijoyce622.github.io/Calculator-App-with-Vue3/",
          imgUrl: "calculator.svg",
          title: "Calculator App",
          context: "使用vue3製作簡易計算機，並將結果儲存在localStorage。",
          arr: ["Vue3", "Bootstrap"],
          content2: false,
        },
        {
          url: "https://lcijoyce622.github.io/Todo-List-with-LocalStorage/",
          imgUrl: "todolist.svg",
          title: "To-Do List",
          context: "新增、修改、刪除、分類todo-list，並將結果儲存在localStorage。",
          arr: ["Vue3", "Bootstrap"],
          content2: true,
        },
        {
          url: "https://lcijoyce622.github.io/SummerCampWeekOne/",
          imgUrl: "randomuser.svg",
          title: "Random Users",
          context:
            "透過 Ajax 取得RANDOM USER GENERATOR遠端資料，透過資料內容呈現多筆資料列表並展示。",
          arr: ["Vue3", "Bootstrap"],
          content2: false,
        },
        {
          url: "https://lcijoyce622.github.io/Resume-Website/",
          imgUrl: "vue履歷網站擷取.svg",
          title: "Resume Website",
          context: "使用vue3重新撰寫履歷網站，使用figma重新設計內容，並加入EmailJS製作contact pages。",
          arr: ["Vue3", "Bootstrap","EmailJS"],
          content2: true,
        },
        {
          url: "https://lcijoyce622.github.io/Resume/",
          imgUrl: "履歷網站擷取.svg",
          title: "履歷網站(一版)",
          context: "設計並撰寫履歷網站，使用github pages呈現。",
          arr: ["JavaScript", "Bootstrap"],
          content2: false,
        },
        // {
        //   url: "https://leopardcatpublic.github.io/",
        //   imgUrl: "石虎網站擷取.svg",
        //   title: "山野閃靈",
        //   context: "宣導石虎危機的議題，負責前端功能設計、撰寫，以及程式碼整合。",
        //   arr: ["JavaScript", "JQuery", "Bootstrap", "AOS", "Swiper"],
        //   content2: true,
        // },
        
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#portfolio {
    overflow-x: hidden;

  background-color: #f8f8f8f8;
  opacity: 1;
  // background-image: radial-gradient(
  //   #ffd3d3 1.9500000000000002px,
  //   #f8f8f8f8 1.9500000000000002px
  // );
  // background-size: 39px 39px;
  padding:4rem 0;
  h1 {
    letter-spacing: 10px;
  }
}
 @media (max-width: 991.98px) {
   #portfolio {
    //  width: unset;
     margin: 0 1rem;
   }
 }
</style>