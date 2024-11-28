<template>
    <div class="section">
      <div class="container">
        <h3 class="text-center mb-4">Ogun-State in Number</h3>
        <div class="row gy-4">
          <div class="col-12 col-md-4">
            <div class="stat-card no-bg1">
              <h4>6,379,500</h4>
              <p>
                Ogun State's growing population, driven by its location, industries,
                and education, presents challenges but also opportunities for
                development and investment.
              </p>
              <div class="d-flex justify-content-center gap-2">
                <img class="ogun" src="../assets/images/Ogun1.png" alt="">
                <img class="ogun" src="../assets/images/Ogun2.png" alt="">
                <img class="ogun" src="../assets/images/Ogun3.png" alt="">
                <img class="ogun" src="../assets/images/Ogun4.png" alt="">
                <img class="ogun" src="../assets/images/Ogun5.png" alt="">
                <img class="ogun" src="../assets/images/Ogun6.png" alt="">
              </div>
            </div>
          </div>
  
          <div class="col-12 col-md-4">
            <div class="stat-card bg-green tall-card">
              <h4>$12.46billion</h4>
              <p>
                The state's diverse economy and strategic initiatives, focusing on
                its role as a contributor to Nigeria's overall economic landscape.
                Include key sectors driving growth and mention the substantial
                allocations in infrastructure, education, and healthcare to
                underline the state’s development efforts.
              </p>
            </div>
          </div>
  
          <div class="col-12 col-md-4">
            <div class="stat-card no-bg2">
              <h4>16,981km</h4>
              <p>
                Ogun State, the 24th largest in Nigeria, is known as the 'Gateway to
                Nigeria.' It plays a key role as an industrial and agricultural hub
                with diverse terrain supporting both development and natural
                resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OgunViews",
  };
  </script>
  
  <style scoped>
  .section {
    background-image: url("../assets/images/Ogun.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    padding: 40px 0;
    position: relative;
  }
  .section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 2; 
  }
  
  .stat-card {
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: white;
    border: 1px solid white;
  }
  
  .no-bg1 {
    background: none;
    box-shadow: none;
    color: white;
    margin-top: 100px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8); 
  }
  
  
  .bg-green {
    background: rgba(5, 91, 60, 0.8);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid white;
  }
  
  .tall-card {
    padding: 40px;
    height: 100%;
  }
  
  .ogun {
    border-radius: 50%;
    object-fit: cover;
    width: 59px;
    height: 60px;
    aspect-ratio: 4/5;
  }
  
  .no-bg2 {
    background: none;
    box-shadow: none;
    color: white;
    margin-top: 130px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8); 
  }
  </style>
  