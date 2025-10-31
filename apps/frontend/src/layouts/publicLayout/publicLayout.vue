<template>
  <v-app>
    <v-main>
      <v-container class="w-100 h-100 page-wrapper">
        <RouterView v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped lang="scss" src="./styles.scss"></style>
