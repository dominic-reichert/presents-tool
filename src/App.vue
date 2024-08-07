<template>
  <v-app>
    <NavDrawer></NavDrawer>
    <v-main>
      <v-container>
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavDrawer from './components/layout/navDrawer.vue'
</script>

<style></style>
