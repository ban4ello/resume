<template>
  <v-row class="font-size-extra-large">
    <v-col>
      <h2>{{ name }}</h2>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.font-size-extra-large {
  font-size: 2em;
}
</style>
