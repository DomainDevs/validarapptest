<template>
  <CarruselImagenes v-if="propiedad" :imagenes="propiedad.imagenes" />
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { LucideBed, LucideBath, LucideCar } from 'lucide-vue-next';
import CarruselImagenes from '@/components/CarruselImagenes.vue'

const route = useRoute()
const propiedad = ref(null)

onMounted(async () => {
  const res = await fetch('/properties.json')
  const propiedades = await res.json()

  propiedad.value = propiedades.find(p => String(p.id) === String(route.params.id))
})
</script>
