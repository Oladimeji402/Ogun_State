<template>
  <div class="div">
    <div class="containers">
      <div class="container-fluid ms-md-5 text-light height">
        <h1 class="h1">About</h1>
        <h1 class="h1">OGUN STATE</h1>
        <p class="p">Discover the Heart of Nigeria’s Growth and Development</p>
        <div class="d-flex justify-content-center">
          <button class="btn btn-light px-3 text-success border border-success">
            Explore More
          </button>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h3 class="text-center">Welcome to Ogun State</h3>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 d-none d-md-block d-lg-block">
            <img src="../assets/images/home.png" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <p class="po">
              Ogun State, located in southwestern Nigeria, is known as the
              Gateway State due to its strategic proximity to Lagos, the
              country's commercial capital, and other neighboring states.
              Established in 1976, it has become a thriving economic hub, with a
              strong industrial base housing numerous multinational companies
              and factories.
            </p>
            <img src="../assets/images/home.png" alt="" class="d-block d-md-none d-lg-none gin" />
            <p class="po">
              The state is rich in cultural heritage and history, being the
              birthplace of notable figures in Nigeria’s political, literary,
              and social landscape. Key attractions include Olumo Rock, a
              historic site symbolizing the resilience of the Egba people, and
              the Adire fabric markets, showcasing indigenous textile
              craftsmanship. <br class="d-none d-md-block d-lg-block"> Ogun's economy is diverse, driven by manufacturing,
              agriculture, and trade. Its educational institutions, such as
              Covenant University and Federal University of Agriculture,
              contribute significantly to Nigeria's academic landscape. With a
              population that reflects its vibrant culture and traditions, Ogun
              State remains an important player in Nigeria's growth story
            </p>
          </div>
        </div>
        <p class="text-center mt-5">A vibrant state known for its rich history, industrial strength, and cultural diversity</p>
      </div>
    </div>
  </div>
  <section>
    <Heritage />
  </section>
  <section>
    <GovernorSpeech />
  </section>
  <section>
    <Statistics />
  </section>
</template>


<script>
import Heritage from "../views/Heritage.vue"
import GovernorSpeech from "../views/GovernorSpeechViews.vue"
import Statistics from "./StatisticsViews.vue"
export default {
  name: "about",

  components: {
    Heritage,
    GovernorSpeech,
    Statistics,
  }
};
</script>

<style scoped>
.div {
  overflow-x: hidden;
  margin-top: -70px;
}
.height {
  padding-top: 22%;
}
.h1 {
  font-size: 48px;
  font-weight: 700;
}
.p {
  font-size: 24px;
  font-weight: 600;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  font-style: italic;
}
.containers {
  background: url(../assets/images/about.png);
  background-size: 100% 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

h3 {
  font-size: 40px;
  font-weight: 700;
  font-family: Inter, sans-serif;
}
.img-fluid {
  height: 500px;
  object-fit: cover;
}
.po{
  line-height: 29.96px;
}
.gin {
  height: 245px;
  width: 100%;
  object-fit: cover;
}
@media (max-width: 900px) {
  .containers {
    height: 50vh;
    background-size: cover;
    object-fit: cover;
  }
}
@media (max-width: 768px) {
  .h1 {
    font-size: 40px;
    font-weight: 700;
  }
  .p {
    font-size: 17px;
    font-weight: 400;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    font-style: italic;
  }
  .h3{
    font-size: 18px;
  }
}
 
</style>