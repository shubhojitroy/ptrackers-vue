<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" :class="{ 'grow': growHeader }">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://www.pmcapital.com.au/global-companies-fund">
          <img src="~assets/img/pmcaptalgo2025limited.png" alt="PM Capital Limited">
        </a>
        <!-- <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div> -->
      </div>
      <!-- <div class="navbar-menu has-text-left" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
              <a class="navbar-item is-size-4" href="tel:1300069436">
                1300 069 436
              </a>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        showNav: false,
        growHeader: true
      }
    },
    head () {
      return {
        htmlAttrs: {
          class: "has-navbar-fixed-top"
        }
      }
    },
    methods: {
      handleScroll(event) {
        this.growHeader = (window.scrollY < 40);
      }
    },
    created () {
      // window.addEventListener("scroll", this.handleScroll);
    },
    destroyed () {
      // window.removeEventListener("scroll", this.handleScroll);
    }
  }
</script>

<style lang="scss">
  $brand-color-1: #4A67AB;
  $navigation-bottom-border: #76c4e3;
  $brand-color-1-highlight: saturate($brand-color-1, 20%);

  $header-height: 4.5rem;

  a.navbar-item {
    color: $brand-color-1;

    &:hover {
      color: $brand-color-1-highlight;
    }
  }

  @media screen and (min-width: 1024px) {
    html.has-navbar-fixed-top {
      padding-top: $header-height;
    }
    nav.navbar {
      transition: all 0.2s ease-in;
      height: 3.25rem;
      border-bottom: $navigation-bottom-border 2px solid;
    }
    .navbar-item img {
      transition: all 0.2s ease-in;
      max-height: 2rem;
    }
    nav.grow {
      height: $header-height;

      .navbar-item img {
        max-height: 3rem;
      }
    }
  }
</style>
