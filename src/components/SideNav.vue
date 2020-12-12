<template>
  <div class="fixed-bar">
    <div
      :class="{'is-active': isActive}"
      class="btn-humburger"
      @click="toggleButton"    
    >
      <span></span>
      <span></span>
    </div>
    <nav id="nav">
      <ul
        @click="toggleButton"
      >
        <router-link 
          :to="item.path" 
          v-for="(item, i) in items" :key="i"
          tag="li"
        >
          {{ item.title }}
        </router-link>
      </ul>
      <div class="myIcon">
        <img v-if="photoURL" :src="photoURL">
        <div class="myIcon__name">
          {{ userName }}
        </div>
      </div>
    </nav>
    <div 
      class="navBg"
      @click="toggleButton"
    ></div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          title: "トップ",
          icon: "ondemand_video",
          link: {
            name: "top",
          },
          path: "/top",
        },
        {
          title: "動画一覧",
          icon: "ondemand_video",
          link: {
            name: "video",
          },
          path: "/video",
        },
        {
          title: "サイトポリシー",
          icon: "list",
          link: {
            name: "policy",
          },
          path: "/policy",
        },
        {
          title: "設定",
          icon: "dialpad",
          link: {
            name: "configpage",
          },
          path: "/configpage",
        },
      ],
      isActive: false,
      isActive01: false,
    };
  },
  methods: {
    toggleButton() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapGetters(['userName', 'photoURL'])
  }
};
</script>

<style lang="scss">
#sideNav {
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
}

// a {
//   color: $main-color;
//   color: #141615;
// }
#nav {
  width: 800px;
  // margin: 0 auto 80px;
  margin: 0 auto;
  // overflow: hidden;

  display: flex;
  align-items: center;

  ul {
    display: flex;
    width: 70%;

    li {
      width: 100%;
      color: #fff;
      display: block;
      padding: 0.8rem 0;
      cursor: pointer;
      border-left: 1px solid #fff;
      font-weight: bold;

      &:last-child {
        border-right: 1px solid #fff;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  a {
    font-weight: bold;
    // color: #141615;
    // color: #2c3e50;
    font-size: 2rem;
    display: block;
    padding: 30px 0 45px;
    text-shadow: 0 0 5px #000;
    color: #17a2b8;
    border-right: 1px solid #fff;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      background-color: green;
      opacity: 0.7;
      transition: all 0.4s;
    }
  }
}

.fixed-bar {
  position: absolute;
  z-index: 2;
  width: 100%;
  // background-color: #3f51b5;
  background-image: linear-gradient(90deg,#020024,#090979 35%,#00d4ff);
}

.myIcon {
  margin-left: auto;
  padding: 4px 0 4px;

  img {
    border-radius: 50%;
    width: 36px;
    height: auto;
  }

  .myIcon__name {
    font-size: 0.5rem;
  }
}

@media screen and (max-width: 767px) {
  #nav {
    width: 70%;
    height: 100vh;
    background-color: #3f51b5;
    // background-image: radial-gradient(circle, #3f51b5 0, #fff 100%);
    transform: translate(-200%, 0);
    transition: all 0.4s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    border-radius: 0;
    border: none;

    flex-direction: column;

    ul {
      width: 100%;

      li {
        color: #fff;
        border-bottom: 1px solid #fff;
        border-left: none;
        padding: 2rem 0;

        &:last-child {
        border-right: none;
      }
      }
    }

    // a {
    //   color: #fff;
    //   padding: 30px 0;
    //   border-right: none;
    // }
  }

  .myIcon {
    margin: 0 auto;
  }

  #about {
    margin-top: 80px;
  }

  .fixed-bar {
    position: static;
  }

  .is-active ~ #nav {
    transform: translate(0, 0);
  }
  .is-active ~ .navBg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    display: block;
    z-index: 3;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  // ハンバーガー
  .btn-humburger {
    width: 56px;
    height: 56px;
    background: transparent;
    // position: relative;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }
  }

  .btn-humburger > span {
    position: absolute;
    width: 56px;
    height: 3px;
    transition: all 0.2s;
    background-color: #fff;
    box-shadow: 4px 4px 2px rgba(0,0,0,0.4);;
  }

  .btn-humburger > span:first-child {
    top: 15px;
    left: 10px;
  }

  .btn-humburger > span:last-child {
    bottom: 15px;
    left: 10px;
  }

  .btn-humburger.is-active > span:first-child {
    transform: translateY(11px) rotate(45deg);
    left: 0px;
  }
  .btn-humburger.is-active > span:last-child {
    transform: translateY(-10px) rotate(-45deg);
    left: 0px;
  }
}
</style>