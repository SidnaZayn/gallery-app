<template>
    <div class="fixed z-999 w-screen h-screen bg-black-o-75">
        <div class="absolute top-0 left-0 w-full h-full font-yeseva text-white  " @click="$emit('close')">x</div>
        <img :src="imageLink" alt="asfsad" class="p-8 h-screen mx-auto opacity-100">
    </div>
</template>

<script setup>
const props = defineProps({
    imageLink: String
});
</script>

<style>
.z-999{
  z-index: 999;
}

.bg-black-o-75{
  background-color: rgba(0, 0, 0, 0.95);
}
</style>