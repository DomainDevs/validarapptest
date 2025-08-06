<template>
  <div class="pagination">
    <button :disabled="page <= 1" @click="$emit('changePage', page - 1)">◀</button>

    <button
      v-for="p in totalPages"
      :key="p"
      :class="{ active: p === page }"
      @click="$emit('changePage', p)"
    >
      {{ p }}
    </button>

    <button :disabled="page >= totalPages" @click="$emit('changePage', page + 1)">▶</button>
  </div>
</template>

<script setup>
defineProps({ page: Number, totalPages: Number })
defineEmits(['changePage'])
</script>

<style scoped>
.pagination {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 2rem;
}

button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin: 3px;
  min-height: 40px;
}

button.active {
  background-color: #1b84f5;
  color: white;
  font-weight: bold;
}

button:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}
</style>
