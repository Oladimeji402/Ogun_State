<template>
    <section class="position-relative mt-4">
      <img src="../assets/images/Event.png" alt="">
      <div class="overlay-content d-flex flex-column justify-content-between">
        <h2 class="text-light text-center">Event and Project</h2>
        <button class="btn btn-lg btn-light rounded-pill text-success border-0">View Gallery</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EventView',
  }
  </script>
  
  <style scoped>
  img {
    width: 100%;
    object-fit: cover;
  }
  
  .position-relative {
    position: relative;
  }
  
  .overlay-content {
    position: absolute;
    inset: 0; /* Set top, right, bottom, and left to 0 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px; /* Adjust padding as needed for spacing */
  }
  
  .overlay-content h2 {
    margin: 0;
  }
  
  .overlay-content button {
    margin: 0;
  }
  </style>
  