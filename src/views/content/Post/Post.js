export default {
  name: 'app-post',
  components: {},
  data: function() {
    return {
      post: {
        id: 'abcxyz',
        path: 'this-is-the-title',
        title: 'This is the title',
        image: 'image_url',
        short_description: 'This is the short description.',
        content: '<div>This is post content.</div>',
        date: 'November 6, 2020'
      }
    };
  },
  beforeCreate: function() {
    console.log(this.$route.params.path);
    // Call api get post
  }
};
