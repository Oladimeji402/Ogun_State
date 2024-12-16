<template>
    <div class="container-fluid">
        <h3 class="text-success text-center mt-md-5">Open Government</h3>
        <p class="text-center font">
          Ogun State Government actively supports the Open Government Partnership,
          uniting leaders, civil society, and citizens <br> to foster accountable and
          inclusive governance. Aligned with Nigeria's 2019-2021 action plan, the
          state is dedicated to <br>implementing the following initiative:
        </p>

    </div>
    <section>
      <OpenViews1 />
    </section>

    <section>
      <p class="text-center font">The push by the Ogun State Government to actively participate in the above commitments will ensure that <br> the 
        State Government is more collaborative with the citizens, and the citizenry are also adequately informed.</p>
    </section>

    <section>
      <BillsAndLaws />
    </section>
</template>

<script>
import OpenViews1 from "./OpenViews1.vue";
import BillsAndLaws from "./BillsAndLawsView.vue";
export default {
  name: "openView",
  components: {
    OpenViews1,
    BillsAndLaws,
  }, 
};
</script>

<style>
  .font {
    font-size: 20px;
  }
</style>