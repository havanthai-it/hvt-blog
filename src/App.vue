<template>
  <div
    id="app"
    :class="{
      'scroll-reach-threshold': scrollReachThreshold,
      'scroll-not-reach-threshold': !scrollReachThreshold
    }"
  >
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/views/header/Header.vue';
import AppFooter from '@/views/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data: function() {
    return {
      scrollReachThreshold: false
    };
  },
  methods: {
    handleScroll() {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;
      this.scrollReachThreshold = scrolled >= vh - 75;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="scss" src="./assets/style.scss"></style>
