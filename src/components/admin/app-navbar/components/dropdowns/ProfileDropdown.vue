<template>
  <va-dropdown
    class="profile-dropdown"
    v-model="isShown"
    boundary-body
    offset="0, 16px"
  >
    <span
      class="profile-dropdown__anchor" slot="anchor"
      :style="{color: this.$themes.primary}"
    >
      <slot/>
      <va-icon
        class="pa-1"
        :name="`fa ${isShown ? 'fa-angle-up' :'fa-angle-down'}`"
      />
    </span>
    <div class="profile-dropdown__content pl-4 pr-4 pt-2 pb-2">
        <span
        v-on:click="profile"
        class="profile-dropdown__item pt-1 pb-1 mt-2 mb-2"
      >
        {{ $t(`user.${'profile'}`) }}
      </span>
      <span
        v-on:click="logout"
        class="profile-dropdown__item pt-1 pb-1 mt-2 mb-2"
      >
        {{ $t(`user.${'logout'}`) }}
      </span>
    </div>
  </va-dropdown>
</template>

<script>
import * as servicesModule0 from '../../../../../app/module0/services'

export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
    }
  },
  methods: {
    profile() {
      alert('profile page not found :/');
    },
    logout() {
      servicesModule0.logout(); // logout first to clear cache
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style lang="scss">

.profile-dropdown {
  cursor: pointer;

  &__anchor {
    color: $vue-green;
  }

  .va-dropdown-popper__anchor {
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    width: 8rem;
  }

  &__item {
    display: block;
    color: $vue-darkest-blue;

    &:hover,
    &:active {
      color: $vue-green;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
