<template>
  <ul class="tasks">
    <li
      v-for="name in names"
      :key="name.id"
      :class="{ completed: name.completed }"
      class="task"
      @click="toggleName(name.id)"
    >
      {{ name.task }}
      <span class="delete" @click="deleteName(name.id)">ⓧ</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    names() {
      return this.$store.getters.getNames;
    }
  },
  methods: {
    toggleName: function(id) {
      this.$store.dispatch("toggleName", id);
    },
    deleteName: function(id) {
      this.$store.dispatch("deleteName", id);
    }
  }
};
</script>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 0.5px solid #999;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
}

.task:before {
  content: "\2002";
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.completed:before {
  content: "\2714";
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
}
</style>
