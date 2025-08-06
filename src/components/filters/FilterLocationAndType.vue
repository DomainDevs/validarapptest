<template>
  <div class="filter-group">
    <h3>Ubicación y tipo</h3>

    <!-- Tipo de oferta -->
    <label for="offerType">Tipo de oferta:</label>
    <select v-model="offerType" id="offerType">
      <option value="arrendar">Arrendar</option>
      <option value="comprar">Comprar</option>
    </select>

    <!-- Tipo de compra -->
    <div v-if="offerType === 'comprar'" class="field">
      <label for="purchaseType">Tipo de compra:</label>
      <select v-model="purchaseType" id="purchaseType">
        <option value="nuevo">Nuevo</option>
        <option value="usado">Usado</option>
        <option value="ambos">Ambos</option>
      </select>
    </div>

    <!-- Tipo de inmueble -->
    <div class="field">
      <label>Tipo de inmueble:</label>
      <div class="checkbox-list">
        <div v-for="(option, index) in propertyTypes" :key="index">
          <input
            type="checkbox"
            :id="`property-${index}`"
            :value="option"
            v-model="selectedPropertyTypes"
          />
          <label :for="`property-${index}`">{{ option }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const offerType = ref('arrendar')
const purchaseType = ref('nuevo')

const propertyTypes = [
  'Aparta estudio',
  'Apartamento',
  'Casa',
  'Oficina',
  'Bodega',
  'Consultorio',
  'Local comercial',
  'Lote',
  'Finca',
  'Edificio de oficinas',
  'Edificio de apartamentos'
]

const selectedPropertyTypes = ref([])
</script>

<style scoped>
.filter-group {
  margin-bottom: 20px;
}

.field {
  margin-top: 10px;
}

.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
