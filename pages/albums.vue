<template>
    <div>
        <div class="text-center">
            <h1 class="text-4xl font-bold font-kode_mono uppercase">The <br> Albums</h1>
        </div>
        <div class="h-screen w-screen grid grid-cols-6">
            <AlbumCards component-id="1" :cover-imgs="coverImgs" />
            <AlbumCards component-id="2" :cover-imgs="coverImgs" />
        </div>
    </div>
</template>

<script setup>
const coverImgs = [
    {
        img:'./lake.jpg',
        id:'1'
    },
    {
        img:'./lake.jpg',
        id:'2'
    },
    {
        img:'./lake.jpg',
        id:'3'
    },
    {
        img:'./lake.jpg',
        id:'4'
    },
]
</script>