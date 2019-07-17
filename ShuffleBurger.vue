<template>
  <div class="fixed w-screen h-screen gray-bg">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <nav>
      <div
        @mouseover="onHover()"
        @mouseleave="offHover()"
        @click="toggleFull()"
        class="absolute flex justify-center items-center top-0 right-0 w-20 h-20 z-50 cursor-pointer"
      >
        <p :class="{ 'bg-black': hover , 'bg-gray-200': !hover }" class="w-6 h-6 rounded-full transition" />
      </div>
      <div :class="{ onMenu: hover, offMenu: !hover, scale: fullMenu }" class="fixed yellow-bg transition"></div>
    </nav>
    <div class="absolute top-0 left-0 bg-black skew"></div>
  </div>
</template>

<style>
.transition {
  transition: all 0.3s;
}

.yellow-bg {
  background: #fff450;
  transform: skewX(30deg) translate3d(0,0,100002px);
  width:200%;
  height:100%;
}

.offMenu {
  left: calc(100% + 50vh * .57735);
}

.onMenu {
  left: calc(100% + 50vh * .57735 - 96px);
}

.scale {
  left: -200px;
}

.gray-bg {
  background-color: #111214;
}

.skew {
  transform: translateX(-37%) skewX(-14deg);
  height: 100%;
  width: 100%;
  z-index: -30;
}
</style>

<script>
export default {
  data() {
    return {
      hover: false,
      fullMenu: false
    }
  },
  methods: {
    onHover() {
      this.hover = true
    },
    offHover() {
      this.hover = false
      this.fullMenu = false
    },
    toggleFull() {
      this.fullMenu = !this.fullMenu
    }
  }
}
</script>
