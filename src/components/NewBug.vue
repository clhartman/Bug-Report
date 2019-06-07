<template>
  <div class="new-bug">
    <form @submit.prevent="makeBug" class="new-form">
      <input type="text" placeholder="User Name" v-model="newBug.creator">
      <input type="text" placeholder="Bug Name" v-model="newBug.title">
      <input type="text" placeholder="Bug Description" v-model="newBug.description">
      <button type="submit">Submit</button>
    </form>
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