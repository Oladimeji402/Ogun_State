<template>
  <h2 class="text-success text-center fw-bold">News</h2>
  <p class="text-center fw-bold">
    Explore recent developments, News, in Ogun State
  </p>
  <hr style="border: 2px solid #d9d9d9" />
  <div class="container">
    <div class="d-flex justify-content-between">
      <h3>Updates</h3>
      <div class="dropdown">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container-fluid  mt-3">
  <div class="news">
     <div class="container">
    <div class="row">
      <div class="text-light">
        <p class="font">March 29, 2023</p>
        <h3 class="font">
          Replacing Stomach Infrastructure with Project <br> Infrastructure, Sujimoto
          Congratulates Prince Dapo <br> Abiodun, Ogun State Governor Re-elect
        </h3>
        <p class="font">
          The journey to Prince Dapo Abiodun’s re-election as Governor of Ogun
          State was a tumultuous one, marked by internal and external political
          strife. ‘However, despite the challenges, I was eager to make the trip
          down to Ogun State to congratulate my egbon and mentor in person.’
        </p>
      </div>
    </div>
  </div>
  </div>
  <div class="d-flex justify-content-center mt-4">
  <button class="btn btn-md btn-outline-success rounded-pill text-dark border-3">Read more</button>
  </div>
  </div>

  <hr style="border: 2px solid #d9d9d9" />

  <!-- <section>
    <latest />
  </section> -->

  <section>
    <NewsCardLayout />
  </section>
</template>

<script>
// import latest from "../views/latestNewView.vue"
import NewsCardLayout from "../views/news.vue"
export default {
  name: "NewsPage",
  components: {
    // latest,
    NewsCardLayout,
  }
};
</script>

<style scoped>
.news {
  background: linear-gradient(-90deg, #0000004D 30%, #00640099 60%), url(../assets/images/New1.png) no-repeat center center/cover;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
}

@media (max-width: 767px) {
  .font {
    font-size: 0.5rem;
    /* font-weight: 100; */
  }
}
</style>