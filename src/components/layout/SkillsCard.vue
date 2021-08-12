<template>
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
  padding: 2rem 3rem;

  box-shadow: 4px 6px 10px #8b6f69;
  display: flex;
  flex-direction: columns;
  color: #646464;
  .icon {
    margin: 0 auto;
    height: 100px;
  }
  .card-title {
    font-weight: bold;
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