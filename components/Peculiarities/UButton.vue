<template>
   <button :class="`${btnClass}`">
      <slot />
   </button>
</template>

<script setup>
const props = defineProps({
   btnClass: {
      type: String,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
button {
   padding: 12px 20px;
   margin: 40px auto;
   display: block;

   width: 100%;
   max-width: 280px;

   font-family: $NissanRegular;
   font-size: 16px;
   line-height: 24px;
   text-align: center;

   background: transparent;
   border: 2px solid #c31631;
   transition: 0.25s ease-in-out;

   &:hover {
      background: #c31631;
      color: #fff;
   }
}
</style>
