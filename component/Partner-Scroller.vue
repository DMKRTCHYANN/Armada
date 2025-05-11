<template>
  <Flicking
      :plugins="plugins"
      :options="{ circular: true  }"
      class="flicking-viewport"
      style="width: 100%; overflow: hidden; position: relative;"
  >
    <div class="plugins-panel" v-for="(image, index) in images" :key="index">
      <img class="panel-image" :src="image" alt="Flicking Image" />
    </div>
  </Flicking>
</template>

<script setup>
import {AutoPlay} from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import {tryUseNuxtApp} from "#app";

const images = [
  "/images/partner-img-1.png",
  "/images/partner-img-2.png",
  "/images/partner-img-3.png",
  "/images/partner-img-4.png",
  "/images/partner-img-5.png",
  "/images/partner-img-6.png",
  "/images/partner-img-7.png",
  "/images/partner-img-8.png",
  "/images/partner-img-9.png",
  "/images/partner-img-10.png",
  "/images/partner-img-11.png",
  "/images/partner-img-12.png",
  "/images/partner-img-13.png",
  "/images/partner-img-14.png",
  "/images/partner-img-15.png",
  "/images/partner-img-16.png",
  "/images/partner-img-17.png",
  "/images/partner-img-18.png",
  "/images/partner-img-19.png",
  "/images/partner-img-20.png",
  "/images/partner-img-21.png",
  "/images/partner-img-22.png",
  "/images/partner-img-23.png",
];
const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })];

</script>

<style scoped>
.flicking-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.plugins-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  flex-shrink: 0;
}

.panel-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: border 0.3s ease;
  border: 2px solid transparent;
  user-select: none ;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>