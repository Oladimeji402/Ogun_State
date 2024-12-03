<template>
  <div class="statistics text-center py-4 text-white mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="stat in stats" :key="stat.id">
          <h2>{{ stat.value }}</h2>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Statistics",
  data() {
    return {
      stats: [
        { id: 1, value: "6,379,500", label: "Growing Population" },
        { id: 2, value: "16,981km", label: "Landmass" },
        { id: 3, value: "$12.46billion", label: "GDP" },
        { id: 4, value: "1976", label: "Year of Foundation" },
      ],
    };
  },
};
</script>
  
  <style scoped>
.statistics {
  background: linear-gradient(#174a2fb2, #174a2fb2),
    url("../assets/images/speech2.png");
  background-size: cover;
  background-position: center;
}
h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
p {
  font-size: 1rem;
  margin: 0;
}
</style>
  