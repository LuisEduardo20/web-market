<template>
  <v-app>
    <v-main>
      <v-container class="page-wrapper">
        <RouterView
          class="w-100 h-100"
          style="height: calc(100vh) !important"
          v-slot="{ Component }"
        >
          <div class="page-wrapper">
            <transition name="slide" mode="out-in">
              <component :is="Component" :key="$route.path" />
            </transition>
          </div>
        </RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped lang="scss" src="./styles.scss"></style>
