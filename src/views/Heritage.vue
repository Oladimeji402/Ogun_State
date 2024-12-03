<template>
  <section class="mt-3">
    <h3 class="text-center">Our History and Heritage</h3>
    <p class="text-center p">Historical Milestones</p>
    <div class="container">
      <div class="row">
        <div class="col-md-6 image-section d-block d-md-none">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            class="img-fluids rounded"
          />
          </div>
        <div class="col-md-6 text-section">
          <h3 class="fs">Creation Of Ogun State</h3>
          <p class="line mt-4">
            Ogun State was carved out of the old Western State on February 3,
            1976, during Nigeria's military rule under General Murtala Mohammed.
            It was named after the Ogun River, which runs through the state
          </p>
        </div>

        <div class="col-md-6 image-section d-none d-md-block">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            class="img-fluid rounded"
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 d-block d-md-none">
          <img src="../assets/images/about2.png" alt="" class="img-fluids" />
        </div>
        <div class="col-md-6 d-none d-md-block">
          <img src="../assets/images/about2.png" alt="" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h3 class="fs">Role in Nigeria's Independence</h3>
          <p class="line mt-4">
            Ogun State played a vital role in Nigeria’s history as the home of
            prominent nationalist leaders like Chief Obafemi Awolowo and the
            first Nigerian President, Chief Olusegun Obasanjo
          </p>
        </div>
        <!-- <div class="col-md-6 d-block d-md-none">
          <img src="../assets/images/about2.png" alt="" class="img-fluids" />
        </div> -->
      </div>
      <div class="row mt-5">
        <div class="col-md-6 d-block d-md-none">
          <img src="../assets/images/about3.png" alt="" class="img-fluids" />
        </div>
        <div class="col-md-6">
          <h3 class="fs">Cultural Evolution</h3>
          <p class="line mt-4">
            Ogun State hosts diverse sub-ethnic groups—Egba, Ijebu, Remo, Yewa,
            and Awori—each with rich cultural traditions. It’s also famed as the
            birthplace of the globally celebrated Adire fabric
          </p>
        </div>
        <div class="col-md-6 d-none d-md-block">
          <img src="../assets/images/about3.png" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Heritage",
};
</script>
  
  <style scoped>
section {
  background-color: #fafff2;
}

.h1 {
  font-weight: 700;
  font-size: 40px;
}

.p {
  font-weight: 600;
  font-size: 20px;
}

.fs {
  font-size: 24px;
  font-weight: 600;
}

.line {
  line-height: 32.68px;
  font-size: 23px;
}

.img-fluid {
  width: 70%;
  object-fit: contain;
}

.img-fluids{
    width: 100%;
    object-fit: cover;
}
.text-section,
.image-section {
  padding: 15px;
}
</style>
  