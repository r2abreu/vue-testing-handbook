<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not authorized</span>
    <button>
      {{ msg }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SubmitButton',
  props: {
    msg: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
