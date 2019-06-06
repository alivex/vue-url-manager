<template>
  <el-table
    v-if="results.length"
    v-loading="showLoader"
    :data="results"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column prop="url" label="URL" />
    <el-table-column prop="title" label="Title" />
    <el-table-column prop="external_links" label="External Links" />
    <el-table-column prop="internal_links" label="Internal Links" />
  </el-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UrlResults",
  computed: {
    ...mapGetters(["results"]),
    showLoader() {
      return this.$store.state.loading;
    }
  }
};
</script>
