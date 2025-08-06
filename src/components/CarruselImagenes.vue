<template>
  <Splide :options="options" aria-label="Galería de imágenes">
    <SplideSlide v-for="(img, index) in imagenes" :key="index">
      <img :src="img" class="w-full h-auto object-cover rounded-lg" />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const props = defineProps({
  imagenes: {
    type: Array,
    required: true
  }
})

const options = {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  pauseOnHover: true,
  arrows: true,
  pagination: true,
  height: '400px',
}
</script>
