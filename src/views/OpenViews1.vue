<template>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-3" v-for="(card, index) in cards" :key="index">
          <div class="card text-center" :class="'bg-' + card.color">
            <img
              :src="card.image"
              class="card-img"
              alt="Card background"
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
            image: "https://s3-alpha-sig.figma.com/img/61b0/ac73/7e3f32504973decc6d3aaafe353eba03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKJnAivRhVCn25zrBnVs85ZgXZztardWt7fjvUUN-Be42317-PoLY9~NTT9jkO~nxDMx919WLeAyj5mmCxX4uASj9yZRsyDz18ZHhaHcaNbFrVVok3NmZOO2mYW1XMwr0Ytdz~9Z3ByPbRBS1l9gwVyGIGf4SNlQoQ6aW2~HbOFjs-dowfKodVRhH45B7hVPR7RRQygbo798WWmg0KQgoBcK~B36iCeiP3msIeAmKfS5CFkPkR7mvs8bHZi8e-KylV44rWmQCsJJbTiByI44uXqA5ZtLQu0AkFWjJR~3KGT2w3uhza530QFxBz7vUCvU-4xBD18Klayhfa~KhdSA5w__", 
            icon: "fa fa-users",
            color: "success",
          },
          {
            title: "Open Contracting Executive Sector Transparency",
            image: "https://s3-alpha-sig.figma.com/img/c2e4/1bc8/414825424e87178ce09ceae99cf4cd49?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jA9gAWQ3~~GMUjRMk-H5oD~K2hC1JqajSK5pkVHDXfzz10qJyBLybj78LRvhAA99S-85PJAtl-w5TIeynnCudg40kTdtKtg-8wZfb~lan~OkOB~rDrKGbwnFitHiyljyyfOFzoAotn4mWFGvUfNWJJ5ZlZi9xOX7IL6YQ0uC3A0fuRabt0HY9yCtliR4y4Tud4VIZ~Nx6fns47ciuzzpIxdjWTbaEoyA8eG8b8BzYB6rNo2CCtCwBtGqMxkGTUO-x7p~Dn4fYdgUPApgCAn1yrV2KzMSMVuMOawTJxbkx5YSRuC-JYwBFI9RguO~V4S8nKN36mtWFTjT6iJSe3WDbg__",
            icon: "fa fa-building",
            color: "primary",
          },
          {
            title: "Tax Reporting Standards",
            image: "https://s3-alpha-sig.figma.com/img/c1e7/0f28/74aa6d33f47d0888b5bf425687009c8e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IITjXKndCxFz6RfMKHbarBoAfsTR7oxXd1zD5AvM6q1KkCMlRC4UDReznGkOFDI2ngaRTWNPoPjuwdGlYLCNxHz9yR9Gm5bkm9DZQLRLJmKo1AgDxzRYAmQno7IsAZA9nlqTlZTeszLZGAladoAMdJOILGpPAcDkzWuS-c04~oU4RZtXnhwuYdUqZGFDAnMgDRBlzkiIr8mrJ35b-RNj13TRSF6Id5zgRV4xjUSC-B2U~XnSuAyCJDlfimE8wQ5DG1rQ7Et-vMdDl19Hdf9aTEHXqFmXamh8EnL04ZBbVpbNALuYAK~qvyPQG-aP85sCPaHnyvhu-WAkUTzLfOoMuw__",
            icon: "fa fa-money-bill-wave",
            color: "warning",
          },
          {
            title: "World Bank Ease Of Doing Business Index",
            image: "https://s3-alpha-sig.figma.com/img/7ad2/8701/d185ec332291ab366e6c3f27d6f1925b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgCNjwXy1HmY5mDF3L4JD7s3TKxkvWkqjWLYfe00tQW6ixXwSetE2KysDNbAvQdZAFj93WLU6ZZi3okV8saP0a-aZS07Xq1dIP0NvPEVEmVU3NDnIEyLGJ1PF-RNrlmaT68pBuxUKZdbWux5ROzOzauzMcwxMxMzdKcv8XEy5Z3V447YhazedpNLa6yNvWR~0gk3n6tyAODwhxcmf71tXoyU5HnxCsJuWn6rCVb4qNolrxEFd0KJd7lHfaWTZ21Pdm7bFlko1V5yU-4DheCg2AyEgjxvkbWzd32e4wiOV7wrvWDEND2~~kO0JNzd9degYvh6GnSsnxze-V~1bJuXNQ__",
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
  