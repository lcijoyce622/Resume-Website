<template>
  <section id="skills">
    <div class="container-fluid">
      <h1 class="mb-5">Skills</h1>
      <div class="row gx-1 justify-content-evenly">
        <skills-card data-aos="flip-right" data-aos-duration="1000"
          v-for="(card, index) in cards"
          :key="index"
          :icon="card.icon"
          :title="card.title"
          :about="card.about"
          :list="card.list"
          :toolslist="card.toolslist"
        ></skills-card>
      </div>
    </div>
  </section>
</template>
<script>
import SkillsCard from "./layout/SkillsCard.vue";
export default {
  components: {
    SkillsCard,
  },
  data() {
    return {
      cards: [
        {
          icon: "server",
          title: "PROGRAMMING",
          about: "使用程式語言，學習演算法、資料結構等課程，並用來撰寫畢業專題",
          list: ["Java", "Android", "SQL", "Git", "PHP"],
          toolslist: [
            "Eclipse",
            "Android Studio",
            "MySQL",
            "phpMyAdmin",
            "Github",
          ],
        },
        {
          icon: "laptop",
          title: "WEB DEVELOPMENT",
          about: "網頁前端開發，使用前端框架，切版、程式撰寫並展示",
          list: [
            "Vue3",
            "HTML5",
            "JavaScript",
            "JQuery",
            "Css/Scss",
            "Bootstrap",
            "Git",
          ],
          toolslist: [
            "Vue CLI",
            "Visual Studio",
            "Github",
            "Github Pages",
            "Firebase"
          ],
        },
        {
          icon: "palette",
          title: "DESIGN",
          about: "設計UI/UX、修圖、繪畫、Mockup、MattePainting，心智圖規劃",
          list: ["UX/UI", "Web", "Wireframe", "Logos"],
          toolslist: ["PhotoShop", "Illustrator", "Figma","Xmind"],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#skills {
  width: 100%;
  padding: 4rem 0;
   background-image: radial-gradient(
    #ffd3d3 1.9500000000000002px,
    #f8f8f8f8 1.9500000000000002px
  );
  background-size: 39px 39px;
  h1 {
    letter-spacing: 10px;
  }
}
 @media (max-width: 991.98px) {
   #skills {
     width: unset;
     margin: 0 1rem;
    
   }
 }

</style>