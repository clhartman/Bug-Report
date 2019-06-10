<template>
  <div>
    <div class="new-note">
      <form @submit.prevent="makeNote" class="note-form">
        <input type="text" placeholder="Author" v-model="newNote.creator" name="creator">
        <input type="text" placeholder="Create a Note" v-model="newNote.content" name="content">
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <table class=" table table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Description</th>
          <th scope="col">Date Created</th>
          <th scope="col">Status</th>
          <th scope="col">Note Update</th>
        </tr>
      </thead>
      <tbody v-for="note in notes" :key="note._id">
        <tr>
          <td>{{note.creator}}</td>
          <td>{{note.content}}</td>
          <td>{{new Date(note.createdAt).toLocaleDateString()}}</td>
          <td>{{note.flagged}}</td>
          <button class="btn btn-success" @click="editNote('completed')">Completed</button>
          <button class="btn btn-danger" @click="deleteNote('rejected')"
            v-show="notes.flagged !== 'completed'">Delete</button>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: "Notes",
    props: ["note"],
    data() {
      return {
        newNote: {
          creator: "",
          flagged: "",
          content: "",
          bug: this.id
        },
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.bug
      },
    },
    methods: {
      selectNote(id) {

      },
      async makeNote() {
        this.$store.dispatch('makeNote', this.newNote)
      },
      editNote(flagStatus) {
        this.note.flagged = flagStatus
        this.$store.dispatch('editNote', this.note)
      },

      deleteNote(flagStatus) {
        this.note.flagged = flagStatus
        this.$store.dispatch('deleteNote', this.note)
      },

    },
    components: {
    }
  }
</script>