<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Greeting' as string,
  data(): { greeting: string } {
    return {
      greeting: 'Vue and TDD' as string,
    };
  },
});
</script>
