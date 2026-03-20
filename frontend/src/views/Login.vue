<script setup lang="ts">
import { ref } from "vue";
import { api } from "../services/api";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  const res = await api.post("/login", {
    email: email.value,
    password: password.value
  });

  localStorage.setItem("token", res.data.token);

  router.push("/dashboard");
}
</script>

<template>
  <div class="container">
    <div class="content">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button @click="login">Entrar</button>
  </div>
  </div>

</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
</style>