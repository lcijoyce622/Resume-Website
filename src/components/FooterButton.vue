<template>
  <footer>
    <ul>
      <li class="github">
        <a href="https://github.com/lcijoyce622" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#646464"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>GitHub</title>
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="mailto:lcijoyce622@gmail.com" target="_blank">
          <BootstrapIcon class="mail" icon="envelope" />
        </a>
      </li>
      <li>
        <a href="https://lcijoyce622.medium.com/" target="_blank">
          <svg viewBox="0 0 1043.63 592.71" fill="#646464">
            <title>Medium</title>
            <path
              d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
    <p>Copyright © 2021 Chia-yi Lin.</p>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
footer {
  z-index: 20;
  background-color: initial;
  // padding-bottom: 1rem;
  ul {
    position: fixed;
    bottom: 0;
    right: 5%;
    width: 30px;
    // height: 80px;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 1rem 0;
      
      .mail {
        color: #646464;
        width: 100%;
        height: 50px;
        padding: 2px;
        margin: 0;
      }
    }
  }
  ul:after {
    content: "";
    display: block;
    width: 1px;
    height: 80px;
    margin: 15px auto 0;
    background-color: #646464;
  }
  p{
    padding-bottom: 1rem;
  }
  @media (max-width: 991.98px) {
    ul {
      position: relative;
      display: grid;
      grid-auto-flow: column;
      bottom: unset;
      right: unset;
      width: 100%;
      margin: auto;
      li {
          margin: 0;
        svg {
          height: 100%;
          width: 3rem;
        }
        .mail {
          height: 100%;
          width: 3rem;
        }
      }
    }
    ul:after {
      display: none;
    }
  }
  p{
      margin: 0;
  }
}
</style>