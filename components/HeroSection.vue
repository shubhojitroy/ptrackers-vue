<template>
  <section class="animate hero" :class="{ final: show }">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-2 is-size-3-mobile">
          PM Capital Go 2025
        </h1>
        <h2 class="subtitle is-size-3 is-size-4-mobile">
          Priority Entitlement
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      showHeader: function () {
        this.show = true;
      }
    },
    mounted () {
      setTimeout(() => {
        this.showHeader()
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(~/assets/img/heroimage.png);
  background-size: cover;
  background-position: top;
}

.title {
  color: white;
  opacity: 0;
}
.subtitle {
  color: lightgray;
  opacity: 0;
}

.animate {
  transition: all 5s ease-out;

  .title {
    transition: all 1s;
  }
  .subtitle {
    transition: all 3s;
    transition-delay: .5s;
  }
}

@media screen and (max-width: 1024px) {
  .hero-body {
   padding: 2rem 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .hero-body {
    padding: 1rem 1.5rem;
  }
}

@media screen and (max-width: 530px) {
  .hero-body {
    padding: .8rem 0.5rem;
  }
  .title {
    font-size: 1.5rem !important;
  }
  .subtitle {
    font-size: 1rem !important;
  }
}

.final {
  background-position: center;
  .title, .subtitle {
    opacity: 1;
  }
}

</style>
