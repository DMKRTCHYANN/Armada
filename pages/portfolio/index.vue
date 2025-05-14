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
      <p class="text-white"><a  href="/" class="text-[#169bb2] hover:text-white">Home</a> <span>/</span> Portfolio</p>
    </div>
  </div>
  <div class="text-center flex justify-center gap-[10px] my-[40px]" data-aos="fade-up">
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
  </div>
  <transition-group name="fade" tag="div" class="grid grid-cols-4 gap-0 w-full">
    <div
        v-for="(image, index) in filteredImages.slice(0, 8)"
        :key="image.id"
        class="relative group overflow-hidden"
    >
      <img
          :src="image.src"
          :alt="image.alt"
          class=" transition-transform duration-300 group-hover:scale-110"
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
<script setup>
const currentCategory = ref('all');
const images = [
  { id: 1, category: 'digital', src: '/images/work-1.jpg', alt: 'Image 1', caption: 'BRANDED PAYMENT STATION', style: { height: '278px' }},
  { id: 2, category: 'outdoor', src: '/images/work-2.jpg', alt: 'Image 2', caption: 'BRANDMAUER', style: { height: '202px' }},
  { id: 3, category: 'outdoor', src: '/images/work-3.jpg', alt: 'Image 3', caption: 'BRIDGE BILLBOARDS', style: { height: '313px' }},
  { id: 4, category: 'digital', src: '/images/work-4.jpg', alt: 'Image 4', caption: 'LED ADVERTISING MONITORS', style: { height: '378px' }},
  { id: 5, category: 'outdoor', src: '/images/work-5.jpg', alt: 'Image 5', caption: '3D LETTERS', style: { height: '278px' }},
  { id: 6, category: 'outdoor', src: '/images/work-6.jpg', alt: 'Image 6', caption: 'TRIANGLES', style: { height: '278px' }},
  { id: 7, category: 'outdoor', src: '/images/work-7.jpg', alt: 'Image 7', caption: 'CITY PHONES', style: { height: '278px' }},
  { id: 8, category: 'outdoor', src: '/images/work-8.jpg', alt: 'Image 8', caption: 'LED DISPLAYS', style: { height: '278px' }},
  {id: 9, category: 'outdoor', src: '/images/work-9.jpg', alt: 'Image 9', caption: 'ADVERTISING FLAGS'},
  {id: 10, category: 'digital', src: '/images/work-10.png', alt: 'Image 10', caption: 'WEBSITE BANNERS'},
  {id: 11, category: 'digital', src: '/images/work-11.jpg', alt: 'Image 11', caption: 'PHOTO/VIDEO SHOOTING', style: { height: '202px' }},
  {id: 12, category: 'digital', src: '/images/work-12.jpg', alt: 'Image 12', caption: 'SEARCH ENGINE OPTIMIZATION (SEO)' , style: { height: '302px' }},
  {id: 13, category: 'digital', src: '/images/work-13.png', alt: 'Image 13', caption: 'WEBSITE DESIGN DEVELOPMENT'},
  {id: 14, category: 'outdoor', src: '/images/work-14.jpg', alt: 'Image 14', caption: 'PARKING LOTS'},
  {id: 15, category: 'digital', src: '/images/work-15.jpg', alt: 'Image 15', caption: 'SOCIAL MEDIA ADVERTISING', style: { height: '202px' }},
  {id: 16, category: 'digital', src: '/images/work-16.png', alt: 'Image 16', caption: 'WEB ANALYTICS'},
  {id: 17, category: 'outdoor', src: '/images/work-17.jpg', alt: 'Image 17', caption: 'ROOFTOP DISPLAYS'},
  {id: 18, category: 'outdoor', src: '/images/work-18.jpg', alt: 'Image 18', caption: 'ROOFTOPS', style: { height: '278px' }},
  {id: 19, category: 'outdoor', src: '/images/work-19.jpg', alt: 'Image 19', caption: 'LED DISPLAYS', style: { height: '202px' }},
  {id: 20, category: 'outdoor', src: '/images/work-20.jpg', alt: 'Image 20', caption: 'CYLINDRICAL PILLARS', style: { height: '278px' }},
  {id: 21, category: 'outdoor', src: '/images/work-21.jpg', alt: 'Image 21', caption: 'STONE PEDESTALS', style: { height: '278px' }},
  {id: 22, category: 'outdoor', src: '/images/work-22.jpg', alt: 'Image 22', caption: 'BIG BOARDS'},
  {id: 23, category: 'outdoor', src: '/images/work-23.jpg', alt: 'Image 23', caption: 'CITY INFO', style: { height: '278px' }},
];

const filteredImages = computed(() => {
  return currentCategory.value === 'all'
      ? images
      : images.filter(img => img.category === currentCategory.value);
});

const imageColumns = computed(() => {
  const columns = [[], [], [], []];
  filteredImages.value.forEach((image, index) => {
    columns[index % 4].push(image);
  });
  return columns;
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