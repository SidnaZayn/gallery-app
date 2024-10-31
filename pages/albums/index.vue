<template>
  <div class="flex justify-center items-center h-[100vh]">
    <div class="w-10/12 mx-auto h-[50%] bg-white dark:bg-slate-800 rounded-xl shadow-2xl">
      <div class="p-6 md:p-10 h-[100%]">
        <div class="text-center mb-10">
          <h1 class="text-5xl font-yeseva tracking-widest">Thè Albums</h1>
        </div>
        <!-- {{ new_albums }} -->
        <div class="w-full grid gap-x-24 gap-y-20 justify-center items-center" :class="isMobile ? 'grid-cols-2' : 'grid-cols-4'">
          <template v-for="(album, i) in newAlbum" :key="i">
            <AlbumCards
              :component-id="i"
              :cover-imgs="album.imgs"
              :title="album.group"
              @click="albumClick(album.group)"
            ></AlbumCards>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import transitionConfig from '../../helpers/transitionConfig';

definePageMeta({
  pageTransition: transitionConfig,
});

const { width } = useWindowSize();
const router = useRouter();
const isMobile = computed(() => width.value < 768);

const albums = import.meta.glob("../../public/albums/**/*", {
  query: "?url",
  import: "default",
});

const newAlbum = computed(() => {
  let group_args;
  let ret = [];
  let idx = 0;

  const new_albums = Object.keys(albums)
    .map((album) => {
      const al = album.replace("../../public/albums/", "");
      const [group, id] = al.split("/");
      return group.split(".").length > 1 ? null : { group, id };
    })
    .filter(Boolean);

  new_albums.forEach((album, i) => {
    if (album.group === group_args) {
      idx++;
      const imgs = { img: album.group + "/" + album.id, id: idx };
      ret[ret.length - 1].imgs.push(imgs);
    } else {
      idx = 1;
      group_args = album.group;
      const a = {
        group: album.group,
        imgs: [{ img: album.group + "/" + album.id, id: idx }],
      };
      ret.push(a);
    }
  });
  return ret;
});

const albumClick = (group) => {
  router.push("/albums/" + group);
};
</script>
