<template>
  <section class="home p-5">
    <div class="container">
      <div class="col-lg-6 text-light mt">
        <h1>The Gateway State</h1>
        <p>
          Ogun State was created on the 3rd of February, 1976. It was carved out
          of the old Western State of Nigeria and named after the Ogun River
          which runs across it from North to South.
        </p>

        <button
          class="btn btn-md btn-light text-dark animated-button"
          @click="animateButton"
        >
          Ogun-State MDAs
        </button>
      </div>
    </div>
  </section>

  <section>
    <MeetExecutives />
  </section>

  <section>
    <KeySectorView />
  </section>

  <!-- <section>
    <OgunViews />
  </section> -->

  <!-- <section>
    <DiscoverView />
  </section> -->

  <section>
    <InvestView />
  </section>

  <section>
    <contactView />
  </section>

  <section>
    <EventView />
  </section>

</template>

<script>
import MeetExecutives from "./executiveView.vue";
import KeySectorView from "./KeySectorView.vue";
// import OgunViews from "./OgunViews.vue";
// import DiscoverView from "./DiscoverView.vue";
import InvestView from "./InvestView.vue";
import EventView from "./EventView.vue";
export default {
  name: "Home",
  components: {
    MeetExecutives,
    KeySectorView,
    // OgunViews,
    // DiscoverView,
    InvestView,
    EventView,

  },
  methods: {
    animateButton(event) {
      const button = event.target;
      button.classList.remove("clicked"); // Reset animation
      void button.offsetWidth; // Force DOM reflow to restart the animation
      button.classList.add("clicked"); // Add the animation class
    },
  },
};
</script>

<style scoped>
section{
  overflow-x: hidden;
}
.home {
  background: url(../assets/images/home.png);
  background-size: cover;
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
@media (min-width: 1024px) {
  .mt { 
     margin-top: 120px;
  }
  .home {
    background: url(../assets/images/home.png);
    background-size: cover;
    width: 100%;
    height: 80vh;
    object-fit: cover;
    margin-top: -89px;
  }
}

@media (width < 760px) {
  .home {
    height: 50vh;
  }
}
@media screen and (min-width: 600px) and (max-width: 900px){
  .home {
    height: 50vh;
  }
}

.animated-button {
  position: relative;
  overflow: hidden;
}

.animated-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 0;
  transition: none;
  transform: translateX(0);
}

.animated-button.clicked::before {
  animation: slide-in 1s forwards;
}

.animated-button span {
  position: relative;
  z-index: 1;
}

@keyframes slide-in {
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
}
</style>
