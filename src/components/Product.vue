<template>
    <div class="flex flex-col w-1/4 h-auto bg-white px-5 py-5 mx-10 my-5 shadow-lg">
        <div class="text-center">
            <p> <span class="font-medium">{{ product.brand }}</span> {{ product.name }} </p>
        </div>
        <img class="w-full h-32 object-contain mx-auto" :src="product.firstImage">
        <div class="py-3 text-center">
            <p class="text-green-500"> ${{ product.price }} </p>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-16 rounded">
            Add to Cart
        </button>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: Object
    }
}
</script>

<style>

</style>