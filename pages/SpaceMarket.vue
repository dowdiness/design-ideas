<template>
  <div >
    <header class="p-2 w-screen h-12 flex justify-between items-center">
      <h1 class="text-4xl">Spacemarket</h1>
      <div class="flex flex-row">
        <div class="p-2 flex justify-around items-center border border-gray-300 shadow">
          <i class="far fa-flag text-teal-500" ></i>
          <input class="pl-2 text-gray-500" type="text" placeholder="利用目的を選ぶ"></input>
        </div>
        <div class="ml-0 p-2 flex justify-around items-center border border-gray-300 shadow">
          <i class="fas fa-map-marker-alt text-teal-500"></i>
          <input class="pl-2 text-gray-500" type="text" placeholder="エリアを入力する"></input>
        </div>
      </div>
      <a class="text-gray-600 hover:text-gray-900 cursor-pointer transition" href="/spacemarket">空きスペースを掲載する</a>
      <a class="text-gray-600 hover:text-gray-900 cursor-pointer transition" href="/spacemarket">法人利用について</a>
      <a class="text-gray-600 hover:text-gray-900 cursor-pointer transition" href="/spacemarket">ヘルプ</a>
      <a class="text-gray-600 hover:text-gray-900 cursor-pointer transition" href="/spacemarket">ログイン</a>
      <a class="text-gray-600 hover:text-gray-900 cursor-pointer transition" href="/spacemarket">新規登録</a>
    </header>
    <nav></nav>
    <div class="w-screen">
      <img class="w-full h-128 object-cover" src="~/assets/images/image.webp" alt="">
    </div>
    <section class="my-6 px-8 flex">
      <div class="w-4/6 h-128">
        <div class="flex justify-start">
          <div class="flex justify-center items-center w-1/4 h-8">
            <a class="w-full h-full text-center" href="/spacemarket">スペースについて</a>
          </div>
          <div class="flex justify-center items-center w-1/4 h-8">
            <a class="w-full h-full text-center" href="/spacemarket">アクセス</a>
          </div>
          <div class="flex justify-center items-center w-1/4 h-8">
            <a class="w-full h-full text-center" href="/spacemarket">プラン一覧</a>
          </div>
          <div class="flex justify-center items-center w-1/4 h-8">
            <a class="w-full h-full text-center" href="/spacemarket">アメニティ</a>
          </div>
        </div>
        <div class="pt-8">
          <h4>レンタル</h4>
          <h2>100【シェアスペRED心斎橋・四ツ橋】✨駅近のおしゃれ✨キッチン有/映画鑑賞/パーティ/スタジオ/女子会【海の日SALE】</h2>
          <p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </p>
        </div>
      </div>
      <div class="py-8 w-2/6 h-128"></div>
    </section>
  </div>
</template>
<style scoped>
.transition {
  transition: all 0.4s ease-in-out;
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
