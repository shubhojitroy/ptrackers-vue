<template>
  <div class="main is-flex">
    <main-nav/>
    <div class="body">
      <hero-section></hero-section>
      <nuxt/>
    </div>
    <footer class="footer">
      <span class="is-size-7">designed by</span>
      <img class="image" src="~assets/img/br-logo.png"/>
    </footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import HeroSection from "~/components/HeroSection.vue"

export default {
  components: {
    MainNav,
    HeroSection
  }
}
</script>

<style lang="scss" scoped>
  .main {
    flex-direction: column;
    height: calc(100vh - 4.5rem);
  }

  .body {
    flex-grow: 1;
    overflow-y: initial;
  }
  .footer {
    position: relative;
    flex: 0 0 48px;
    padding: 1.5rem 1rem;
    background-color: #002046;
    color: white;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image {
      width: 110px;
    }
    span {
      padding-right: 5px;
    }
  }
  @media screen and (max-width: 1023px) {
    .main {
      height: calc(100vh - 3.25rem);
    }
    .body {
      overflow: initial;
    }
  }
</style>
