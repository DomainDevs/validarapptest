<template>
  <div class="results-list__properties">
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
    />
    <PaginationControl
      :page="page"
      :totalPages="totalPages"
      @changePage="fetchData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PropertyCard from './PropertyCard.vue'
import PaginationControl from './PaginationControl.vue'

// Simulamos un fetch
const properties = ref([])
const page = ref(1)
const totalPages = ref(5)

const fetchData = async (newPage = 1) => {
  page.value = newPage
  // API simulada (puedes reemplazarla con una real o un archivo local)
  //https://api.sampleapis.com/realestate/homes
  const res = await fetch(`/homes.json`)
  const data = await res.json()

  // Paginación local (10 por página)
  const pageSize = 10
  const start = (newPage - 1) * pageSize
  properties.value = data.slice(start, start + pageSize)
  totalPages.value = Math.ceil(data.length / pageSize)
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.results-list__properties {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
