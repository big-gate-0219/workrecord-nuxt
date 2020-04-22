<template>
  <div id="app">
    <HeaderComponent />

    <div class="columns">
      <SidebarComponent />

      <div class="column content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "~/components/HeaderComponent";
import SidebarComponent from "~/components/SidebarComponent";

export default {
  components: {
    HeaderComponent,
    SidebarComponent
  },
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: #FAFAFA;
}

.columns {
  min-height: 100vh;
}
</style>