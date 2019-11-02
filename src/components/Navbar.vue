<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        :class="{'is-active': isNavbarOpen}"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="isNavbarOpen = !isNavbarOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isNavbarOpen}">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>

        <router-link to="/documentation" class="navbar-item">Documentation</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/jobs" class="navbar-item">Jobs</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
            <hr class="navbar-divider" />
            <router-link to="/report" class="navbar-item">Report an issue</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login" class="button is-light">Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavbarOpen: false
    };
  }
};
</script>

<style>
</style>