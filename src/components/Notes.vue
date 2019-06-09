<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Description</th>
          <th scope="col">Date Created</th>
          <th scope="col">Details</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody v-for="note in notes" :key="note._id">
        <tr>
          <td>{{note.creator}}</td>
          <td>{{note.content}}</td>
          <td>{{new Date(note.createdAt).toLocaleDateString()}}</td>
          <td>
            <router-link class="btn btn-primary" :to="{ name: 'note', params: {id: note._id}}">Note Status</router-link>
          </td>
          <!-- <td>{{note.closed ? 'Exterminated' : 'Alive'}}</td> -->
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: "Notes",
    props: [],
    data() {
      return {}
    },
    computed: {
      notes() {
        return this.$store.state.notes
      },
    },
    methods: {
      selectNote(id) {

      },
    },
    components: {}
  }
</script>