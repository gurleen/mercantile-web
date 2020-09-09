<template>
  <div class="container mx-auto px-3 py-10 bg-gray-200 h-screen">
    <div class="flex flex-row flex-wrap justify-around">
      <Product v-for="product in $store.getters.products" v-bind:key="product.id" :product="product"></Product>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'Index',
  props: {
    msg: String
  },
  components: {
    Product
  },
  data: function() {
    return {
      message: "Hello, world!"
    }
  },
  mounted: function () {
    this.$store.dispatch('fetchProducts')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
