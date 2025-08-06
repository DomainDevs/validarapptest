<template>
  <div class="filter-location-type">
    <!-- Tipo de oferta -->
    <div class="mb-4">
      <label class="font-bold block mb-1">Tipo de oferta</label>
      <div>
        <label><input type="radio" value="comprar" v-model="filters.tipoOferta" /> Comprar</label>
        <label class="ml-4"><input type="radio" value="arrendar" v-model="filters.tipoOferta" /> Arrendar</label>
      </div>
    </div>

    <!-- Tipo de compra (solo si se selecciona Comprar) -->
    <div class="mb-4" v-if="filters.tipoOferta === 'comprar'">
      <label class="font-bold block mb-1">Tipo de compra</label>
      <select v-model="filters.tipoCompra" class="border px-2 py-1 rounded w-full">
        <option value="ambos">Ambos</option>
        <option value="nuevo">Nuevo</option>
        <option value="usado">Usado</option>
      </select>
    </div>

    <!-- Tipo de inmueble -->
    <div class="mb-4">
      <label class="font-bold block mb-1">Tipo de inmueble</label>
      <div class="grid grid-cols-2 gap-2">
        <label v-for="tipo in tiposInmueble" :key="tipo">
          <input
            type="checkbox"
            :value="tipo"
            v-model="filters.tipoInmueble"
          />
          {{ tipo }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const filters = reactive({
  tipoOferta: props.modelValue?.tipoOferta || '',
  tipoCompra: props.modelValue?.tipoCompra || 'ambos',
  tipoInmueble: props.modelValue?.tipoInmueble || []
})

watch(filters, () => {
  emit('update:modelValue', { ...filters })
}, { deep: true })

const tiposInmueble = [
  'Apartaestudio',
  'Apartamento',
  'Casa',
  'Oficina',
  'Bodega',
  'Consultorio',
  'Local Comercial',
  'Lote',
  'Finca',
  'Edificio de Oficinas',
  'Edificio de Apartamentos'
]
</script>

<style scoped>
.filter-location-type {
  font-family: sans-serif;
}
</style>
