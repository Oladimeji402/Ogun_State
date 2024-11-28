<template>
    <div class="container mt-5 p-4">
      <h3 class="text-success">The State Key Sectors</h3>
      <div class="row mt-5">
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/Agriculture.png" alt="" class="img" />
            <div class="overlay">
              <p>Agriculture</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/industry.png" alt="" class="img img-fluid" />
            <div class="overlay">
              <p>Manufacturing <br>and Industry</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/Estate.png" alt="" class="img img-fluid" />
            <div class="overlay">
              <p>Real Estate</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/school.png" alt="" class="img img-fluid" />
            <div class="overlay">
              <p>Education</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/Logistics.png" alt="" class="img img-fluid" />
            <div class="overlay">
              <p>Logistics</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <div class="img-container">
            <img src="../assets/images/Crane.png" alt="" class="img img-fluid" />
            <div class="overlay">
              <p>Solid Minerals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "KeySectors",
  };
  </script>
  
  <style scoped>
  .img-container {
    position: relative;
    width: 100%;
    height:  100%;
  }
  
  .img {
    width: 100%;
    display: block;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 128, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    transition: opacity 0.3s ease;
  }
  </style>
  