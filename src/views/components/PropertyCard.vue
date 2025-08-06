<template>
  <div class="property-card">
    <router-link :to="`/detalle/${property.id}`">
      <img :src="property.image" alt="Imagen propiedad" />
    </router-link>
    <div>
      <h3>${{ property.price?.toLocaleString() }}</h3>
    </div>

    <strong>{{ property.address || property.title }}</strong>
    <p>{{ property.location }}</p>

    <ul class="features">
      <li>
        <BedIcon class="icon" />
        {{ property.bedrooms }}
      </li>
      <li>
        <BathIcon class="icon" />
        {{ property.bathrooms }}
      </li>
      <li>
        <RulerIcon class="icon" />
        {{ property.area }} m²
      </li>
      <li v-if="property.parkingSpaces > 0">
        <CarIcon class="icon" />
        {{ property.parkingSpaces }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { BedIcon, BathIcon, RulerIcon, CarIcon } from 'lucide-vue-next'
defineProps({ property: Object })
</script>

<style scoped>
.property-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  background: white;
  transition: box-shadow 0.2s ease;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
.property-card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.property-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
.property-card .features {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  align-items: center;
}
.property-card .icon {
  width: 20px;
  height: 20px;
  stroke: black;
  margin-right: 0.5rem;
}
</style>
