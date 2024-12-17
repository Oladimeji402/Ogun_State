<template>
  <div class="container mt-4">
    <h5 class="text-center fw-bold">Ogun State Government Emergency Info</h5>
    <p class="text-center">These are our network location around the state.</p>
  </div>

  <div>
    <contactCards />
  </div>
</template>

<script>
import ContactCards from "../views/EmergencyView.vue"
export default {
    name: 'EmergencyView',
    components: {
        ContactCards,
    }
}
</script>

<style>

</style>