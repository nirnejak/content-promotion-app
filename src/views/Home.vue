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
            <form @submit="submitHandler">
              <div class="field has-addons">
                <div class="control is-expanded is-loading has-icons-left">
                  <input type="text" class="input" placeholder="Link to Blog..." required />
                  <span class="icon is-small is-left">
                    <i class="fas fa-link" />
                  </span>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Tabs @changeTab="changeTab" :activeTab="activeTab" />
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from "../components/Tabs";
import axios from "axios";

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
    },
    submitHandler(event) {
      event.preventDefault();

      axios
        .get("/reddit")
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
