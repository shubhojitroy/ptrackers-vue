<template>
  <div>
    <div class="container">
      <section class="canvas">
    <div class="container box">
      <h1 class="title">Legal Restrictions</h1>
      <div class="content">
        <p>
          Unfortunately, legal restrictions prevent us from allowing you access to this part of the website.
        </p>
        <p>
          If you have any questions, please contact us by email by clicking on
          <a href="mailto:corporateactions@boardroomlimited.com.au">this&nbsp;link</a>.
        </p>
      </div>

      <nuxt-link to="/" class="button is-primary">
        Back
      </nuxt-link><br>
    </div>
  </section>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.canvas {
  z-index: 50;
  /* padding: 1rem; */
  background: #fff 50%;
  background-size: cover;
  border-radius: 1px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.5s ease;
}
.alert-bound {
  width: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.0rem;
}
</style>
