<template>
  <b-collapse class="message is-primary" :open="isOpen" @open="activateOpen()">
    <div slot="trigger" class="message-header">
      <strong>
        <template v-if="title">
          {{ title }}
        </template>
        <slot v-else name="title"></slot>
      </strong>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </b-collapse>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'open'
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    keyValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    keyVal () {
      return (this.title == '') ? this.keyValue : this.title;
    },
    isOpen () {
      return this.value === this.keyVal;
    }
  },
  methods: {
    activateOpen () {
      this.$emit('open', this.keyVal);
    }
  }
};
</script>

<style scoped>
.message-header {
  background-color: #2f4c5e;
}
</style>
