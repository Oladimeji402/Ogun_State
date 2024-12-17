<template>
    <div class="procurement-container position-relative mt-5">
      <!-- Background Image -->
      <div class="overlay"></div>
      <div class="content text-center position-absolute top-50 start-50 translate-middle">
        <!-- Header -->
        <h2 class="fw-bold text-success">Procurement</h2>
        <!-- Icon -->
        <div class="icon-container mx-auto mb-2">
          <i class="fa fa-handshake"></i>
        </div>
        <!-- Subheading -->
        <h5 class="fw-bold text-success mb-1">Bureau Of Public Procurement</h5>
        <!-- Description -->
        <p class="text-dark mb-0">Contracts, Tender, Public Procurement, And Etc.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "procurementView",
  };
  </script>
  
  <style scoped>
  .procurement-container {
    height: 400px; /* Adjust height */
    background: url('../assets/images/Procument.png') no-repeat center center/cover;
    position: relative;
    color: #ffffff;
    border: 5px solid #e7e7e7;
    border-radius: 8px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
    margin-top: 3%;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent white overlay */
  }
  
  .content {
    z-index: 10; /* Bring content above overlay */
  }
  
  .icon-container {
    background-color: #198754; /* Bootstrap success green */
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  
  .icon-container i {
    color: #fff;
    font-size: 1.5rem; /* Icon size */
  }
  
  h2,
  h5 {
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
  }
  </style>
  