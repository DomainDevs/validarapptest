

<template>
  <div class="home-container">
    <div class="sidebar">
      <!-- Menú de búsqueda o filtros -->
      <FilterPanel />
      <!-- Aquí puedes poner filtros reales luego -->
        <button class="btn">Buscar</button>
    </div>
    
    <!-- lista de viviendas-->
    <div class="property-list">
      <PropertyList />
    </div>
  </div>
</template>

<script setup>
import PropertyList from '@/views/components/PropertyList.vue'

import FilterPanel from '@/components/filters/FilterPanel.vue'
import { ref, onMounted } from 'vue'

const properties = ref([])

onMounted(async () => {
  const response = await fetch('/homes.json')
  properties.value = await response.json()
})
</script>

<style scoped>
.home-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.sidebar {
  flex: 1 1 250px;
  max-width: 300px;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}

.property-list {
  flex: 2 1 600px;
  min-width: 300px;
}
.input {
  display: block;
  width: 100%;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.btn:hover {
  background-color: #0056b3;
}
</style>
