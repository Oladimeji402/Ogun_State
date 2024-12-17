<template>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-3 mt-3" v-for="(card, index) in cards" :key="index">
          <div class="card text-center" :class="'bg-' + card.color">
            <img
              :src="card.image"
              class="card-img"
              alt="img"
              style="opacity: 0.8;"
            />
            <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center text-white">
              <i :class="card.icon" class="mb-3"></i>
              <h5 class="card-title">{{ card.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OpenViews1",
    data() {
      return {
        cards: [
          {
            title: "Citizen Participation In The Budget Cycle",
            image: "../assets/images/open1.png", 
            icon: "fa fa-users",
            color: "success",
          },
          {
            title: "Open Contracting Executive Sector Transparency",
            image: "../assets/images/open2.png",
            icon: "fa fa-building",
            color: "primary",
          },
          {
            title: "Tax Reporting Standards",
            image: "../assets/images/open3.png",
            icon: "fa fa-money-bill-wave",
            color: "warning",
          },
          {
            title: "World Bank Ease Of Doing Business Index",
            image: "../assets/images/open4.png",
            icon: "fa fa-chart-line",
            color: "info",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .card {
    border: none;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease;
    aspect-ratio: 9/6;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img-overlay {
    background: linear-gradient(180deg, #247F54, #183B2A);
    opacity: 0.6; 
    border-radius: 10px;
  }
  
  .card-title {
    font-size: 1rem;
    font-weight: 600;
  }
  </style>
  