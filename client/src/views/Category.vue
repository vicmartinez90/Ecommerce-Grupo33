<template>
  <BasicLayouts>
    <h2>Estamos en la categoria</h2>
  </BasicLayouts>
</template>

<script>
import { onMounted } from 'vue';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { getCategoriesApi } from '../api/category';
export default {
  name: 'Category',
  components: {
    BasicLayouts,
  },
  watch: {
    $router(to, from) {
      console.log(to);
    },
  },
  setup() {
    onMounted(async () => {
      const response = await getCategoriesApi('fitness');
      console.log(response);
    });
  },
};
</script>

<style></style>
