<template>
  <div class="container py-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-success border-bottom border-start border-3 pb-2">
        Public Data-Bureau Of Statistics
      </h2>
    </div>

    <!-- Card 1 -->
    <div class="d-flex mb-4">
      <div class="me-3">
        <i class="fas fa-search fs-2 text-success"></i>
      </div>
      <div>
        <h5 class="fw-bold text-success">Search State Online Publications</h5>
        <p class="text-success">
          Search the State Database for written publications, case studies,
          keynote speeches, etc., on area of interest within Ogun State.
        </p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="d-flex mb-4">
      <div class="me-3">
        <i class="fas fa-chart-bar fs-2 text-success"></i>
      </div>
      <div>
        <h5 class="fw-bold text-success">State Statistics Annual Report</h5>
        <p class="text-success">Lookup Ogun's annual reports.</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="d-flex">
      <div class="me-3">
        <i class="fas fa-database fs-2 text-success"></i>
      </div>
      <div>
        <h5 class="fw-bold text-success">Statistical Releases</h5>
        <p class="text-success">
          Ogun provides open access to a publicly available dataset, maps, and
          statistics.
        </p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PublicView",
};
</script>
  
  <style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.border-bottom {
  border-color:  #1b8e5f !important;
  border-radius: 4px;
}
</style>
  