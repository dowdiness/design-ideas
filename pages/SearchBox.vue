<template>
  <div class="w-screen h-screen bg-red montserrat">
    <h1 class="w-full top text-center uppercase text-5xl font-bold text-white">search box<hr class="mt-8 border-b border-white border-2 w-2/5"></h1>
    <div class="search--box h-12 center bg-transparent bg-gray-800 rounded-full transition">
      <input class="search--box__text mt-3 float-left w-0 p-0 bg-transparent border-none outline-none leading-relaxed text-gray-300 transition" type="text" placeholder="Type to search">
      <nuxt-link class="search--box__link float-right m-auto w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full text-red transition" to="/"><i class="fas fa-search"></i></nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.top {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
}


.center {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -70%);
}

.search--box:hover > .search--box__text {
  width: 240px;
  margin-left: 16px;
  background: #2d3748;
}

.search--box:hover > .search--box__link {
  background: #fff;
}


.bg-red {
  background: #e84118;
}

.text-red {
  color: #e84118;
}

.transition {
  transition: all 0.4s;
}


</style>


<script>
export default {
  head: {
    link: [
      {href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap" , ref: "stylesheet"}
    ],
    script: [
      { src: "https://kit.fontawesome.com/b0a08ceecb.js" }
    ]
  }
}
</script>
