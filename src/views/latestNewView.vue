<template>
    <div class="container">
      <h3>Latest News</h3>
  
      <div class="container my-5">
        <!-- Card Grid -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(card, index) in currentCards" :key="index">
            <div class="card h-100" style="width: 18rem">
              <div class="position-relative">
                <img
                  :src="card.image"
                  class="card-img-top"
                  :alt="card.title"
                />
                <button
                  class="btn btn-danger rounded-pill btn-md position-absolute top-50 start-50 translate-middle"
                >
                  Latest news
                </button>
              </div>
              <div class="card-body">
                <div class="card-text">
                  <p>{{ card.date }}</p>
                  <p>
                    <strong>{{ card.title }}</strong>
                  </p>
                  <p>{{ card.description }}</p>
                  <a href="#" class="btn btn-success">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Pagination -->
        <nav aria-label="Page navigation" class="mt-4">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="prevPage">Previous</button>
            </li>
            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: page === currentPage }"
            >
              <button class="page-link" @click="goToPage(page)">
                {{ page }}
              </button>
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <button class="page-link" @click="nextPage">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Latest",
  
    data() {
      return {
        cards: [
          {
            image: "/src/assets/images/news2.png",
            date: "November 17, 2024",
            title: "Ogun LG Poll: APC wins all 20 LGAs, 236 councillorship seats",
            description:
              "The Ogun State Independent Electoral Commission (OGSIEC) has declared the All Progressives Congress (APC) as the winner...",
          },
          {
            image: "/src/assets/images/news3.png",
            date: "November 17, 2024",
            title: "Card Title 2",
            description: "Description for card 2...",
          },
          {
            image: "/src/assets/images/news4.png",
            date: "November 17, 2024",
            title: "Card Title 3",
            description: "Description for card 3...",
          },
          {
            image: "/src/assets/images/news5.png",
            date: "November 17, 2024",
            title: "Card Title 4",
            description: "Description for card 4...",
          },
          {
            image: "/src/assets/images/news6.png",
            date: "November 17, 2024",
            title: "Card Title 5",
            description: "Description for card 5...",
          },
          {
            image: "/src/assets/images/news7.png",
            date: "November 17, 2024",
            title: "Card Title 6",
            description: "Description for card 6...",
          },
          {
            image: "/src/assets/images/news8.png",
            date: "November 17, 2024",
            title: "Card Title 7",
            description: "Description for card 7...",
          },
          {
            image: "/src/assets/images/news9.png",
            date: "November 17, 2024",
            title: "Card Title 8",
            description: "Description for card 8...",
          },
          {
            image: "/src/assets/images/news10.png",
            date: "November 17, 2024",
            title: "Card Title 9",
            description: "Description for card 9...",
          },
        ],
        currentPage: 1, // Tracks the current page
        cardsPerPage: 3, // Number of cards displayed per page
      };
    },
  
    computed: {
      totalPages() {
        return Math.ceil(this.cards.length / this.cardsPerPage);
      },
      currentCards() {
        const startIndex = (this.currentPage - 1) * this.cardsPerPage;
        const endIndex = startIndex + this.cardsPerPage;
        return this.cards.slice(startIndex, endIndex);
      },
    },
  
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card img {
    height: 200px;
    object-fit: cover;
  }
  </style>
  