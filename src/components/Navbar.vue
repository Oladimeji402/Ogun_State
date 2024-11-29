<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid mx-md-5 bg-light">
        <!-- Logo Section -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img class="img me-2" src="/src/assets/images/logo.png" alt="" /><span class="font"> Ogun
          State <br> Government </span>
        </a>
        <li class="nav-item d-block d-md-none d-lg-none">
              <div class="nav-link">
                <!-- Search Icon -->
                <button
                  @click="toggleSearchInput"
                  class="btn btn-link text-dark"
                >
                  <i class="fas fa-search"></i>
                </button>

                <!-- Conditional Rendering of Search Input -->
                <transition name="fade">
                  <input
                    v-if="showSearchInput"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    v-model="searchQuery"
                  />
                </transition>
              </div>
            </li>
        <!-- Navbar Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar Content -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Centered Links -->
          <ul class="navbar-nav mx-auto d-flex align-items-center">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page">
                Home
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="serviceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </a>
              <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                <li>
                  <RouterLink to="/service1"  class="dropdown-item"
                    >Service 1</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/service2" class="dropdown-item"
                    >Service 2</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/service3" class="dropdown-item"
                    >Service 3</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item d-none d-lg-block d-md-block">
              <RouterLink to="/" class="nav-link">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/newsPage" class="nav-link">News</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
            </li>
            <li class="nav-item d-none d-md-block d-lg-block">
              <div class="nav-link">
                <!-- Search Icon -->
                <button
                  @click="toggleSearchInput"
                  class="btn btn-link text-dark"
                >
                  <i class="fas fa-search"></i>
                </button>

                <!-- Conditional Rendering of Search Input -->
                <transition name="fade">
                  <input
                    v-if="showSearchInput"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    v-model="searchQuery"
                  />
                </transition>
              </div>
            </li>
          </ul>
          <div class="d-lg-none w-100 text-center my-2">
            <button class="btn btn-md btn-success text">Quick link</button>
          </div>
          <div class="d-none d-lg-block">
            <button class="btn btn-md btn-success text">Quick link</button>
          </div>
        </div>
      </div>
    </nav>
     </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showSearchInput: false, // To control the visibility of the search input
      searchQuery: "", // Bind the search query to the input field
    };
  },
  methods: {
    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput; // Toggle the visibility of the search input
    },
  },
};
</script>

<style scoped>
.font {
  font-size: 16px;
}
.img {
  width: 50px;
}
input[type="text"] {
  width: 0;
  transition: width 0.3s ease-in-out;
  display: inline-block;
  vertical-align: middle;
}

input[type="text"]:focus {
  width: 250px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.navbar{
  margin-top: -15px;
}
</style>
