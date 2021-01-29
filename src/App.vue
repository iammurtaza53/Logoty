<template>
  <v-app>
    <v-main>
      <Wizard/>
    </v-main>
  </v-app>
</template>

<script>
import Wizard from './components/wizard.vue';

export default {
  name: 'App',

  components: {
    Wizard,
  },

  data: () => ({
    //
  }),
};
</script>
