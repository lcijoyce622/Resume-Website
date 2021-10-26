<template>
  <section id="aboutme">
    <div class="container">
      <h1 class="mb-5">About Me</h1>
      <div class="row">
        <div class="photo col-12 col-lg-4">
          <div class="cover"></div>
          <img class="avatar" src="../assets/photo.png" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="col-12 col-lg-8 mt-2"
        >
          <ul>
            <li>
              {{ paragraph1 }}
            </li>
            <br />
            <li>
              {{ paragraph2 }}
            </li>
            <br />
            <li>
              {{ paragraph3 }}
            </li>
          </ul>
          <ul class="skill_list">
            <li v-for="(li, index) in liArray" :key="index">
              {{ li }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      paragraph1:
        "Hi！我是林珈誼，畢業於靜宜大學資訊工程學系，擅長Java、JavaScript、Vue3、HTML5、CSS、JQuery。",
      paragraph2: ` 開發畢業專題APP〝line up〞，此專案用於解決傳統排隊問題，在專案中我負責客戶端的前端功能撰寫，並與團隊組員共同規劃整體介面及資料串接。參加校外競賽獲得南開科技大學行動與智慧終端創新應用競賽佳作。`,
      paragraph3: `畢業後，由於對於網頁開發較有興趣，學習了RWD前端網頁設計課程，從學習設計(PS、AI)開始到規劃Wireframe、前端切版、再到網頁前端功能，使用JavaScript、JQuery、HTML5開發專案，為了更增進技術在Udemy上學習Vue3，並利用網路資源完成Side Project。`,
      liArray: [
        "Vue3",
        "Java",
        "JavaScript(ES6+)",
        "Html5",
        "Css/Scss",
        "JQuery",
        "Bootstrap",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
section {
  z-index: 10;
  width: 100%;
  padding: 100px 0;

  .photo {
    position: relative;
    img {
      position: relative;
      filter: blur(3px) grayscale(0.6);
      width: 80%;
      z-index: 5;
      float: left;
    }
  }
  .photo:after {
    content: "";
    border-radius: 5px;
    border: 0.5rem solid #f5a4a8;
    box-sizing: border-box;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 80%;
    height: 20rem;
    transform: translate(2rem, 5rem);
    transition: all 0.3s ease 0s;
  }
  .photo:hover {
    img {
      width: 90%;
      filter: none;
      border: 0.8rem solid #ffc7ca;
      border-radius: 5px;
      transition: all 0.3s ease 0s;
    }
    &:after {
      transform: translate(0%, 0%);
      opacity: 0;
      transition: all 0.3s ease 0s;
    }
  }

  .skill_list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    color: #a74c63;

    li:before {
      content: "▹";
      left: 0;
      // color: #19d7f8;
    }
  }
  ul {
    padding: 1rem;
    margin: auto;
    text-align: start;
    letter-spacing: 4px;
    line-height: 30px;
    list-style: none;
  }
  @media (max-width: 991.98px) {
    ul {
      letter-spacing: 1px;
    }
    .photo {
      img {
        filter: none;
        width: 60%;
        border-radius: 50%;
        float: none;
        box-shadow: 0px 10px 13px #8b6f69;
      }
      margin-bottom: 1rem;
    }
    .photo:after {
      display: none;
    }
    .photo:hover {
      transform: none;
      img {
        border: none;
        width: 60%;
        border-radius: 50%;
      }
    }
  }
}
</style>