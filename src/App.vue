<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.down-enter-active,.down-leave-active{
  transform: translate3d(0,0,0);
  opacity: 1;
}
.down-enter-from{
  transform: translate3d(0,-50%,0);
  opacity: 0.2;
}
.down-leave-to{
  transform: translate3d(0,50%,0);
  opacity: 0.2;
}
</style>
