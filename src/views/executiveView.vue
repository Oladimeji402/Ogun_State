<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between mb-3">
     <h3 class="text-success">Meet Our Executives</h3>
     <button class="btn btn-md border border-3 border-success text-success">View more</button>
    </div>
    <div class="row">
      <div class="col-md-4 mt-3">
        <div class="card">
          <img
            src="/src/assets/images/Dapo.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-overlay bg-light">
            <h3 class="card-text">Dapo Abiodun</h3>
            <p class="text-success">State Governor</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mt-3">
        <div class="card">
          <img
            src="/src/assets/images/arigbabu.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-overlay bg-light">
            <h3 class="card-text">Noimot Salako</h3>
            <p class="text-success">Deputy Governor</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mt-3">
        <div class="card">
          <img
            src="/src/assets/images/Frame 15 (2).png"
            class="card-img-top img-fluid"
            alt="..."
            style="object-fit: cover;"
          />
          <div class="card-overlay bg-light">
            <h3 class="card-text">Prof. Arigbabu</h3>
            <p class="text-success">Com. Of Education</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "MeetExecutives",
};
</script>
  
  <style scoped>
.card {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.card-img-top {
  height: 350px;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: fit-content;
  padding: 10px;
}

.card-text {
  margin: 0;
}

.text-success {
  color: #28a745 !important;
}
</style>
  