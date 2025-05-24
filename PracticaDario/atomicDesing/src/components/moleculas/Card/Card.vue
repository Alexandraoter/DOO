 <script setup>
    defineProps({
        imageUrl1: {
            type: String,
            required: true
        }
    })
</script>

<template>
  <article>
    <img :src="imageUrl1"/>
  </article>
</template>

<style scoped>
    article{
        width: 100%;
        max-width: 320px;
        height: 260%;
        border: 4px solid #ffffff;
        border-radius: 21px;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

</style>
