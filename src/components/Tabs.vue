<template>
  <div class="row">
    <div class="column">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li :class="{'is-active': activeTab === 'reddit'}" @click="$emit('changeTab', 'reddit')">
            <a>
              <span class="icon is-small">
                <i class="fab fa-reddit-alien" aria-hidden="true" />
              </span>
              <span>Reddit</span>
            </a>
          </li>
          <li
            :class="{'is-active': activeTab === 'facebook'}"
            @click="$emit('changeTab', 'facebook')"
          >
            <a>
              <span class="icon is-small">
                <i class="fab fa-facebook-f" aria-hidden="true" />
              </span>
              <span>Facebook</span>
            </a>
          </li>
          <li
            :class="{'is-active': activeTab === 'linkedin'}"
            @click="$emit('changeTab', 'linkedin')"
          >
            <a>
              <span class="icon is-small">
                <i class="fab fa-linkedin-in" aria-hidden="true" />
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
          <li :class="{'is-active': activeTab === 'quora'}" @click="$emit('changeTab', 'quora')">
            <a>
              <span class="icon is-small">
                <i class="fab fa-quora" aria-hidden="true" />
              </span>
              <span>Quora</span>
            </a>
          </li>
          <li
            :class="{'is-active': activeTab === 'stackoverflow'}"
            @click="$emit('changeTab', 'stackoverflow')"
          >
            <a>
              <span class="icon is-small">
                <i class="fab fa-stack-overflow" aria-hidden="true" />
              </span>
              <span>StackOverflow</span>
            </a>
          </li>
          <li :class="{'is-active': activeTab === 'medium'}" @click="$emit('changeTab', 'medium')">
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
</template>

<script>
export default {
  name: "Tabs",
  props: ["activeTab"],
  created() {
    console.log(this.activeTab);
  }
};
</script>

<style>
</style>