<template>
  <main>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }} {{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "CreativevuePost",

  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        this.posts = response.data;
      });
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
