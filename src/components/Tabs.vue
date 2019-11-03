<template>
  <div class="row">
    <div class="column">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.name"
            :class="{'is-active': activeTab === tab.name}"
            @click="$emit('changeTab', tab.name)"
          >
            <a>
              <span class="icon is-small">
                <i :class="`fab ${tab.icon}`" aria-hidden="true" />
              </span>
              <span>{{tab.label}}</span>
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
  data() {
    return {
      tabs: [
        {
          name: "reddit",
          label: "Reddit",
          icon: "fa-reddit-alien"
        },
        {
          name: "facebook",
          label: "Facebook",
          icon: "fa-facebook-f"
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          icon: "fa-linkedin-in"
        },
        {
          name: "quora",
          label: "Quora",
          icon: "fa-quora"
        },
        {
          name: "stackoverflow",
          label: "StackOverflow",
          icon: "fa-stack-overflow"
        },
        {
          name: "medium",
          label: "Medium",
          icon: "fa-medium-m"
        }
      ]
    };
  }
};
</script>

<style>
</style>