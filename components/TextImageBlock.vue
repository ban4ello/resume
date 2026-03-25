<template>
  <div class="item">
    <img :width="imageWidth" :src="require(`~/assets/icons/${imageName}.png`)">
    <div>
      <h3 class="bold text-subtitle">
        {{ title }}
      </h3>
      <span class="italic">{{ subtitle }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    imageName: {
      type: String,
      default: ''
    },
    imageWidth: {
      type: String,
      default: '120px'
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  max-width: 450px;
  display: grid;
  gap: 15px;
  grid-template-columns: max-content 1fr;
  align-items: center;
  transition: 2s;
}

img {
  max-height: 120px;
  object-fit: contain;
}
.text-subtitle {
  font-size: 1.5em;
}
.bold {
  font-weight: bold;
}
.italic {
  font-size: 1.5em;
  font-style: italic;
}
</style>
