<template>
  <!-- <div class="container-fluid"> -->

  <div class="card col-lg-3 col-12 mb-3">
    <BootstrapIcon class="icon" size="3x" :icon="icon" />
    <p class="card-title">{{ title }}</p>
    <p>{{ about }}</p>
    <ul>
      <li v-for="(li, index) in list" :key="index">{{ li }}</li>
    </ul>
    <p class="card-title">Dev Tools:</p>
    <ul>
      <li v-for="(li, index) in toolslist" :key="index">{{ li }}</li>
    </ul>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: ["icon", "title", "about", "list", "toolslist"],
};
</script>
<style lang="scss" scoped>
.card {
  height: 100%;
  letter-spacing: 2px;
  background-color: #faeaec;
  // border-radius: 10px;
  padding: 2rem 3rem;
  // margin: 2rem;
  // border: 1px solid black;
  // margin: 10px 10px;
  // color: #db1bf6;
  // color: #19d7f8;
  box-shadow: 4px 6px 10px #8b6f69;
  display: flex;
  flex-direction: columns;
  color: #646464;
  .icon {
    margin: 0 auto;
    height: 100px;
    // color: rgb(255, 203, 243);
    // color: #6D7993;
  }
  .card-title {
    font-weight: bold;
    //  color: #19d7f8;
  }
  p {
    padding: 10px 0;
  }
  ul {
    width: 100%;
    margin: auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    // margin: auto;
    li:before {
      content: "▹";
      left: 0;
      color: #a74c63;
    }
    li {
      color: #a74c63;
      width: 50%;
      list-style: none;
      text-align: start;
    }
  }
}
</style>