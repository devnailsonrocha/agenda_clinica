<script setup lang="ts">
import { ref } from "vue";
import { api } from "../services/api";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

async function register() {
  try {
    await api.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      role: "patient"
    });

    alert("Cadastro realizado com sucesso!");
    router.push("/");
  } catch (error) {
    alert("Erro ao cadastrar");
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title">
          <h2>Cadastro</h2>
      </div>

    <input v-model="name" placeholder="Nome" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />

    <button @click="register">Cadastrar</button>

    <div class="subtitle">
      <p>
      Já tem conta?
      <router-link to="/">Fazer login</router-link>
    </p>
    </div>

    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
</style>