<template>
    <div class="options-container" >
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="$emit('selection', option.id)">{{ option.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            options:{
                required:true,
            }
        }
    }
</script>

<style scoped>

</style>