<template>
  <div class="container">
    <h1>Name List</h1>
    <div id="app">
      <div>
        <NewName/>
        <NameList/>
      </div>
    </div>
  </div>
</template>

<script>
import NewName from "@/components/NewName.vue";
import NameList from "@/components/NameList.vue";

export default {
  components: {
    NewName,
    NameList
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #1668bb 25%, red);
  height: 100%;
  color: #333;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  margin-top: 0;
}

</style>
