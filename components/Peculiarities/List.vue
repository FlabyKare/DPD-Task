<template>
   <UITitle key="Peculiarities-title" :level="2"
      >Уникальные особенности модели</UITitle
   >

   <ul class="footer__list" key="footer__list">
      <PeculiaritiesCard
         v-for="(feature, index) in sortedFeatures"
         :key="feature.sorting"
         :cardImage="`${assetsDomain}/${feature.image}`"
         :cardText="`${feature.description}`"
         :cardClass="`footer__list-item--add_${index}`"
         :altText="feature.image_alt"
      />
      <PeculiaritiesCard
         v-show="isActive"
         key="footer__list-item--add_3"
         :cardImage="`https://test-task-frontend-2023.slava.digital/assets/img4.png`"
         :cardText="`Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.`"
         :altText="`нестационарный гироскопический стабилизатор`"
         :cardClass="`footer__list-item--add_3`"
      />
   </ul>

   <UIButton
      :btnClass="`footer__list-btn`"
      @click="addCard()"
      key="Peculiarities-button"
      >Добавить особенность</UIButton
   >
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useFeaturesStore } from "~/stores/features";

let isActive = ref(false);
function addCard() {
   isActive.value = true;
}

const featuresStore = useFeaturesStore();

onUnmounted(() => {
   localStorage.setItem("featuresState", JSON.stringify(featuresStore.$state));
});

// Восстановление состояния при загрузке компонента
onMounted(() => {
   if (localStorage.getItem("featuresState")) {
      const savedState = JSON.parse(localStorage.getItem("featuresState"));
      featuresStore.$patch(savedState);
   } else {
      featuresStore.fetchFeatures();
   }
});

const blockHeading = computed(() => featuresStore.blockHeading);
const assetsDomain = computed(() => featuresStore.assetsDomain);
const sortedFeatures = computed(() =>
   featuresStore.features.sort((a, b) => a.sorting - b.sorting)
);
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
