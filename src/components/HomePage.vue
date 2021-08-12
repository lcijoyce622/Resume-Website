<template>
  <section id="homepage">
    <div class="bg">
      <bubbles-wrapper></bubbles-wrapper>
    </div>

    <div class="container-fluid">
      <div class="row h-100 justify-content-center">
        <div data-aos-duration="1000" class="intro col-12 align-self-center">
          <p data-aos="fade-down-right" data-aos-duration="1000">Hello,I'm</p>
          <h2
            data-aos="fade-down-right"
            data-aos-duration="1000"
            class="header"
          >
            Chia-yi Lin
          </h2>
          <p data-aos="fade-down-right" data-aos-duration="1000">
            Front-End Web Developer
          </p>
          <br />
          <a
            data-aos="fade-up-left"
            data-aos-duration="1000"
            class="btn btn-lg aboutbtn"
            href="#aboutme"
            role="button"
            >About Me<BootstrapIcon size="2x" icon="arrow-down"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BubblesWrapper from "./layout/BubblesWrapper.vue";
export default {
  components: { BubblesWrapper },
};
</script>
<style lang="scss" scoped>
#homepage {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin: 0;
  position: relative;
  letter-spacing: 10px;

  .bg {
    background-color: #ffffff;
    opacity: 0.4;
    background-color: #ffffff;
    opacity: 0.7;

    overflow: hidden;
    transform: skewY(10deg);
    z-index: 0;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(120deg, #ecdedb, #e7939f);
    background: -o-linear-gradient(120deg, #ecdedb, #e7939f);
    background: -moz-linear-gradient(120deg, #ecdedb, #e7939f);
    background: linear-gradient(120deg, #ecdedb, #e7939f);

    position: absolute;
    top: 0;
  }

  .container-fluid {
    margin: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    .intro {
      line-height: 2rem;
      position: relative;
      color: white;
      p {
        color: #3e4452;
      }
      .header {
        margin-bottom: 16px;
        font-size: clamp(40px, 8vw, 80px);
        font-weight: bold;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: 1;
      }

      .header:hover {
        animation-name: rubberBand;
      }
      @keyframes rubberBand {
        from {
          transform: scale3d(1, 1, 1);
        }

        30% {
          transform: scale3d(1.25, 0.75, 1);
        }

        40% {
          transform: scale3d(0.75, 1.25, 1);
        }

        50% {
          transform: scale3d(1.15, 0.85, 1);
        }

        65% {
          transform: scale3d(0.95, 1.05, 1);
        }

        75% {
          transform: scale3d(1.05, 0.95, 1);
        }

        to {
          transform: scale3d(1, 1, 1);
        }
      }
      .aboutbtn {
        //  font-size: clamp(10px, 5vw, 30px);
        font-weight: bolder;
        border: 2px solid #cf9e94;
        position: relative;
        overflow: hidden;
        display: inline-block;
        z-index: 1;
        border-radius: 10rem;
        padding: 1rem 2.5rem;
        color: #cf9e94;
      }

      .aboutbtn:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        // background-color: #dd909a;
        background: -webkit-linear-gradient(160deg, #fdc3cc, #dd909a);
        background: -o-linear-gradient(160deg, #fdc3cc, #dd909a);
        background: -moz-linear-gradient(160deg, #fdc3cc, #dd909a);
        background: linear-gradient(160deg, #fdc3cc, #dd909a);
        transition: all 0.3s;
        border-radius: 10rem;
        z-index: -1;
      }

      .aboutbtn:hover {
        color: #fff;
        border-color: #fff;
        box-shadow: 0 10px 15px #8d8d8d;

        &:before {
          width: 100%;
        }
      }
    }
  }
}
</style>