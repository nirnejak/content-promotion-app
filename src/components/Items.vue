<template>
  <div class="table-container">
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>S No</th>
          <th v-if="type === 'reddit'">Subreddit</th>
          <th v-if="type === 'facebook'">Group/Pages</th>
          <th v-if="type === 'linkedin'">Groups</th>
          <th v-if="['quora', 'stackoverflow'].includes(type)">Threads</th>
          <th v-if="type === 'medium'">Blogs</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for="index in 5" :key="index" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "Items",
  components: { Item },
  props: ["type"]
};
</script>

<style>
</style>