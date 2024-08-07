<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="Herr Lauch"
      nav
    >
      <template v-slot:append>
        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <RouterLink to="/">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="home"
          class="nav-item"
        >
        </v-list-item>
      </RouterLink>
      <RouterLink to="/user1">
        <v-list-item
          prepend-icon="mdi-account"
          title="User 1"
          value="account"
          class="nav-item"
        ></v-list-item>
      </RouterLink>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(false)
</script>

<style></style>
