<template>
  <v-container
    class="h-100 d-flex flex-column ga-8 align-center page-container justify-center bg-blue-lighten-5 pa-4"
  >
    <div class="d-flex flex-column align-center px-4 ga-2">
      <h2 class="text-title-1 text-medium-emphasis text-center">
        Cadastre sua conta
      </h2>
      <p class="text-body-1 text-medium-emphasis text-center">
        Conecte-se com nossa comunidade de vendas!
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
          label="Nome completo"
          prepend-inner-icon="mdi-account"
        ></v-text-field>

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

        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Confirme a senha"
          prepend-inner-icon="mdi-lock-outline"
        ></v-text-field>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          type="submit"
        >
          Cadastrar-se
        </v-btn>
      </v-form>

      <div
        class="pt-4 d-flex flex-column flex-sm-row align-center justify-center ga-2 flex-wrap"
      >
        <p class="text-subtitle-1 text-medium-emphasis ma-0">
          Já possui uma conta?
        </p>
        <a
          class="text-decoration-none text-blue hover-link cursor-pointer"
          @click="handleNavigateToLogin"
        >
          Faça o login aqui
        </a>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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

const handleNavigateToLogin = () => {
  router.push({ path: "/login" });
};

const onSubmit = () => {
  alert(`E-Mail: ${email.value}\nPassword: ${password.value}`);
};
</script>

<style scoped lang="scss" src="./styles.scss"></style>
