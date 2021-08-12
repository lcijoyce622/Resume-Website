<template>
  <div class="bubble-wrapper">
    <ul class="bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.bubble-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bubbles {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  opacity: 0.4;
  width: 30px;
  height: 30px;
  background-color: #efa0e9;
  border-radius: 100%;
  bottom: -100px;
  animation: bubbles 3s infinite;
  transition-timing-function:linear;

  &:first-child {
    left: 10%;
    background-color: #ff9736;
  }

  &:nth-child(2) {
    left: 20%;
    width: 20px;
    height: 20px;
    animation-duration: 15s;
    background-color: #e9e19e;
  }
  &:nth-child(3) {
    left: 25%;
    animation-delay: 1s;
    background-color: #ff796f;
  }
  &:nth-child(4) {
    left: 40%;
    width: 20px;
    height: 20px;
        animation-delay: 10s;
    animation-duration: 5s;
    background-color: #fac7ff;
  }
  &:nth-child(5) {
       left: 80%;
      width: 20px;
    height: 20px;
    left: 70%;
      animation-delay: 3s;

    animation-duration: 5s;
        background-color: #d872be;

  }
  &:nth-child(6) {
    left: 80%;
    width: 40px;
    height: 40px;
    animation-delay: 4s;
    background-color: #d872be;
  }
  &:nth-child(7) {
    left: 32%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    background-color: #fcd9f7;
  }
  &:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 10s;
    background-color: rgb(177, 125, 159);
  }
  &:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 6s;
    background-color: #fce092;
  }
  &:nth-child(10) {
    left: 90%;
    width: 40px;
    height: 40px;
    animation-delay: 0.1s;
    background-color: #d18a7d;
  }
}

@keyframes bubbles {
  0% {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-1500px);
  }
}
</style>