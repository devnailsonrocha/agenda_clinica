<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "../services/api";
import { useRouter } from "vue-router"; // Adicionado para poder redirecionar

interface Appointment {
  _id: string;
  date: string;
  time: string;
  cep: string;
  address: string;
}

const appointments = ref<Appointment[]>([]);
const router = useRouter(); // Inicializa o roteador

async function loadAppointments() {
  try {
    const token = localStorage.getItem("token");

    // Se não houver token, nem tenta a requisição e manda para o login
    if (!token) {
      router.push("/");
      return;
    }

    const res = await api.get("/appointments", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    appointments.value = res.data;
  } catch (error) {
    console.error("Erro ao carregar consultas:", error);
    
    // Se der erro (ex: token inválido ou expirado), limpa o token e volta ao login
    localStorage.removeItem("token");
    router.push("/");
  }
}

onMounted(loadAppointments);
</script>

<template>
  <div class="container">
    <div class="content">
      <h2>Consultas</h2>
  
      <!-- Adicione apenas estas 3 linhas abaixo -->
      <router-link to="/novo-agendamento">
        <button style="margin-bottom: 20px;">Agendar Nova Consulta</button>
      </router-link>
  
      <ul v-if="appointments.length > 0">
        <li v-for="item in appointments" :key="item._id">
          {{ item.date }} - {{ item.time }} (CEP: {{ item.cep }})
        </li>
      </ul>
      <p v-else>Nenhuma consulta agendada.</p>
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