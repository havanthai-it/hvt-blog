export default {
  name: 'app-header',
  components: {},
  data: function() {
    return {
      navWrapperHeight: 0
    };
  },
  methods: {
    toggleVerticalNav: function() {
      const navWrapper = document.getElementById('nav-vertical');
      this.navWrapperHeight = navWrapper ? navWrapper.offsetHeight : 0;
      this.navWrapperHeight = this.navWrapperHeight === 0 ? 220 : 0;
    }
  }
};
