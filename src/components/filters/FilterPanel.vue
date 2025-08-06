<template>
  <div class="filter-panel">
    <h2>Filtros</h2>
    <FilterLocationAndType />
    <FilterPrice />
  </div>
</template>

<script setup>
import FilterLocationAndType from './FilterLocationAndType.vue'
import FilterPrice from './FilterPrice.vue'
</script>

<style scoped>
.filter-panel {
  width: 300px;
  flex-shrink: 0;
  background-color: #f7f7f7;
  padding: 15px;
  border-radius: 8px;
}
</style>
