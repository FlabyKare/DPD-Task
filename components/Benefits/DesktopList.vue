<template>
   <section class="main__desktop-slider" key="main__desktop-slider">
      <BenefitsCard
         :cardImage="`/img/icons/Benefit.png`"
         :cardTitle="`Выгода`"
         :cardText="`Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля`"
         :cardClass="`desktop`"
      />
      <BenefitsCard
         :cardImage="`/img/icons/Relevance.png`"
         :cardTitle="`актуальность`"
         :cardText="`Выберите актуальные для вас сервисные предложения`"
         :cardClass="`desktop`"
      />
      <BenefitsCard
         :cardImage="`/img/icons/Choose.png`"
         :cardTitle="`широкий выбор`"
         :cardText="`Выберите дилера, который вам подходит`"
         :cardClass="`desktop`"
      />
      <BenefitsCard
         :cardImage="`/img/icons/Service.png`"
         :cardTitle="`онлайн обслуживание`"
         :cardText="`Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты`"
         :cardClass="`desktop`"
      />
   </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.main__desktop-slider {
   display: contents;
   @media screen and (max-width: 1199.98px) {
      display: none;
   }
}
</style>
