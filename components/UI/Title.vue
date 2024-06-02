<template>
   <h1 v-if="level == 1" :class="class">
      <slot />
   </h1>

   <h2 v-if="level == 2" :class="class">
      <slot />
   </h2>

   <h3 v-if="level == 3" :class="class">
      <slot />
   </h3>
</template>

<script setup>
const props = defineProps({
   level: {
      type: [String, Number],
      required: true,
   },
   class: {
      type: [String, Number],
   },
});
</script>

<style lang="scss" scoped>
h1 {
   font-family: $NissanLight;
   font-size: 48px;
   line-height: 64px;
   text-transform: uppercase;

   @media screen and (max-width: 575.98px) {
      font-size: 36px;
      line-height: 48px;
   }
}

h2 {
   font-family: $NissanLight;
   font-size: 36px;
   line-height: 48px;
   text-transform: uppercase;
}

h3 {
   font-family: $NissanBold;
   font-size: 20px;
   font-weight: 700;
   line-height: 32px;
   text-transform: uppercase;
}
</style>
