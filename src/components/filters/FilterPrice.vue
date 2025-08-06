<template>
  <div class="filter-section">
    <h3>Precio</h3>
    <input v-model="minPrice" type="number" placeholder="Mínimo" />
    <input v-model="maxPrice" type="number" placeholder="Máximo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const minPrice = ref('')
const maxPrice = ref('')
</script>

<style scoped>
.filter-section {
  margin-bottom: 20px;
}
input {
  width: 100%;
  margin-top: 5px;
  padding: 8px;
}
</style>
