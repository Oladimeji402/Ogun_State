<template>
  <div class="container my-5">
    <div class="row g-4">
      <!-- Top Row -->
      <div class="col-md-4" v-for="(card, index) in topRowCards" :key="index">
        <div class="card h-100 shadow-sm border-0 p-4">
          <div class="card-header bg-success text-white fw-bold text-center w-fit-content">
            {{ card.title }}
          </div>
          <div class="card-body">
            <p class="mb-1">{{ card.description }}</p>
            <p class="mb-1">{{ card.email }}</p>
            <p class="mb-0 fw-bold">{{ card.contact }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="col-md-4 mb-md-4" v-for="(card, index) in bottomRowCards" :key="index">
        <div class="card h-100 shadow-sm border-0 p-4">
          <div class="card-header bg-success text-white fw-bold text-center w-fit-content">
            {{ card.title }}
          </div>
          <div class="card-body">
            <div v-for="(info, idx) in card.contacts" :key="idx">
              <p class="mb-1">{{ info.location }}</p>
              <p class="mb-0 fw-bold">{{ info.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCards",
  data() {
    return {
      // Top Row Cards
      topRowCards: [
        {
          title: "Police Department",
          description: "Ogun State Police Control Room",
          email: "emergency@ogunstate.gov.ng",
          contact: "Room: +2347042456789",
        },
        {
          title: "Medical Center",
          description: "Ogun State University Teaching Hospital",
          email: "info@osuth.ng",
          contact: "Room: +2347042456789",
        },
        {
          title: "State Government",
          description: "Ogun state, Nigeria",
          email: "info@ogunstate.gov.ng",
          contact: "",
        },
      ],

      // Bottom Row Cards
      bottomRowCards: [
        {
          title: "FIRE SERVICE",
          contacts: [
            { location: "ONIKOKO", phone: "08035692904" },
            { location: "SAGAMU STATION", phone: "08065226846" },
            { location: "IJEMO STATION", phone: "08035596945" },
            { location: "OTA STATION", phone: "08032262208" },
          ],
        },
        {
          title: "PPRO",
          contacts: [{ location: "", phone: "09159578888" }],
        },
        {
          title: "OTHER CONTROL ROOM",
          contacts: [
            { location: "", phone: "09062837609" },
            { location: "", phone: "09120141706" },
            { location: "", phone: "09151027369" },
            { location: "", phone: "07084972994" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
}
.w-fit-content{
  width: 259px;
}
.card-header {
  font-size: 1rem;
  text-transform: uppercase;
}
.card-body p {
  font-size: 0.9rem;
}
</style>
