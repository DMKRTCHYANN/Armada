<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <div
        class="plugins-panel bg-cover bg-no-repeat bg-center w-full h-full"
        :style="{ backgroundImage: `url(${image.src})` }"
        v-for="(image, index) in images"
        :key="index"
    >
      <div
          class="content w-full"
      >
        <div>
          <div
              class="text-white text-2xl"
              :class="['image-text', image.textType]"
          >
            {{ image.text }}
          </div>
          <nuxt-link
              to="/portfolio"

          >
            <button class="service-button">{{ image.buttonText }}</button>
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
  height: 820px;
}

.content {
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
  margin-top: 40px;
  padding: 10px 30px;
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


<!--<script setup>-->
<!--import PartnerScroller from "~/component/Partner-Scroller.vue";-->
<!--import ImageScroller from "~/component/Image-Scroller.vue";-->

<!--const currentCategory = ref('all');-->
<!--const facts = [-->
<!--  {id: 0, icon: '/images/portfolio.svg', title: 'PROJECTS IMPLEMENTED', value: 450},-->
<!--  {id: 1, icon: '/images/favorite.png', title: 'CLIENTS & PARTNERS', value: 85},-->
<!--  {id: 2, icon: '/images/location.svg', title: 'LOCATIONS IN YEREVAN', value: 59},-->
<!--  {id: 3, icon: '/images/cup.svg', title: 'YEARS WORKING IN ARMENIA', value: 12},-->
<!--];-->
<!--const scroll = ref(false)-->
<!--const animatedValues = ref(facts.map(() => 0));-->
<!--const images = [-->
<!--  {-->
<!--    id: 1,-->
<!--    category: 'digital',-->
<!--    src: '/images/work-1.jpg',-->
<!--    alt: 'Image 1',-->
<!--    caption: 'BRANDED PAYMENT STATION',-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-2.jpg',-->
<!--    alt: 'Image 2',-->
<!--    caption: 'BRANDMAUER',-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-3.jpg',-->
<!--    alt: 'Image 3',-->
<!--    caption: 'BRIDGE BILLBOARDS',-->
<!--  },-->
<!--  {-->
<!--    id: 4,-->
<!--    category: 'digital',-->
<!--    src: '/images/work-4.jpg',-->
<!--    alt: 'Image 4',-->
<!--    caption: 'LED ADVERTISING MONITORS',-->
<!--  },-->
<!--  {-->
<!--    id: 5,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-5.jpg',-->
<!--    alt: 'Image 5',-->
<!--    caption: '3D LETTERS',-->
<!--  },-->
<!--  {-->
<!--    id: 6,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-6.jpg',-->
<!--    alt: 'Image 6',-->
<!--    caption: 'TRIANGLES',-->
<!--  },-->
<!--  {-->
<!--    id: 7,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-7.jpg',-->
<!--    alt: 'Image 7',-->
<!--    caption: 'CITY PHONES',-->
<!--  },-->
<!--  {-->
<!--    id: 8,-->
<!--    category: 'outdoor',-->
<!--    src: '/images/work-8.jpg',-->
<!--    alt: 'Image 8',-->
<!--    caption: 'LED DISPLAYS',-->
<!--  },-->
<!--];-->

<!--const steps = {-->
<!--  "Meet & Agree": "Understanding Clients needs is definitely the most important part of our product creation. On this stage ARMADA team along with the Client defines Project goals, requirements, and main deliverables.",-->
<!--  "Idea & Concept": "How to generate creative ideas? Concept development is a process of creative and collaborative work where the main actors are ARMADA team and the Client.",-->
<!--  "Design & Create": "When the main idea and the final concept are ready it’s time to develop product design. Design details are agreed with the Client and the process of creation starts.",-->
<!--  "Build & Install": "The next step of designing and creating the product is its final installation. This step requires thorough and responsible approach. The success comes when the whole process and final result meets the expectations of the Clients and make them happier."-->
<!--};-->
<!--const dynamicText = ref(-->
<!--    "Understanding Clients' needs is definitely the most important part of our product creation. On this stage, our team along with the Client defines project goals, requirements, and main deliverables."-->
<!--);-->
<!--const activeId = ref(null);-->

<!--const updateText = (text, id) => {-->
<!--  dynamicText.value = text;-->
<!--  activeId.value = id;-->
<!--};-->

<!--const filteredImages = computed(() => {-->
<!--  if (currentCategory.value === 'outdoor') {-->
<!--    return images.filter((image) => image.category === 'outdoor');-->
<!--  }-->
<!--  if (currentCategory.value === 'digital') {-->
<!--    return images.filter((image) => image.category === 'digital');-->
<!--  }-->
<!--  return images;-->
<!--});-->

<!--const filterImages = (category) => {-->
<!--  currentCategory.value = category;-->
<!--};-->

<!--function animateCounter(index, start, end, duration) {-->
<!--  const startTime = performance.now();-->
<!--  function updateCounter(currentTime) {-->
<!--    const progress = Math.min((currentTime - startTime) / duration, 1);-->
<!--    animatedValues.value[index] = Math.floor(progress * (end - start) + start);-->
<!--    if (progress < 1) {-->
<!--      requestAnimationFrame(updateCounter);-->
<!--    }-->
<!--  }-->
<!--  requestAnimationFrame(updateCounter);-->
<!--}-->

<!--function handleIntersection(entries) {-->
<!--  entries.forEach(entry => {-->
<!--    if (entry.isIntersecting) {-->
<!--      facts.forEach((fact, index) => {-->
<!--        animateCounter(index, 0, fact.value, 3000);-->
<!--      });-->
<!--    }-->
<!--  });-->
<!--}-->

<!--function handleScroll() {-->
<!--  scroll.value = window.scrollY > 0;-->
<!--}-->

<!--onMounted(() => {-->
<!--  window.addEventListener('scroll', handleScroll);-->
<!--});-->

<!--onUnmounted(() => {-->
<!--  window.removeEventListener('scroll', handleScroll);-->
<!--});-->

<!--onMounted(() => {-->
<!--  const observer = new IntersectionObserver(handleIntersection, {-->
<!--    root: null,-->
<!--    threshold: 0.1,-->
<!--  });-->
<!--  const factsSection = document.querySelector('.facts-section');-->
<!--  if (factsSection) {-->
<!--    observer.observe(factsSection);-->
<!--  }-->
<!--});-->
<!--</script>-->