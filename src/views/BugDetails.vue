<template>
  <div class="bug-details">

  </div>
</template>

<script>
  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.id);
    },
    data() {
      return {}
    },
    computed: {
      bug() {
        return this.$store.state.bug
      }
    },
    methods: {

    },
    components: {}
  }
</script>