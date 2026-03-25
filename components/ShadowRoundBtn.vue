<template>
  <div class="text-title shadow-round-btn" @click="$emit('click')">
    <span class="shadow-round-btn__label" :style="{ color: textColor }">{{ btnText }}</span>
  </div>
</template>
<script>
export default {
  props: {
    btnText: {
      type: String,
      default: ''
    },

    textColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<style lang="scss" scoped>
.shadow-round-btn {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  min-width: 200px;
  width: max-content;
  max-width: 100%;
  padding: 12px 26px;
  background: linear-gradient(45deg, black, #106c47);
  border: 1px #000 solid;
  border-radius: 25px;
  box-shadow: 4px 6px 11px;
  color: #000;
  cursor: pointer;
  text-align: center;

  &__label {
    line-height: 1.25;
    word-break: break-word;
    hyphens: auto;
  }

  &:hover {
    box-shadow: 2px 4px 8px;
  }

  &.disabled {
    cursor: not-allowed;
  }
}
</style>
