<template>
  <div class="home">
    <h1 v-if="3 > 2">3 > 2</h1>
    <div class="parent">
      <p>this is parent</p>
      <div class="child">this is child</div>
    </div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.parent {
  color: red;

  .child {
    font-weight: 700;
  }
}
</style>
