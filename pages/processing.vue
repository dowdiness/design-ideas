<template>
  <div class="container border">
    <div class="d-flex justify-content-center" id="p5Canvas"></div>
  </div>
</template>

<script>
import particle from "~/processing/particle"
export default {
  mounted() {
    const P5 = require('p5')
    new P5(particle)
  }
}
</script>
