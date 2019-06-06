<template>
  <div class="form-group">
    <div class="input-group mb-3">
      <input
        v-model="requestUrl.url"
        :name="input.name"
        :type="input.fieldType"
        class="form-control"
        :placeholder="input.placeholder"
        :disabled="loading"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <el-button
          class="btn btn-primary"
          type="primary"
          @click="handleURL"
          v-loading.fullscreen.lock="loading"
          >Analyze</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UrlInput",
  props: ["input"],
  data() {
    return {
      requestUrl: {
        url: ""
      }
    };
  },
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    handleURL() {
      this.$store.dispatch("manageURL", this.requestUrl);
    }
  }
};
</script>
