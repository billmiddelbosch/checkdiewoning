<template>
  <div class="panel" :class="{'is-visible' : isIntroDone}">
    <div ref="bg" class="panel-bg"></div>
    <div ref="scroller" class="panel-scroller" @scroll="handleScroll">
      <div class="panel-scroller-inner">
        <div class="panel-closer" @click="closePanel"></div>
        <div class="panel-spacer" @click="closePanel"></div>
        <div ref="content" class="panel-content">
          <button class="close" @click="closePanel"></button>
          <div class="panel-content-inner">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {

  props: {
    autoShow: {
      type: Boolean,
      default: true
    }
  },

  data: () => {
    return {
      timeline: null,
      isIntroDone: false
    }
  },
  beforeDestroy () {
    this.$refs.scroller.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.createTimeline()
    if (this.autoShow) {
      this.timeline.play()
    }
    this.$refs.scroller.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    createTimeline () {
      const vue = this
      this.timeline = gsap.timeline({
        paused: true
      })
      const bg = gsap.fromTo(
        this.$refs.bg,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, clearProps: 'all' }
      )
      const content = gsap.fromTo(
        this.$refs.content,
        { y: '100vh' },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          clearProps: 'all'
        }
      )
      this.timeline.to(vue.$refs.scroller, 0.1, {
        scrollTop: 10
      })
      this.timeline.add(bg)
      this.timeline.add(content, '-=.5')
      this.timeline.eventCallback('onReverseComplete', () => {
        this.$emit('panel-closed')
        vue.isIntroDone = false
      })
      this.timeline.eventCallback('onComplete', () => {
        vue.isIntroDone = true
      })
    },

    handleScroll () {
      if (!this.$refs.scroller) { return }
      if (
        this.$refs.scroller.scrollTop < 10 && this.isIntroDone
      ) {
        this.timeline.duration(0.75)
        this.timeline.reverse()
      }
    },

    playAnimation () {
      this.timeline.play()
    },

    closePanel () {
      this.timeline.duration(0.75)
      this.timeline.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow: hidden;
  z-index: 9999; // fix this;
  pointer-events: none;

  &.is-visible{
    pointer-events: all;
  }

  &-scroller {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
    overscroll-behavior: none;
    &-inner {
      display: flex;
      flex-direction: column;
      min-height: calc(100% + 20px);
    }
  }
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
  &-spacer {
    flex: 1;
    flex-shrink: 1;
    cursor: pointer;
  }
  &-closer {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 0;
  }
  &-content {
    position: relative;
    background-color: #ffffff;
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    padding: 50px 30px 30px 30px;
    margin: 50px auto auto auto;
    width: 100%;
    &-inner {
      margin: auto;
    }
    z-index: 1;
    .close {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      padding: 0;
      width: 50px;
      height: 30px;
      z-index: 1;
      outline: 0;
      &:after {
        content: '';
        display: block;
        height: 6.5px;
        width: 100%;
        border-radius: 5px;
        background-color: #ccc;
      }
      &:hover,
      &:focus {
        opacity: 0.75;
      }
    }
  }
}
</style>
