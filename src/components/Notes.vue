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
          <th scope="col">Note Completed</th>
          <th scope="col">Delete Note</th>
        </tr>
      </thead>
      <tbody v-for="note in notes" :key="note._id">
        <tr>
          <td>{{note.creator}}</td>
          <td>{{note.content}}</td>
          <td>{{new Date(note.createdAt).toLocaleDateString()}}</td>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
              data-toggle="dropdown">
              Update Status
            </button>
            <div class="dropdown-menu">
              <p class="dropdown-item" @click="editNote('pending')">Pending</p>
              <p class="dropdown-item" @click="deleteNote('rejected')">Delete Note</p>
              <p class="dropdown-item" @click="editNote('completed')">Note is Completed</p>
            </div>
          </div>
          <!-- should switch to completed when dropdown is selected -->
          <td>Pending</td>
          <td>
            <!-- <router-link class=" btn btn-primary" :to="{ name: 'note', params: {id: note._id}}">Note Status
        </router-link> -->
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
    props: ["id"],
    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.bug
      },
    },
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
    methods: {
      selectNote(id) {

      },
      async makeNote() {
        this.$store.dispatch('makeNote', this.newNote)
      },
    },
    components: {
    }
  }
</script>