<template>
  <div class="home container-fluid">
    <img alt="Hugs not Bugs" src="../assets/hugs-not-bugs.jpg">
    <h1>Bug Report</h1>
    <!-- <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#addABug">Call the
      Exterminator</button> -->
    <div class="row">
      <new-bug />
    </div>
    <div class="row">
      <bugs />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Bugs from '@/components/Bugs.vue'
  import NewBug from '@/components/NewBug.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch("getBugs");
    },
    computed: {
      bug() {
        return this.$store.state.bug;
      },
    },
    methods: {
      bugDetails() {

      },
    },
    components: {
      Bugs,
      NewBug
    }
  }
</script>