<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="row">
          <div class="column">
            <h1 class="title">Project Spam</h1>
            <h2 class="subtitle">Spam Everybody</h2>
          </div>
          <div class="column">
            <div class="field has-addons">
              <div class="control is-expanded is-loading has-icons-left">
                <input type="text" class="input" placeholder="Link to Blog..." />
                <span class="icon is-small is-left">
                  <i class="fas fa-link" />
                </span>
              </div>
              <div class="control">
                <a class="button is-primary">Search</a>
              </div>
            </div>
          </div>
        </div>
        <Tabs @changeTab="changeTab" :activeTab="activeTab" />
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from "../components/Tabs";

export default {
  name: "home",
  components: { Tabs },
  data() {
    return {
      activeTab: "reddit"
    };
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>
