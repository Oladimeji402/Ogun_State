<template>
  <div class="invest-background p-5">
    <div class="container text-light">
      <h1 class="text-center h1"><span class="mark">|</span>Invest in Ogun-State</h1>
      <p class="text-center fs-md-2">
        .....Agriculture, Manufacturing, Innovation and more
      </p>
      <p class="text-center">
        <b>
          Ogun State, Nigeria's top industrial hub near Lagos, is perfect for
          manufacturing, agriculture,<br> and logistics investments. With strong
          infrastructure and industrial parks, it provides a thriving <br>
          environment for business and innovation
        </b>
      </p> 
      <div class="justify-content-center d-flex">
        <button class="btn btn-md btn-light text-success p-2">
          Invest in Ogun-State
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InvestView",
};
</script>
<style scoped>
.mark{
  /* font-weight: 700; */
  background-color: transparent;
  color: #12C112;
}
.h1 {
  font-size: 80px;
  font-weight: 800;
}
@media (max-width:768px) {
  .h1 {
  font-size: 30px;
  font-weight: 100;
}
}
.invest-background {
  position: relative;
  background-image: url("../assets/images/Invest.png");
  background-size: cover;
  background-position: center;
  /* height: 100vh;  */
}
.invest-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background-color: #174E2C;
  opacity: 0.6;
}
@media (max-width: 768px) {
  .invest-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #174E2C;
  opacity: 0.6;
}
}
.container {
  position: relative;
  z-index: 1;
}
</style>