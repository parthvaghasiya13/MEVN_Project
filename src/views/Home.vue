<template>
  <div class="custom-home">
    <Gallery />
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue";

export default {
  name: "home",
  components: {
    Gallery
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // Title
        document.title = to.meta.title || "Fii USA - Gallery";
      }
    }
  }
};
</script>

