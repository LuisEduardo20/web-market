<template>
  <div class="fill-height bg-red d-flex align-center justify-center">
    <!-- style="height: 100vh" -->
    <v-sheet
      class="mx-auto pa-12 pb-8"
      elevation="8"
      width="448"
      rounded="lg"
      fill-height
    >
      <v-form fast-fail @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-Mail"
          prepend-inner-icon="mdi-email"
        ></v-text-field>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          v-model="lastName"
          :rules="lastNameRules"
          label="Senha"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis mt-4 d-flex align-center justify-space-between"
        >
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu sua senha?</a
          >
        </div>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
          Login
        </v-btn>
      </v-form>
    </v-sheet>
  </div>
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);
const email = ref("");
const emailRules = [
  (value: string) => {
    if (/[^0-9]/.test(value)) return true;
    return "Insira um e-mail corretamente.";
  },
];

const lastName = ref("123");
const lastNameRules = [
  (value: string) => {
    if (value?.length >= 6) return true;
    return "A senha deve ter no mínimo 6 dígitos.";
  },
];

const onSubmit = () => {
  alert(`E-Mail: ${email.value}\nPassword: ${lastName.value}`);
};

// export default defineComponent({ components: { HelloWorld } });
</script>
