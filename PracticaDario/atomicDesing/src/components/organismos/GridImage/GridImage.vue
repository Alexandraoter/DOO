<script setup>
defineProps({
    Component: {
        type: Object,
        required: true
    },
    arrayComponentsProps: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <component v-for="(itemProp, index) in arrayComponentsProps" 
        :key="index" 
        :is="Component" 
        v-bind="itemProp" />
    </div>
</template>

<style scoped>
div {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 37px;
}
</style>



import Card from '@/components/molecules/Card/Card.vue';
import GridImage from './GridImage.vue';
import { components } from 'storybook/internal/components';
import CardStories from '@/components/molecules/Card/Card.stories';

export default {
    title : 'Components/Organismos/GridImage',
    component: GridImage,
    tags: ['autodocs']
    }

    export const Default = {
        args: {
         Component : Card, 
         arrayComponentsProps: [

        { imageUrl1: 'https://image.lexica.art/md2/329c21cb-a228-461d-95d9-53c61aad598e' },
        { imageUrl1: 'https://image.lexica.art/full_jpg/105a9273-f629-4eb1-bd89-c15fadc0d964' },

         ]

        }
    }
    