<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/logo.svg" alt="" width="40"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          collapse
          navbar-collapse
          justify-content-lg-end justify-content-center
        "
        id="navbarNavAltMarkup"
      >
        <div @click="closeNav" class="navbar-nav">
          <a class="nav-link tab" aria-current="page" href="#aboutme">About</a>
          <a class="nav-link tab" href="#experience">Experiences</a>
          <a class="nav-link tab" href="#skills">Skills</a>
          <a class="nav-link tab" href="#portfolio">Portfolio</a>
          <a class="nav-link tab" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    closeNav() {
      var navMain = document.getElementById("navbarNavAltMarkup");
      navMain.classList.remove("show");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: space-between;
  letter-spacing: 4px;
  background: #da9f9fad;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  -moz-backdrop-filter: blur(2px);
  z-index: 99;
  a {
    color: aliceblue !important;
    margin: 0 20px;
  }

  .tab {
    position: relative;
    padding:10px 20px;
  }
  .tab:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 10%;
    opacity: 0.8;
    background-color: #a04b7b;
    transition: all 0.3s;
    border-radius: 50%;
    z-index: -1;
  }

  .tab:hover {
    color: #a04b7b !important;

    &:before {
      width: 100%;
    }
  }
}
</style>