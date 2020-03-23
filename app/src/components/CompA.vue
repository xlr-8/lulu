<script>

var compA = {
  name: 'CompA',
  template: '',
  mounted() {
    this.$on('event', () => {
      console.log("event");
      this.show();
    })
  },
  methods: {
    show: function() {
      console.log("SHOW TIME");
    },
  },
};

</script>
