<template>
  <transition mode="out-in" name="fade" appear>
    <div id="configpage" class="bg">
      <h2 class="heading__lv2 inner">
        <span>設定</span>
      </h2>
      <div class="column">
        <div class="inner">
          <p>
            {{ userName }}
          </p>
          <div class="img__box">
            <img v-if="photoURL" :src="photoURL">
          </div>
        </div>
      </div>
    </div>
  </transition>

  
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userName', 'photoURL'])
  }
}


</script>

<style lang="scss" scoped>
.img__box {
  width: 100px;
}
img {
  width: 100%;
  border-radius: 50%;
}

.column {
  margin-bottom: 4rem;
}

.heading {
  &__lv2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  &__lv3 {
    font-size: 2rem;
    margin-bottom: 2rem;

    &:before {
      content: "";
      // border-left: 5px solid orange;
      margin-right: 10px;
    }
  }
}

.small {
  font-size: 1.4rem;
}

.tag__area {
  display: flex;
  margin: 20px 0;

  .tag {
    background-color: orange;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 10px;
  }
}
</style>