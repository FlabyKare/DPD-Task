<template>
   <Button class="header__choose-btn">
      <span class="header__choose-btn__text">
         <slot />
      </span>

      <svg
         class="header__choose-btn__arrow"
         width="9"
         height="13"
         viewBox="0 0 9 13"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.48527 6.34946L0.242632 10.4224L2.36395 12.4589L6.60659 8.38593L8.72791 6.34946L6.60659 4.31299L2.36395 0.240059L0.242633 2.27653L4.48527 6.34946Z"
            fill="black"
         />
      </svg>
   </Button>
</template>

<script setup></script>

<style lang="scss" scoped>
.header__choose-btn,
.header__choose-btn * {
   transition: 0.25s ease-in-out;
}
.header__choose-btn {
   padding: 8px 20px;

   position: absolute;
   bottom: 64px;
   left: 10%;

   width: 280px;
   background: #fff;

   display: flex;
   justify-content: space-between;
   align-items: center;

   &__text {
      font-family: $NissanLight;
      font-size: 16px;
      line-height: 24px;
   }

   &:hover {
      background: #c31631;
      .header__choose-btn__text {
         color: #fff;
      }
      .header__choose-btn__arrow path {
         fill: #fff;
      }
   }

   @media screen and (min-width: 576px) and (max-width: 991.98px) {
      height: 60px;
      width: 100%;
      max-width: 70%;

      transform: translate(-50%, -50%);
      top: 85%;
      left: 50%;
   }
   @media screen and (max-width: 575.98px) {
      width: 100%;
      max-width: 70%;
      height: 40px;

      transform: translate(-50%, -50%);
      top: 85%;
      left: 50%;
   }
}
</style>
