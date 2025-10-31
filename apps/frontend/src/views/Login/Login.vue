<template>
  <v-container
    class="h-100 d-flex flex-column ga-8 align-center page-container justify-center bg-blue-lighten-5 pa-4"
  >
    <div class="d-flex flex-column align-center px-4 ga-2">
      <h2 class="text-title-1 text-medium-emphasis text-center">
        Bem vindo de volta!
      </h2>
      <p class="text-body-1 text-medium-emphasis text-center">
        Por favor, insira suas credenciais para continuar.
      </p>
    </div>

    <v-sheet
      class="x-auto pa-4 pa-md-8 pa-lg-12 pb-4 pb-md-8"
      elevation="8"
      width="100%"
      max-width="448"
      rounded="lg"
    >
      <v-form fast-fail @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          prepend-inner-icon="mdi-email"
        ></v-text-field>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          v-model="password"
          :rules="passwordRules"
          label="Senha"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis mt-4 mb-2 d-flex justify-end"
        >
          <a
            class="text-caption text-decoration-none text-blue hover-link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu sua senha?</a
          >
        </div>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          type="submit"
        >
          Login
        </v-btn>
      </v-form>

      <div
        class="pt-4 d-flex flex-column flex-sm-row align-center justify-center ga-2 flex-wrap"
      >
        <p class="text-subtitle-1 text-medium-emphasis ma-0">
          Não tem uma conta ainda?
        </p>
        <a
          class="text-decoration-none text-blue hover-link"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cadastre-se aqui</a
        >
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);
const email = ref("");
const emailRules = [
  (value: string) => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    )
      return true;
    return "Insira um e-mail válido.";
  },
];

const password = ref("");
const passwordRules = [
  (value: string) => {
    if (value?.length >= 6) return true;
    return "A senha deve ter no mínimo 6 dígitos.";
  },
];

const onSubmit = () => {
  alert(`E-Mail: ${email.value}\nPassword: ${password.value}`);
};
</script>

<style scoped lang="scss" src="./styles.scss"></style>
