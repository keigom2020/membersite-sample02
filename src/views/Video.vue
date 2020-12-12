<template>
    <transition mode="out-in" name="fade" appear>
      <div id="video" class="bg">
        <h2 class="heading__lv2 inner">
          <span>動画一覧</span>
        </h2>

        <div class="filters inner">
          <span 
            class="filter" 
            :class="{ active: currentFilter === 'ALL' }" 
            @click="setFilter('ALL')"
          >
            すべて
          </span>
          <span 
            class="filter" 
            :class="{ active: currentFilter === 'teacher' }" 
            @click="setFilter('teacher')"
          >
            #カテゴリ1
          </span>
          <span 
            class="filter" 
            :class="{ active: currentFilter === 'savings' }" 
            @click="setFilter('savings')"
          >
            #カテゴリ2
          </span>
          <span 
            class="filter" 
            :class="{ active: currentFilter === 'insurance' }" 
            @click="setFilter('insurance')"
          >
            #カテゴリ3
          </span>
          <span 
            class="filter" 
            :class="{ active: currentFilter === 'investment' }" 
            @click="setFilter('investment')"
          >
            #カテゴリ4
          </span>
        </div>

        <transition-group 
          class="projects inner" 
          name="projects"
        >
          <div
            class="item" 
            :key="video.title" 
            v-for="video in activeVideos"
          >
            <!-- <div class="project-image-wrapper">
              <div class="gradient-overlay"></div>
              <div class="circle">
                <span class="project-title">{{video.title}}</span>
                <h3 class="heading__lv3">
                  {{ video.title }}
                </h3>
              </div>
            </div> -->

            <h3 class="heading__lv3">
              {{ video.title }}
            </h3>
            <div class="wrapper__date-tag">
              <p class="small post-date">
              {{ video.date }}
            </p>
            <div class="tag__area">
              <div class="tag">
                {{ video.tag }}
              </div>
            </div>
            </div>
            <iframe
              :src="video.path"
              width=""
              height=""
              frameborder="0"
              allowfullscreen
              style="width: 100%; height: 206px;"
            ></iframe>
            <p class="link__video">
              <a :href="video.path" target="_blank" rel="noopener">vimeoで見る</a>
            </p>
            <div class="statement">
              <p>動画詳細欄</p>
              <p>
                {{ video.label }}
              </p>
            </div>
          </div>
        </transition-group>
      </div>
    </transition>
  
</template>

<script>

export default {
  data() {
    return {
      currentFilter: 'ALL',
      videos: [
        {
          title: "タイトル1",
          category: 'teacher',
          date: '2020/08/29',
          path: 'https://player.vimeo.com/video/449708438',
          label: 'ここに動画の説明文が入ります',
          tag: '#カテゴリ1',
        },
        {
          title: "タイトル2",
          category: 'teacher',
          date: '2020/08/29',
          path: 'https://player.vimeo.com/video/449708438',
          label: 'ここに動画の説明文が入ります',
          tag: '#カテゴリ1',
        },
        {
          title: "タイトル3",
          category: 'insurance',
          date: '2020/08/29',
          path: 'https://player.vimeo.com/video/449708438',
          label: 'ここに動画の説明文が入ります',
          tag: '#カテゴリ3',
        },
        {
          title: "タイトル4",
          category: 'savings',
          date: '2020/08/29',
          path: 'https://player.vimeo.com/video/449708438',
          label: 'ここに動画の説明文が入ります',
          tag: '#カテゴリ2',
        },
        {
          title: "タイトル5",
          category: 'investment',
          date: '2020/08/29',
          path: 'https://player.vimeo.com/video/449708438',
          label: 'ここに動画の説明文が入ります',
          tag: '#カテゴリ4',
        },
      ]
    }
  }, 
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
  computed: {
    activeVideos() {
      return this.videos.filter(video => {
        return this.currentFilter === video.category || this.currentFilter === 'ALL'
      })
    }
  }
}
</script>

<style lang="scss">
// .player.player-746f29ce-0f7b-41d2-bb1e-0094ccd7885d.js-player-fullscreen.with-fullscreen.with-sticky-custom-logo.touch-support.player-xxs.player-cardsCorner.player-tiny {
//   max-width: 100%;
// }

#player {
  max-width: 100% !important;
}

#video {
  .heading__lv2 {
    span {
      padding: 1rem;
      border-radius: 4px;
      box-shadow:0px 2px 8px lightgrey;
    }
    margin-bottom: 3rem;
  }
  .heading__lv3 {
    // min-height: 2em;
    height: 2rem;
    text-indent: -1rem;
    padding-left: 1rem;
    font-size: 1.2rem;
    color: #000;
    text-align: left;

    &:before {
      content: "";
      margin-right: 0.4rem;
      border-right: 5px solid #057bde;
    }
  }

  .item {
    transition: all .35s ease-in-out;
    box-shadow:0px 2px 8px lightgrey;
    border-radius:3px;
    width: calc((100% / 3) - 14px);
    display: flex;
    flex-direction: column;
    // align-items:center;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px 20px 10px;
    margin-right: 20px;
    margin-bottom: 20px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}




iframe {
  width: 100%;
  height: auto;
}
body, html, .player, .fallback {
  height: auto;
}

html,body {
  margin:0;
  font-family: 'Dawning of a New Day', cursive;
}

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:30pt;
  font-weight:normal;
}

.project-title {
font-size:16pt  
}

.wrapper__date-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.filters {
  display: flex;

  &.inner {
    margin-bottom: 2rem;
  }
}

.filter {
  font-family:arial;
  cursor:pointer;
  border-radius: 6px;
  transition: all 0.35s;

  background-color: #057bde;
  color: #fff;
  padding: 12px 12px 12px;
  margin-right: 20px;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter.active {
  box-shadow:0px 1px 3px 0px #00000026;
  background-color: #3f51b5;
}

.filter:hover {
  // background:lightgray;
  opacity: 0.7;
} 

.projects {
  margin-top:25px;
  display:flex;
  flex-wrap: wrap;
  // justify-content: center;
}

.link__video {
  margin-top: 6px;
  text-align: right;
  
  a {
    color: #000;

    &:hover {
      opacity: 0.6;
    }
  }
}

#video {
  .tag__area {
    margin: 0 0;
  }
  .tag {
    background-color: #057bde;
  }
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.circle {
  text-align:center;
  // position:absolute;
  // bottom:-38px;
  // left:40px;
  width:100px;
  height:100px;
  // border-radius:50px;
  // border:1px solid black;
  display:flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content:center;
  align-items:center;
  background-color:#fff;
  // box-shadow:0px -3px 3px #484848a6;
}

@media screen and (max-width: 767px){
  #video {
    .item {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }
  .filters {
    flex-wrap: wrap;
  }
  .filter {
    width: 29%;
    margin-bottom: 10px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}



// .project-image-wrapper {
//   position:relative;
// }

// .gradient-overlay {
//   position:absolute;
//   top:0;
//   left:0;
//   width:100%;
//   height:150px;
//   opacity:0.09;
//   background: 
//     linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
//     linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
//   border-bottom-left-radius:10px;
//   border-bottom-right-radius:10px;
//   border-top-left-radius:3px;
//   border-top-right-radius:3px;
// }

// .project-image {
//   width:100%;
//   height:150px;
//   border-bottom-left-radius:5px;
//   border-bottom-right-radius:5px;
//   border-top-left-radius:3px;
//   border-top-right-radius:3px;
// }

</style>