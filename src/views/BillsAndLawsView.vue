<template>
  <div class="bills-and-laws-section text-white py-5">
    <div class="overlay"></div>
    <div class="container">
      <h1 class="text-center mb-4">Bills & Laws</h1>
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <div class="icon mb-3">
                <i class="fas fa-search fs-1 text-success"></i>
              </div>
              <h5 class="card-title">Search Legislation</h5>
              <p class="card-text">Read Up On Current Laws And Proposed Bills.</p>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <div class="icon mb-3">
                <i class="fas fa-balance-scale fs-1 text-success"></i>
              </div>
              <h5 class="card-title">Ogun Constitution</h5>
              <p class="card-text">
                The Ogun State Constitution Consists Of Laws That Are Codified.
              </p>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="col-md-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <div class="icon mb-3">
                <i class="fas fa-file-contract fs-1 text-success"></i>
              </div>
              <h5 class="card-title">Approved Treaties</h5>
              <p class="card-text">
                Here Are Up To Date Enquiries On Agreements, Pacts, Major
                Treaties...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillsAndLaws",
};
</script>

<style scoped>
/* Background Image */
.bills-and-laws-section {
  background: url("../assets/images/open5.png") no-repeat center center;
  background-size: 100% 100%;
  color: white;
}

/* Styling for cards */
.card {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 8px;
}

/* Icon style */
.icon {
  background-color: rgba(0, 128, 0, 0.1);
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  display: inline-block;
}
</style>
