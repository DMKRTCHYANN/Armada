

<template>
  <Flicking
      ref="flicking"
      :options="{ circular: true, align: 'center' }"
      :plugins="plugins"
      @ready="onReady"
  >
    <div
        class="plugins-panel bg-cover bg-no-repeat bg-center  w-full h-full  lg:h-[300px]"
        :style="{ backgroundImage: `url(${image.src})` }"
        v-for="(image, index) in images"
        :key="image.id"
    >
      <div class="content w-full">
        <p class="text-white text-center text-2xl font-bold">
          {{ image.caption }}
        </p>
      </div>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev is-thin"></span>
      <span class="flicking-arrow-next is-thin"></span>
    </template>
  </Flicking>
</template>

<script setup>
import { ref, watch } from 'vue';
import Flicking from '@egjs/vue3-flicking';
import { Arrow, AutoPlay } from '@egjs/flicking-plugins';
import '@/assets/css/arrow.css';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const flicking = ref(null);
const plugins = [
  new AutoPlay({ duration: 5000, direction: 'NEXT', stopOnHover: true }),
  new Arrow(),
];

const onReady = () => {
  if (flicking.value && props.initialIndex >= 0 && props.initialIndex < props.images.length) {
    flicking.value.moveTo(props.initialIndex, 0);
  }
};

watch(
    () => props.initialIndex,
    (newIndex) => {
      if (
          flicking.value &&
          newIndex >= 0 &&
          newIndex < props.images.length &&
          flicking.value.control
      ) {
        flicking.value.moveTo(newIndex, 300);
      }
    }
);
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
  height: 890px;
}

.content {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>