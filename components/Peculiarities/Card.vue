<template>
   <li class="footer__list-item" :class="`${cardClass}`">
      <div class="footer__list-item__img-wrapper">
         <NuxtImg :src="`${cardImage}`" loading="lazy" :alt="`${altText}`" />
      </div>

      <p class="footer__list-item__text">{{ cardText }}</p>
   </li>
</template>

<script setup>
const props = defineProps({
   cardImage: {
      type: String,
      required: true,
   },
   altText: {
      type: String,
      required: true,
   },

   cardText: {
      type: String,
      required: true,
   },

   cardClass: String,
});
</script>

<style lang="scss">
.footer__list-item {
   @media screen and (min-width: 992px) {
      width: auto;
      max-width: 31%;
      flex-grow: 1;
   }

   &:hover {
      img {
         transform: scale(1.1);
      }
   }
   .footer__list-item__img-wrapper {
      overflow: hidden;
      //   max-width: 368px;
      width: 100%;
   }
   img {
      width: 100%;
      min-height: 200px;
      cursor: pointer;

      display: block;
      transition: 0.25s ease-in-out;
   }

   &__text {
      max-width: 368px;

      margin-top: 16px;
      font-family: $NissanLight;
      font-size: 16px;
      line-height: 25.6px;
      cursor: default;
   }

   @media screen and (max-width: 991.98px) {
      width: 100%;
   }
}

.footer__list-item--add_0,
.footer__list-item--add_3 {
   order: -1;
}
</style>
