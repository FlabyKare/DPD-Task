<template>
   <div class="benefits__cards-item" :class="cardClass">
      <NuxtImg :src="`${cardImage}`" loading="lazy" />
      <p class="benefits__cards-item__title">{{ cardTitle }}</p>
      <p class="benefits__cards-item__text">{{ cardText }}</p>
   </div>
</template>

<script setup>
const props = defineProps({
   cardImage: String,
   cardTitle: String,
   cardText: String,
   cardClass: String,
});
</script>

<style lang="scss" scoped>
.benefits__cards-item {
   max-width: 280px;
   padding: 16px;
   img {
      width: 180px;
      max-height: 100px;
      min-height: 100px;
      display: block;
      margin: auto;
      margin-bottom: 40px;
      transition: 0.25s ease-in-out;
      cursor: pointer;
      &:hover {
         transform: scale(1.1);
      }
   }

   p {
      text-align: center;
      text-transform: uppercase;
   }

   .benefits__cards-item__title {
      font-family: $NissanBold;
      font-size: 20px;
      line-height: 32px;
   }
   .benefits__cards-item__text {
      margin-top: 16px;
      font-family: $NissanRegular;
      font-size: 16px;
      line-height: 25.6px;
   }
}

@media screen and (max-width: 991.98px) {
   .benefits__cards-item {
      &.desktop {
         display: none;
      }
   }
}

@media screen and (min-width: 992px) {
   .benefits__cards-item {
      &.mobile {
         display: none;
      }
   }
}
</style>
