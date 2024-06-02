<template>
   <UChooseButton>Тест-драйв</UChooseButton>

   <NuxtImg src="/img/Car-preview.png" class="header__car-img" loading="lazy" />
</template>

<script setup></script>

<style lang="scss" scoped>
.header__car-img {
   position: absolute;
   right: 12%;
   bottom: -15%;

   width: 50%;
}
</style>
