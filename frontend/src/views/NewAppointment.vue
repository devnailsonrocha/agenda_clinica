<script setup lang="ts">
import { ref } from "vue";
import { api } from "../services/api";

const date = ref("");
const time = ref("");
const cep = ref("");
const address = ref("");

async function handleCep() {
  if (cep.value.length === 8) {
    // Aqui você chamaria sua rota de backend que usa o ViaCEP
    const res = await api.get(`/cep/${cep.value}`);
    address.value = `${res.data.logradouro}, ${res.data.bairro}`;
  }
}

async function save() {
  await api.post("/appointments", {
    date: date.value,
    time: time.value,
    cep: cep.value,
    address: address.value
  }, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  });
  alert("Agendado!");
}
</script>

<template>
    <div class="container">
        <div>
            <h2>Prenncha todos os dados</h2>
        </div>
        <div class="content">
          <input v-model="date" type="date" />
          <input v-model="time" type="time" />
          <input v-model="cep" @blur="handleCep" placeholder="Digite o CEP" />
          <input v-model="address" placeholder="Endereço Automático" readonly />
          <button @click="save">Agendar Consulta</button>
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
    flex-direction: column;
    }

    .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    }
</style>