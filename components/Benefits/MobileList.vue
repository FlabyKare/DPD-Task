<template>
   <section
      class="benefits__cards main__slider-mobile"
      key="main__slider-mobile"
   >
      <Swiper
         class="mySwiper"
         :loop="false"
         :navigation="true"
         :modules="modules"
         :breakpoints="breakpoints"
      >
         <SwiperSlide>
            <BenefitsCard
               :cardImage="`/img/icons/Benefit.png`"
               :cardTitle="`Выгода`"
               :cardText="`Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля`"
               :cardClass="`mobile`"
            />
         </SwiperSlide>
         <SwiperSlide>
            <BenefitsCard
               :cardImage="`/img/icons/Relevance.png`"
               :cardTitle="`актуальность`"
               :cardText="`Выберите актуальные для вас сервисные предложения`"
               :cardClass="`mobile`"
            />
         </SwiperSlide>
         <SwiperSlide>
            <BenefitsCard
               :cardImage="`/img/icons/Choose.png`"
               :cardTitle="`широкий выбор`"
               :cardText="`Выберите дилера, который вам подходит`"
               :cardClass="`mobile`"
         /></SwiperSlide>
         <SwiperSlide>
            <BenefitsCard
               :cardImage="`/img/icons/Service.png`"
               :cardTitle="`онлайн обслуживание`"
               :cardText="`Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты`"
               :cardClass="`mobile`"
         /></SwiperSlide>
      </Swiper>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const modules = [Navigation];
const breakpoints = ref({
   320: {
      slidesPerView: 1,
   },
   768: {
      slidesPerView: 2,
   },
});
</script>

<style lang="scss">
.main__slider-mobile {
   display: contents;
   @media screen and (min-width: 1199.98px) {
      display: none;
   }
   .swiper-button-prev,
   .swiper-button-next {
      transition: 0.25s ease-in-out;
      color: #c31631;
   }

   .swiper-button-prev {
      &.swiper-button-disabled {
         left: -100px;
      }
   }

   .swiper-button-next {
      &.swiper-button-disabled {
         right: -100px;
      }
   }
   @media screen and (min-width: 992px) and (max-width: 1199.98px) {
      &:not(:hover) {
         .swiper-button-prev {
            left: -100px;
         }

         .swiper-button-next {
            right: -100px;
         }
      }
   }
}
</style>
