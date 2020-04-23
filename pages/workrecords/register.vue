<template>
  <div class="section">
    <div class="container">
      <div class="field is-size-3 has-text-centered">{{time | moment("MM/DD dddd")}}</div>
      <div class="field is-size-1 has-text-centered">{{time | moment("hh:mm:ss")}}</div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-rounded is-large is-primary" @click="startWork">Start of Work</button>
        </div>
        <div class="control">
          <button class="button is-rounded is-large is-info" @click="endWork">End of Work</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTES from '~/routes/api'

export default {
  data() {
    return {
      time: "00:00:00"
    };
  },
  methods: {
    setTime() {
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 100);
    },
    async startWork() {
      const res = await this.$axios.$post(ROUTES.POST.START_WORK);
    },
    async endWork() {
      const res = await this.$axios.$post(ROUTES.POST.END_WORK)
    }
  },
  mounted() {
    this.setTime();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>
