<template>
   <!-- <UTitle :level="1">Some text</UTitle> -->

   <header class="header">
      <Header />
   </header>

   <main class="main container">
      <UTitle :level="1" class="main__title"
         >Мы ценим Ваше время и комфорт! Запишитесь на сервис Nissan
         онлайн</UTitle
      >

      <section class="main__benefits">
         <BenefitsDesktopList />
         <BenefitsMobileList />
      </section>
   </main>

   <footer class="footer container">
      <PeculiaritiesList />
   </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
   background: url("@/public/img/Intro.png");
   background-position: center;
   background-size: 100% 100%;
   background-repeat: no-repeat;

   height: 70vh;

   position: relative;
}

main {
   margin-top: 120px;
   .main__benefits {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;

      gap: 24px;
   }
}

footer {
   margin-top: 76px;
}
</style>
