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
        <div class="row">
          <div class="column">
            <div class="tabs is-boxed is-centered">
              <ul>
                <li class="is-active">
                  <a>
                    <span class="icon is-small">
                      <i class="fab fa-reddit-alien" aria-hidden="true" />
                    </span>
                    <span>Reddit</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small">
                      <i class="fab fa-facebook-f" aria-hidden="true" />
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small">
                      <i class="fab fa-quora" aria-hidden="true" />
                    </span>
                    <span>Quora</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small">
                      <i class="fab fa-stack-overflow" aria-hidden="true" />
                    </span>
                    <span>StackOverflow</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small">
                      <i class="fab fa-medium-m" aria-hidden="true" />
                    </span>
                    <span>Medium</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
