<template>
  <div class="new-bug">
    <div class="row">
      <form @submit.prevent="makeBug" class="new-form">
        <div class="col-6">
          <input type="text" placeholder="User Name" v-model="newBug.creator">
        </div>
        <div class="col-6">
          <input type="text" placeholder="Bug Name" v-model="newBug.title">
        </div>
        <div class="col-12">
          <input type="text" placeholder="Bug Description" v-model="newBug.description">
        </div>
        <button type="submit" class="btn btn-danger">Call the Exterminator</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewBug",
    data() {
      return {
        newBug: {
          creator: "",
          title: "",
          description: ""
        }
      };
    },

    computed: {


    },

    methods: {
      async makeBug() {
        this.$store.dispatch('makeBug', this.newBug)
      },

    },
  }

</script>

<style>
</style>