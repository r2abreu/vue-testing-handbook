<template>
  <div>
    <form @submit.prevent="">
      <input v-model="username" type="text" />
      <button @click="onClick">Click Me</button>
    </form>
    <div class="message" v-if="submitted">Thank you for your submission, {{ username }}.</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormSubmitter',
  data() {
    return {
      username: '',
      submitted: false,
    };
  },
  methods: {
    onClick() {
      this.submitted = !this.submitted;
    },
  },
});
</script>
