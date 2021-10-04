<template>
  <BasicLayouts>
    <h2>Hola Mundo</h2>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { getProducts } from '../api/products';
export default {
  name: 'Home',
  components: {
    BasicLayouts,
  },

  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      console.log(response);
    });
    return {
      products,
    };
  },
};
</script>
