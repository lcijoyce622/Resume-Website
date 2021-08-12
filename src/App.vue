<template>
  <home-page></home-page>
  <nav-bar></nav-bar>
  <about-me></about-me>
  <experience-tab></experience-tab>
  <skills-list></skills-list>
  <portfolio-list></portfolio-list>
  <contact-me></contact-me>
  <footer-button></footer-button>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import AboutMe from "./components/AboutMe.vue";
import FooterButton from "./components/FooterButton.vue";
import ExperienceTab from "./components/ExperienceTab.vue";
import PortfolioList from "./components/PortfolioList.vue";
import SkillsList from "./components/SkillsList.vue";
import ContactMe from "./components/ContactMe.vue";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default {
  components: {
    NavBar,
    HomePage,
    AboutMe,
    FooterButton,
    ExperienceTab,
    PortfolioList,
    SkillsList,
    ContactMe,
  },
};
</script>

<style lang="scss">
// $color1:#6D7993;
// $color2:#9099A2;
// $color3:#96858F;
// $color4:#D5D5D5;
// $colorwhite:#ffffff;
// $colorblack:#000000;

html {
  margin: 0;
  overflow-x: hidden;
  body {
    margin: 0;
  // overflow-x: hidden;

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #cf9e94;
      background-color: #f8f8f8f8;
      margin: 0;
     
      h1 {
        letter-spacing: 10px;
        font-weight: bold;
        background-image: linear-gradient(to right,  #f1d9db,#a52118);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
                // font-size: clamp(40px, 4vw, 60px);
                padding-top: 2rem ;
      }
    }
  }
}
</style>
