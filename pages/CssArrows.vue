<template>
  <div class="w-screen h-screen flex justify-between items-center px-32">
    <p class="arrow-right"></p>
    <p class="arrow-down"></p>
    <p class="arrow-up"></p>
    <p class="arrow-left"></p>
  </div>
</template>

<style>
.arrow-right{
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: #565656 #565656 transparent transparent;
  transform: rotate(45deg);
}
.arrow-down{
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color:  transparent transparent #565656 #565656;
  transform: rotate(-45deg);
}
.arrow-up{
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: #565656 #565656 transparent transparent;
  transform: rotate(-45deg);
}
.arrow-left{
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color:  transparent transparent #565656 #565656;
  transform: rotate(45deg);
}
</style>
