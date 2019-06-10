<template>
  <div class="bug-details container-fluid">
    <h1>Bug Details</h1>
    <div class="card text-center bug">
      <div class="card-header">
        <!-- any way to push back to home once bug.closed = true? and then disable the details button? -->
        {{bug.closed ? 'Exterminated' : 'Alive'}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{bug.title}}</h5>
        <p class="card-text">{{bug.description}}</p>
        <!-- bug killed button shows up when all notes are either deleted or completed -->
        <button class="btn btn-primary" @click="closeBug(bug)" :disabled="bug.closed">Bug Killed</button>
      </div>
      <div class="card-footer text-muted">
        Created {{new Date(bug.createdAt).toLocaleDateString()}} by {{bug.creator}}
      </div>
    </div>
    <notes />

  </div>
</template>

<script>

  import Notes from '@/components/Notes.vue'

  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.$route.params.id);
      console.log(this.$route.params.id)
      this.$store.dispatch('getNotes', this.$route.params.id);
    },
    data() {
      return {
        // newNote: {
        //   creator: "",
        //   flagged: "",
        //   content: "",
        //   bug: this.id
        // },
      }
    },
    computed: {
      bug() {
        return this.$store.state.bug
      },
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      closeBug(bug) {
        this.$store.dispatch('closeBug', bug)
      },
    },
    components: {
      Notes,
    }
  }
</script>

<!-- var note = new Schema({
content: { type: String, required: true },
bug: { type: ObjectId, ref: 'Bug' required: true },
creator: { type: String, required: true } //The provided name for who made the note
user: { type: String, required: true },
flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true }) -->