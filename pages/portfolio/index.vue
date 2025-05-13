<template>
  <div class="bg-[#18191b]  text-white">
    <nav class="container mx-auto py-[3px]">
      <div class="flex items-center justify-between">
        <NuxtLink to="/#home">
          <img src="/images/armada.png" alt="Armada Logo" class="w-[152px] h-[72px]"/>
        </NuxtLink>
        <div class="flex space-x-8 text-sm">
          <div class="flex items-center gap-[10px]">
            <a
                href="/#home"
                class="text-white transition-colors hover:text-[#169bb2]"
            >
              Home
            </a>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <a
                href="/#about-us"
                class="text-white transition-colors hover:text-[#169bb2]"
            >
              ABOUT US
            </a>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <a
                href="/#our-services"
                class="text-white transition-colors hover:text-[#169bb2]"
            >
              OUR SERVICES
            </a>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <a
                href="/#clients-partners"
                class="text-white transition-colors hover:text-[#169bb2]"
            >
              Clients & Partners
            </a>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <a
                href="/#contact-us"
                class="text-white transition-colors hover:text-[#169bb2]"
            >
              CONTACT US
            </a>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="bg-[rgb(34,34,34)]">
    <div class="max-w-[1140px] py-[80px] w-full mx-auto flex justify-between">
      <h1 class="text-white text-4xl">Portfolio</h1>
      <p class="text-white"> <span class="text-[#169bb2]">Home</span> <span>/</span> Portfolio</p>
    </div>
  </div>
  <div>
    <div class="text-center flex justify-center gap-[10px] my-[40px]" data-aos="fade-up">
      <button
          @click="filterImages('outdoor')"
          :class="{
          'bg-[#169bb2] text-white': currentCategory === 'outdoor',
          'text-gray-600': currentCategory !== 'outdoor'
        }"
          class="py-[10px] px-[6px] max-w-[270px] w-full cursor-pointer hover:bg-black hover:text-white transition-all"
      >
        OUTDOOR ADVERTISING
      </button>
      <button
          @click="filterImages('digital')"
          :class="{
          'bg-[#169bb2] text-white': currentCategory === 'digital',
          'text-gray-600': currentCategory !== 'digital'
        }"
          class="py-[10px] px-[6px] max-w-[270px] w-full cursor-pointer hover:bg-black hover:text-white transition-all"
      >
        DIGITAL MARKETING
      </button>
    </div>
    <transition-group
        name="fade"
        tag="div"
        class="grid grid-cols-4 w-full"
        data-aos="fade-up"
    >
      <div
          v-for="(image, index) in filteredImages.slice(0, 8)"
          :key="image.id"
          class="relative group overflow-hidden"
      >
        <img
            :src="image.src"
            :alt="image.alt"
            class="transition-transform duration-300 transform group-hover:scale-110"
        />
        <div
            class="absolute inset-0 bg-white bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-[#169bb2] text-center text-2xl font-bold">
            {{ image.caption }}
          </p>
        </div>
      </div>
    </transition-group>
  </div>
  <div>
    <div class="bg-[#111] text-white py-12 mt-[200px]">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 class="text-xl  mb-[20px]">About us</h2>
          <h1 class="text-sm text-gray-300">
            We are known for our top-notch customer service and our years of experience in the advertising industry.
            Combining our experience and know-how, we can do great things for you and your business. We love developing
            fruitful relationships with our clients and partners by using our excellent communication, special approach
            and time-tested business processes.
          </h1>
        </div>
        <div>
          <h2 class="text-xl  mb-4">Contact Us</h2>
          <p class="leading-relaxed text-sm text-gray-300">
            Armenia, 0026, Yerevan Garegin Nzhdehi St., 34 Building (in the building of "Business Center 34") (Shengavit
            adm. district)
          </p>
          <ul class="mt-4 space-y-2 text-sm">
            <div class="w-full h-[1px] bg-gray-500"></div>
            <li><span class="font-bold  text-[#169bb2] pr-[20px]">Phone:</span> (374) 98 70 97 09</li>
            <div class="w-full h-[1px] bg-gray-500"></div>
            <li><span class="font-bold text-[#169bb2] pr-[20px]">Phone:</span> (374) 12 70 97 09</li>
            <div class="w-full h-[1px] bg-gray-500"></div>
            <li><span class="font-bold text-[#169bb2] pr-[25px]">Email:</span> armada.co.am@gmail.com</li>
            <div class="w-full h-[1px] bg-gray-500"></div>
            <li><span class="font-bold text-[#169bb2] pr-[33px]">Web:</span> <a href="http://armada-co.com"
                                                                                class="text-blue-400 hover:underline">http://armada-co.com</a>
            </li>
            <div class="w-full h-[1px] bg-gray-500"></div>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="max-w-[1170px] text-sm w-full mx-auto flex justify-between pt-[30px] pb-[20px]">
        <h1 class="text-white">© Copyright 2018 - ARMADA advertising by <a class="text-[#169bb2] hover:underline"
                                                                           href="https://www.x-tech.am/">X-TECH Creative
          Studio</a></h1>
        <div class="flex space-x-4 gap-[3px]">
          <i class="fab fa-facebook text-white text-sm"></i>
          <i class="fab fa-twitter text-white text-sm"></i>
          <i class="fab fa-google-plus text-white text-sm"></i>
          <i class="fab fa-dribbble text-white text-sm"></i>
          <i class="fab fa-skype text-white text-sm"></i>
          <i class="fas fa-wifi text-white "></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>

const currentCategory = ref('all');
const images = [
  {id: 1, category: 'digital', src: '/images/work-1.jpg', alt: 'Image 1', caption: 'BRANDED PAYMENT STATION'},
  {id: 2, category: 'outdoor', src: '/images/work-2.jpg', alt: 'Image 2', caption: 'BRANDMAUER'},
  {id: 3, category: 'outdoor', src: '/images/work-3.jpg', alt: 'Image 3', caption: 'BRIDGE BILLBOARDS'},
  {id: 4, category: 'digital', src: '/images/work-4.jpg', alt: 'Image 4', caption: 'LED ADVERTISING MONITORS'},
  {id: 5, category: 'outdoor', src: '/images/work-5.jpg', alt: 'Image 5', caption: '3D LETTERS'},
  {id: 6, category: 'outdoor', src: '/images/work-6.jpg', alt: 'Image 6', caption: 'TRIANGLES'},
  {id: 7, category: 'outdoor', src: '/images/work-7.jpg', alt: 'Image 7', caption: 'CITY PHONES'},
  {id: 8, category: 'outdoor', src: '/images/work-8.jpg', alt: 'Image 8', caption: 'LED DISPLAYS'},
];


const filteredImages = computed(() => {
  if (currentCategory.value === 'outdoor') {
    return images.filter((image) => image.category === 'outdoor');
  }
  if (currentCategory.value === 'digital') {
    return images.filter((image) => image.category === 'digital');
  }
  return images;
});

const filterImages = (category) => {
  currentCategory.value = category;
};
</script>
<style>
.group:hover img {
  will-change: transform;
}
</style>