<template>
  <div>{{ numbers }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NumberRenderer' as string,
  props: {
    even: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    numbers(): string {
      const evens: number[] = [];
      const odds: number[] = [];

      for (let i = 1; i < 10; i += 1) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return this.even ? evens.join(', ') : odds.join(', ');
    },
  },
});
</script>
