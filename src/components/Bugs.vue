<template>
  <div class="col-12">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Bug Name</th>
          <th scope="col">Description</th>
          <th scope="col">Date Created</th>
          <th scope="col">Details</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody v-for="bug in bugs" :key="bug._id">
        <tr>
          <td>{{bug.title}}</td>
          <td>{{bug.description}}</td>
          <td>{{new Date(bug.createdAt).toLocaleDateString()}}</td>
          <td><button type="button" class="btn btn-primary" @click="selectBug(bug._id)">Bug Details</button></td>
          <td v-if="bug.closed == false">Alive</td>
          <td v-if="bug.closed !== false">Exterminated</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Bugs",
    data() {
      return {};
    },

    computed: {
      bugs() {
        return this.$store.state.bugs;
      },

    },

    methods: {

    },
  }

</script>

<style>
</style>