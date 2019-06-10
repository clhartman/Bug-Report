<template>
  <div>
    <div class="new-note">
      <form @submit.prevent="makeNote" class="note-form">
        <input type="text" placeholder="Author" v-model="newNote.creator" name="creator" :disabled="bug.closed">
        <input type="text" placeholder="Create a Note" v-model="newNote.content" name="content" :disabled="bug.closed">
        <button type="submit" class="btn btn-primary" :disabled="bug.closed">Submit</button>
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
          <button class="btn btn-success" @click="editNote(note,'completed')" :disabled="bug.closed">Completed</button>
          <button class="btn btn-danger" @click="deleteNote(note, 'rejected')" v-show="notes.flagged !== 'completed'"
            :disabled="bug.closed">Delete</button>
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
          flagged: "pending",
          content: "",
          bug: this.$route.params.id
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
      async editNote(note, flagStatus) {
        note.flagged = flagStatus
        this.$store.dispatch('editNote', note)
      },

      async deleteNote(note, flagStatus) {
        note.flagged = flagStatus
        this.$store.dispatch('deleteNote', note)
      },

    },
    components: {
    }
  }
</script>