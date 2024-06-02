<template>
   <header class="header">
      <UIChooseButton>Тест-драйв</UIChooseButton>

      <NuxtImg
         src="/img/Car-preview.png"
         class="header__car-img"
         loading="lazy"
      />
   </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
   position: relative;

   background: url("@/public/img/Intro.png");
   background-position: center;
   background-size: 100% 100%;
   background-repeat: no-repeat;

   height: 70vh;

   @media screen and (min-width: 576px) and (max-width: 991.98px) {
      height: 50vh;
   }

   @media screen and (max-width: 575.98px) {
      height: 30vh;
   }
}
.header__car-img {
   position: absolute;
   right: 12%;
   bottom: -15%;

   width: 50%;

   @media screen and (max-width: 991.98px) {
      display: none;
   }
}
</style>
