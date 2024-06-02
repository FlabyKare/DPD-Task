<template>
   <UTitle :level="2">Уникальные особенности модели</UTitle>

   <ul class="footer__list">
      <PeculiaritiesCard
         :cardImage="`/img/Footer/1.png`"
         :cardText="`Идеально скомпанованная торпеда, удобна в использовнии как для правшей так и для левшей`"
      />
      <PeculiaritiesCard
         :cardImage="`/img/Footer/2.png`"
         :cardText="`Белоснежные кресла и аксессуары салона выгодно подчеркнут ваш свежий средиземноморский загар`"
      />
      <PeculiaritiesCard
         :cardImage="`/img/Footer/3.png`"
         :cardText="`Хардтоп отличительно элегантной  конструкции, автоматически складывается электроприводом`"
      />
      <PeculiaritiesCard
         v-show="isActive"
         :cardImage="`https://test-task-frontend-2023.slava.digital/assets/img4.png`"
         :cardText="`Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.`"
      />
   </ul>

   <PeculiaritiesUButton @click="addCard()"
      >Добавить особенность</PeculiaritiesUButton
   >
</template>

<script setup>
let isActive = ref(false);
function addCard() {
   isActive.value = true;
}
</script>

<style lang="scss" scoped>
.footer__list {
   margin-top: 48px;
   display: flex;
   gap: 24px;

   //    justify-content: space-between;
   flex-wrap: wrap;
}
</style>
