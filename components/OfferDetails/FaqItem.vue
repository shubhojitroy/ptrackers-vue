<template>
  <b-collapse class="message is-primary" :open="isOpen" @open="activateOpen()">
    <div slot="trigger" class="message-header">
        <strong>{{ title }}</strong>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </b-collapse>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  model: {
    prop: 'value',
    event: 'open'
  },
  computed: {
    isOpen () {
      return this.value === this.title
    }
  },
  methods: {
    activateOpen () {
      this.$emit('open', this.title)
    }
  }
}
</script>

<style scoped>

</style>
