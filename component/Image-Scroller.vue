<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <div
        class="plugins-panel bg-cover bg-no-repeat bg-center w-full"
        :style="{ backgroundImage: `url(${image.src})` }"
        v-for="(image, index) in images"
        :key="index"
    >
      <div
          class="dq w-full"
      >
        <div
            class="text-white text-2xl"
            :class="['image-text', image.textType]"
        >
          {{ image.text }}
          <button class="service-button">{{ image.buttonText }}</button>
        </div>
      </div>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev is-thin"></span>
      <span class="flicking-arrow-next is-thin"></span>
    </template>
  </Flicking>
</template>
<script setup>
import Flicking from "@egjs/vue3-flicking";
import {Arrow, AutoPlay} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

const images = [
  {
    src: "/images/flicking-img-1.jpg",
    text: "DEVELOP WITH US",
    buttonText: "Our Services",
    textType: "long",
  },
  {
    src: "/images/flicking-img-2.jpg",
    text: "DEVELOP WITH US",
    buttonText: "Our Services",
    textType: "short",
  },
  {
    src: "/images/flicking-img-3.jpg",
    text: "DEVELOP WITH US",
    buttonText: "Our Services",
    textType: "short",
  }
];

const plugins = [
  new AutoPlay({duration: 5000, direction: "NEXT", stopOnHover: true}),
  new Arrow(),
];
</script>
<style scoped>
.plugins-panel {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-shrink: 0;
  width: 100%;
  height: 820px;
}

.dq {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: border 0.3s ease;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.text-white {
  color: white;
  font-size: 50px;
  margin-bottom: 60px;
}

.service-button {
  display: block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.service-button {
  display: block;
  width: 200px;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.service-button:hover {
  background-color: white;
  color: black;
}



</style>
