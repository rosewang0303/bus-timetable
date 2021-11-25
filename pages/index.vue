<template>
  <div class="index">
    <div class="index__logo-wrap">
      <img class="index__logo" src="~assets/icon/logo.png"/>
    </div>
    <div class="index__route-wrap">
      <img class="index__route-img index__route-img--pc" src="~/assets/img/index_route.png"/>
      <img class="index__route-img index__route-img--mb" src="~/assets/img/index_route_mb.svg"/>
      <img class="index__route-dot index__route-dot--1" src="~/assets/img/index_dot.png"/>
      <img class="index__route-dot index__route-dot--2" src="~/assets/img/index_dot.png"/>
      <img class="index__route-dot index__route-dot--3" src="~/assets/img/index_dot.png"/>
      <nuxt-link :to="{name: 'nearbyStation'}">
        <button class="index__btn index__btn--1">
          <img src="~/assets/icon/position.svg"/>
          <div>附近公車站</div>
        </button>
      </nuxt-link>
      <nuxt-link :to="{name: 'bus'}">
        <button class="index__btn index__btn--2">
          <img src="~/assets/icon/search.svg"/>
          <div>查詢公車</div>
        </button>
      </nuxt-link>
      <nuxt-link :to="{name: 'longDistanceBus'}">
        <button class="index__btn index__btn--3">
          <img src="~/assets/icon/search.svg"/>
          <div>查詢客運</div>
        </button>
      </nuxt-link>
    </div>
    <div class="index__copyright">Taiwan Bus  © Code: Rose  /  Design: KT</div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/index_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  &__copyright {
    position: absolute;
    bottom: 16px;
    left: 130px;
    font-family: Roboto;
    font-size: 12px;
    line-height: 14px;
    white-space: nowrap;
  }
  &__logo-wrap {
    position: absolute;
    right: 299px;
    top: 10%;
  }
  &__logo {
    height: 113px;
  }
  &__route-wrap {
    width: 232px;
    height: 371px;
    position: absolute;
    right: 162px;
    top: calc(10% + 113px);
  }
  &__route-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    &--pc {
      display: block;
    }
    &--mb {
      display: none;
    }
  }
  &__route-dot {
    position: absolute;
    &--1 {
      top: 38px;
      left: -36px;
    }
    &--2 {
      top: 340px;
      left: 207px;
    }
    &--3 {
      top: 281px;
      left: 28px;
    }
  }
  &__btn {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: $black;
    border: 2px solid $primary;
    box-shadow: 0px 0px 6px $primary, 0px 0px 2px $primary;
    border-radius: 8px;
    color: $primary;
    font-size: 16px;
    line-height: 23px;
    white-space: nowrap;
    position: absolute;
    &:hover, &:focus {
      background-color: $primary;
      color: $black;
    }
    div {
      margin-left: 2px;
    }
    &--1 {
      top: 17px;
      left: 125px;
    }
    &--2 {
      top: 230px;
      left: 170px;
    }
    &--3 {
      top: 340px;
      left: -100px;
    }
  }
}
@media screen and (max-width: 768px){
  .index {
    background-position: left top;
    &__copyright {
      left: 50%;
      transform: translateX(-50%);
    }
    &__logo-wrap {
      right: 0;
      left: 54px;
      top: 16%;
    }
    &__logo {
      height: 62px;
    }
    &__route-wrap {
      width: 172px;
      height: 314px;
      left: 50%;
      transform: translateX(-50%);
      top: calc(16% + 62px);
    }
    &__route-img {
      &--pc {
        display: none;
      }
      &--mb {
        display: block;
      }
    }
    &__btn {
      width: 140px;
      font-size: 14px;
      line-height: 20px;
      &--2 {
        top: 160px;
        left: 67px;
      }
      &--3 {
        top: 280px;
        left: -80px;
      }
    }
    &__route-dot {
      &--1 {
        display: none;
      }
      &--2 {
        top: 280px;
        left: 160px;
      }
      &--3 {
        top: 220px;
        left: 18px;
      }
    }
  }
}
@media screen and (max-width: 576px){
  .index {
  }
}
</style>
