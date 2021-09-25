<template>
  <div class="project">
    <a :href="url" target="_blank">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        v-if="content2"
        class="row gx-0 justify-content-end"
      >
        <div class="p-0 portfolioBg">
          <img :src="require(`@/assets/${imgUrl}`)" alt="" />
          <div class="bg"></div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        v-else
        class="portfolioBg"
      >
        <img :src="require(`@/assets/${imgUrl}`)" alt="" />

        <div class="bg bg2"></div>
      </div>
    </a>

    <div
      data-aos="flip-up"
      data-aos-duration="1000"
      class="content"
      :class="content2 ? 'content2' : ''"
    >
      <a :href="url" target="_blank">
        <h4>{{ title }}</h4></a
      >
      <p class="context">{{ context }}</p>
      <ul>
        <li v-for="(li, index) in arr" :key="index">{{ li }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["url", "imgUrl", "title", "context", "arr", "content2"],
};
</script>
<style lang="scss" scoped>

.project {
  position: relative;
  width: 70%;
  margin: auto;
  margin-bottom: 4rem;

  .portfolioBg {
    width: 60%;
    border: none;

    img {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    .bg {
      position: absolute;
      top: 0;
      width: 60%;
      height: 100%;
      // background-color: rgba(241, 228, 228, 0.8);
        background: -webkit-linear-gradient(160deg, #ffdcbbe8, #ffbdc8cb);
  background: -o-linear-gradient(160deg, #ffdcbbe8, #ffbdc8cb);
  background: -moz-linear-gradient(160deg, #ffdcbbe8, #ffbdc8cb);
  background: linear-gradient(160deg, #ffdcbbe8, #ffbdc8cb);
      transition-duration: 0.5s;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      -moz-backdrop-filter: blur(5px);
    }
    .bg2 {
      width: 100%;
    }

    .bg:hover {
      opacity: 0;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 0;
    li {
      padding: 0 4px;
      // color: #19d7f8;
      color: #a74c63;
    }
    li:before {
      content: "▹";
      left: 0;
    }
  }
  .content {
    text-align: end;
    position: absolute;
    width: 50%;
    top: 20%;
    right: 0;
    a {
      text-decoration: none;
      color: inherit;
    }
    h4 {
      font-weight: bold;
      padding-bottom: 1rem;
      letter-spacing: 5px;
    }
    h4:hover {
      // color: rgb(255, 203, 243);
      color: #a74c63;
    }
  }
  .content2 {
    left: 0;
    text-align: start;
    ul {
      max-width: 100%;
      justify-content: flex-start;
    }
  }
  .context {
    background: -webkit-linear-gradient(160deg, #ffc8aec7, #ffd3f29d);
  background: -o-linear-gradient(160deg, #ffc8aec7, #ffd3f29d);
  background: -moz-linear-gradient(160deg, #ffc8aec7, #ffd3f29d);
  background: linear-gradient(160deg, #fcd7b5c7, #f8d4ffc0);
    padding: 20px 30px;
    border-radius: 10px;
    letter-spacing: 3px;
    color: rgb(151, 115, 115);
    font-weight: 600;
    box-shadow: 4px 6px 10px #8b6f69;
  }
  .context:hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }
}

@media (max-width: 991.98px) {
  .project {
    width: 100%;
    box-shadow: 0 10px 15px #8d8d8d;

    .portfolioBg {
      width: 100%;

      .bg {
        width: 100%;
        background-color: #420a16;
        opacity: 0.9;
      }
      .bg:hover {
        opacity: 0.9;
      }
    }
    .content {
      color: #ffffff;
      text-align: center;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h4{
        padding: 0;
        color: #804949;
        letter-spacing: 3px;
      }
      .context {
        margin: 0;
        color: #ffffff;
        padding: 0 10px;
        letter-spacing: 1.5px;
        font-weight:400;
        // background-color: transparent;
        background: none;
        box-shadow: none;
      }
      ul {
        justify-content: center;
        li {
          color: #fde79f;
          font-size: 0.85rem;
        }
      }
    }
    .context:hover {
      transform: scale(1);
    }
  }
}
</style>