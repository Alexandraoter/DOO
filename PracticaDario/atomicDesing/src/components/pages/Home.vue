<script setup>
import Card from '../molecules/Card/Card.vue';
import GridImages from '../organismos/GridImages/GridImages.vue';
 
  const arrayPropsImages = ref([])
 
  //Se ejecuta cuando monta el componente en el DOM
  onMounted(() => {
    fetchingImages()
  })
 
  const fetchingImages = async() => {
    const response = await fetch('https://lexica.art/api/infinite-prompts');
    if(!response.ok){
      return
    }
    const pathImages = 'https://image.lexica.art/md2/'
    //Obtiene la data del fetch
    const data = await response.json()
    //Obtener array de imagenes
    const images = data.images
    arrayPropsImages.values = images.map((img) => ({imageUrl: `${pathImages}${img.id}`}))
  }
 
</script>
 
<template>
   <GridImages
    :arrayComponentsProps="arrayPropsImages"
    :Component="Card"
/>
</template>
 
<style scoped>
 
</style>
 
 