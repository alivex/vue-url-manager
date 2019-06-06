<template>
  <div id="app">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <url-input :input="this.urlInput" />
      <url-results />
    </div>
  </div>
</template>

<script>
import UrlInput from "./components/UrlInput.vue";
import UrlResults from "./components/UrlResults.vue";

export default {
  name: "app",
  data() {
    return {
      urlInput: {
        name: "urlInput",
        label: "Your URL",
        fieldType: "text",
        required: true,
        placeholder: "Your URL: https://www.example.com"
      },
      msg: "Welcome to URL Manager"
    };
  },
  components: {
    UrlInput,
    UrlResults
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
