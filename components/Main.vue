<template>
   <main class="main container">
      <UITitle :level="1" class="main__title"
         >Мы ценим Ваше время и комфорт! Запишитесь на сервис Nissan
         онлайн</UITitle
      >

      <section class="main__benefits">
         <BenefitsDesktopList />
         <BenefitsMobileList />
      </section>
   </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
   margin-top: 120px;
   .main__benefits {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;

      gap: 24px;
   }

   @media screen and (max-width: 991.98px) {
      margin-top: 60px;
   }
}
</style>
