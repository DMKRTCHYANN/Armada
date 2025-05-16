<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <div
        class="plugins-panel bg-cover bg-no-repeat bg-center w-full h-[700px] lg:h-[900px]"
        :style="{ backgroundImage: `url(${image.src})` }"
        v-for="(image, index) in images"
        :key="index"
    >
      <div class="content w-full max-w-[90%] lg:max-w-[1300px]">
        <div>
          <div
              class="text-white text-2xl lg:text-[50px] lg:mb-10"
              :class="['image-text', image.textType]"
          >
            {{ image.text }}
          </div>
          <nuxt-link
              to="/portfolio"
              class="service-button text-sm lg:text-base"
          >
            {{ image.buttonText }}
          </nuxt-link>
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
import '@/assets/css/arrow.css';


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
  height: 900px;
}


.content {
  max-width: 1300px;
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
  padding: 10px 30px;
  background-color: #f1f1f1;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.service-button {
  display: block;
  width: 200px;
  margin-top: 40px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.service-button:hover {
  background-color: white;
  color: black;
}


.text-white {
  color: white;
  font-size: 32px;
  margin-bottom: 40px;
}


@media (min-width: 1024px) {
  .plugins-panel {
    height: 900px;
  }
}

@media (min-width: 1024px) {
  .text-white {
    font-size: 50px;
    margin-bottom: 60px;
  }
}

.service-button {
  width: 150px;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .service-button {
    width: 200px;
    margin-top: 40px;
  }
}

</style>
