<template>
  <h2 class="TextAnime1 center message">
    <span
      v-for="(t, index) in text"
      :key="index"
      class="item"
      :style="{animationDelay: index*20+'ms'}"
      v-text="t"
      />
  </h2>
</template>

<script>
export default {
  data() {
    return {
      text: '金融を日本一分かりやすく身近に'
    }
  }
}
</script>

<style scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.TextAnime1 {
  margin-top: 100px;
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 3rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  color: #fff;
}

@media screen and (max-width: 767px) {
  .item {
    font-size: 1.6rem;
  }
}
</style>