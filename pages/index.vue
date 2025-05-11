<template>
  <header id="home" class="bg-[#18191b] text-white">
    <div class="py-[10px] flex items-center">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex gap-6 text-sm">
          <div class="flex items-center gap-2">
            <img src="/images/phone.svg" alt="Phone Icon" class="w-4 h-4">
            <span>
              Call Us: <span class="numbers">(374)98 709709 - (374)12 709709</span>
            </span>
          </div>
          <div class="flex items-center gap-2">
            <img src="/images/mail.svg" alt="Mail Icon" class="w-4 h-4">
            <span>
              Email Us: <span class="numbers">armada.co.am@gmail.com</span>
            </span>
          </div>
          <div class="flex items-center gap-2">
            <img src="/images/time.svg" alt="Time Icon" class="w-4 h-4">
            <span>
              Working Hours: <span class="numbers">09:30-18:00</span>
            </span>
          </div>
        </div>
        <div class="flex gap-2">
          <img src="/images/x.png" alt="Logo 1" class="w-4 h-4">
          <img src="/images/x.png" alt="Logo 2" class="w-4 h-4">
          <img src="/images/google.png" alt="Logo 3" class="w-4 h-4">
          <img src="/images/x.png" alt="Logo 4" class="w-4 h-4">
        </div>
      </div>
    </div>
    <div class="bg-[#18191b] border-t border-[rgba(255,255,255,0.2)]">
      <nav class="container mx-auto py-[15px]">
        <div class="flex items-center justify-between">
          <img
              src="/images/armada.png"
              alt="Armada Logo"
              class="w-[152px] h-[72px]"
          >
          <div class="hidden md:flex space-x-8 text-sm">
            <NuxtLink
                to="#home"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              HOME
            </NuxtLink>
            <NuxtLink
                to="#about-us"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              ABOUT US
            </NuxtLink>
            <NuxtLink
                to="#our-services"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              OUR SERVICES
            </NuxtLink>
            <NuxtLink
                to="#clients-partners"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              CLIENTS & PARTNERS
            </NuxtLink>
            <NuxtLink
                to="#contact-us"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              CONTACT US
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
    <client-only>
      <Image-Scroller/>
    </client-only>
  </header>
  <div id="about-us" class="pt-[90px] pb-[60px]">
    <div class="mx-[90.5px] px-[15px]">
      <h1 class="text-center text-4xl text-black">About Us</h1>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
      </div>
      <div>
        <div class="flex items-start gap-4">
          <p class="text-sm text-gray-500">
            Since 2006 ARMADA’s team has constantly been improving and diversifying company’s products
            and services to offer relevant solutions to our clients’ and partners’ needs, to the inhabitants
            and passengers in urban environment. For the efforts made in this sphere our company was awarded
            BEST ADVERTISING MEANS PROJECT by Yerevan Outdoor Advertising Festival (YOAF) 2017.
          </p>
          <img src="/images/book.png" alt="Book Image" class="w-[70px]">
        </div>
        <p class="text-sm text-[#606060] mt-4">
          We are known for our top-notch customer service and our years of experience in the advertising industry.
          Combining our experience, know-how, we can do great things for you and your business. We love developing
          fruitful relationships with our clients and partners by using excellent communication, special approach
          and time-tested business processes that are:
        </p>
        <ul class="ml-[40px] text-sm text-[#606060] list-disc list-inside mt-2">
          <li>Meet and agree with our clients/partners</li>
          <li>Develop the idea and the concept</li>
          <li>Design and create the solution</li>
          <li>Build and install the final product</li>
        </ul>
        <p class="text-sm text-[#606060] mt-2">
          <span class="text-sm text-[#606060] font-bold mt-6">Our Clients and Partners:</span> Our network of outdoor
          advertising displays is one of the largest in the Armenian media industry. Our
          clients and partners represent almost all the spheres of businesses: starting from financial-banking
          to retail and education.
        </p>
        <p class="text-sm text-[#606060] mt-2">
          <span class="text-sm text-[#606060] font-bold mt-6">Our Audiences:</span> Today’s urban audiences
          spend more time than ever away from home, with engagement opportunities in all
          city environments. Outdoor offers a visual and memorable brand communication, effectively reaching all
          demographics throughout the consumer journey. By 2050, 66% of the world’s population will be living in
          cities. The population is becoming increasingly urban and mobile. ARMADA wants to improve your outdoor
          experience and make Yerevan more attractive, more intelligent, more responsible, more connected and more
          engaging.
        </p>
        <p class="text-sm text-[#606060] mt-2">
          <span class="text-sm text-[#606060] font-bold mt-6">Reaching a Mass Audience:</span> The growing
          urban population is home to a variety of influential audiences who are spending more and
          more time outside the home. Outdoor advertising remains the core medium that can reach mass urban
          audiences rapidly and consistently throughout the day, in every outdoor environment.
        </p>
      </div>
    </div>
  </div>
  <div class="mt-[30px] mb-[60px]">
    <div class="mx-[90.5px] px-[15px]">
      <h2 class="text-center text-3xl text-black">Our Vision</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
      </div>
      <div class="grid grid-cols-3">
        <div class="p-[15px] text-start">
          <h3 class="text-sm text-[#169bb2] mb-2"><b>ENVIRONMENTAL PRIORITIES</b></h3>
          <p class="text-gray-600 mb-4">
            ARMADA's activities are implemented at the heart of Yerevan, closest to users and economic activity. This
            presence means we have a key responsibility: limiting our environmental footprint.
          </p>
          <img src="/images/vision-img-1.jpg" alt="Environmental Priority" class="w-full h-auto">
        </div>
        <div class="p-[15px] text-start">
          <h3 class="text-sm text-[#169bb2] mb-2"><b>SOCIAL PRIORITIES</b></h3>
          <p class="text-gray-600 mb-4">
            In ARMADA teamwork creates synergy. Each one of our team members is appreciated and essential to our agency.
            Respect for people, safety, and health constitute the core of our company values.
          </p>
          <img src="/images/vision-img-2.jpg" alt="Social Priority" class="w-full h-auto">
        </div>
        <div class="p-[15px] text-start">
          <h3 class="text-sm text-[#169bb2] mb-2"><b>LISTENING TO OUR STAKEHOLDERS</b></h3>
          <p class="text-gray-600 mb-4">
            We support our stakeholders by providing innovative solutions that incorporate sustainable development. This
            allows us to better serve the needs of our clients, partners and users in Armenia.
          </p>
          <img src="/images/vision-img-3.jpg" alt="Stakeholders" class="w-full h-auto">
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="parallax bg-fixed bg-center bg-no-repeat bg-cover min-h-[500px]"></div>
  </div>
  <div id="our-services">
    <div class="pt-[90px]">
      <h2 class="text-center text-3xl text-black">Our Service</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
      </div>
      <div class="text-center flex justify-center gap-[10px] my-[30px]">
        <button
            @click="filterImages('outdoor')"
            :class="{
          'bg-[#169bb2] text-white': currentCategory === 'outdoor',
          'text-gray-600': currentCategory !== 'outdoor'
        }"
            class="py-[10px] px-[6px] max-w-[270px] w-full cursor-pointer hover:bg-[#169bb2] hover:text-white transition-all"
        >
          OUTDOOR ADVERTISING
        </button>
        <button
            @click="filterImages('digital')"
            :class="{
          'bg-[#169bb2] text-white': currentCategory === 'digital',
          'text-gray-600': currentCategory !== 'digital'
        }"
            class="py-[10px] px-[6px] max-w-[270px] w-full cursor-pointer hover:bg-[#169bb2] hover:text-white transition-all"
        >
          DIGITAL MARKETING
        </button>
      </div>
    </div>
    <div>
      <transition-group name="fade" tag="div" class="grid grid-cols-4 gap-0 w-full">
        <div
            v-for="(image, index) in filteredImages.slice(0, 8)"
            :key="image.id"
            class="relative group overflow-hidden"
        >
          <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-auto transition-transform duration-300 group-hover:scale-110"
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
    <div class="flex justify-center py-[60px] bg-[#169bb2] ">
      <button
          class="py-[10px] px-[6px] max-w-[270px] border border-black rounded-2 w-full cursor-pointer hover:text-white hover:bg-black transition-all duration-500"
      >
        VIEW ALL SERVICES >
      </button>
    </div>
  </div>
  <div class="py-[90px]">
    <h2 class="text-center text-3xl text-black font-bold mb-2">Facts</h2>
    <div class="my-[30px] flex items-center justify-center">
      <div class="w-[400px] h-[1px] bg-gray-400"></div>
      <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
      <div class="w-[400px] h-[1px] bg-gray-400"></div>
    </div>
    <div class="grid grid-cols-4 gap-8 container mx-auto py-[30px]">
      <div v-for="fact in facts" :key="fact.id" class="flex flex-col items-center text-center">
        <img :src="fact.icon" :alt="fact.title" class="mb-4 w-12 h-12"/>
        <div class="text-5xl font-bold mb-2">{{ animatedValues[fact.id] }}</div>
        <div class="text-[#169bb2] uppercase text-sm tracking-wider">{{ fact.title }}</div>
      </div>
    </div>
  </div>
  <div id="clients-partners">
    <div class="py-[60px] bg-[#b2b2b2]">
      <h2 class="text-center text-3xl text-black">Clients & Partners</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-black"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-black"></div>
      </div>
      <div>
        <partner-scroller/>
      </div>
    </div>
  </div>
  <div id="contact-us">
    <div class="py-[90px]">
      <h2 class="text-center text-3xl text-black">Contact Us</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-black"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-black"></div>
      </div>
      <div class="max-w-[1200px] mx-auto flex flex-wrap justify-between">
        <!-- Contact Form -->
        <div class="w-full md:w-[48%]">
          <form action="/submit-form" method="POST" class="space-y-5">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-[#169bb2]"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-[#169bb2]"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-[#169bb2]"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-[#169bb2]"
                required
            ></textarea>
            <button
                type="submit"
                class="bg-[#169bb2] text-white px-6 py-3 rounded-md hover:bg-[#127c90] transition"
            >
              Submit Form
            </button>
          </form>
        </div>
        <!-- Contact Info -->
        <div class="w-full md:w-[48%]">
          <div class="bg-gray-100 p-5 rounded-md space-y-4">
            <p class="text-lg font-semibold text-black">Contact Info</p>
            <p class="text-sm">
              <span class="font-semibold">Address:</span> Armenia, 0026, Yerevan,
              Garegin Nzhdehi St., 34 Building (in the building of "Business
              Center 34") (Shengavit adm. district)
            </p>
            <p class="text-sm">
              <span class="font-semibold">Phone:</span> (374) 98 709709
            </p>
            <p class="text-sm">
              <span class="font-semibold">Email:</span> armada.co.am@gmail.com
            </p>
            <p class="text-sm">
              <span class="font-semibold">Web:</span>
              <a href="http://armada-co.com" class="text-[#169bb2] hover:underline">http://armada-co.com</a>
            </p>
            <p class="text-sm">
              <span class="font-semibold">Open:</span> Monday – Friday 09:30 – 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.numbers {
  color: #169bb2;
}


.container {
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
<script setup>
import ImageScroller from "~/component/Image-Scroller.vue";
import PartnerScroller from "~/component/Partner-Scroller.vue";

const currentCategory = ref('all');
const facts = [
  {id: 0, icon: '/images/portfolio.png', title: 'PROJECTS IMPLEMENTED', value: 450},
  {id: 1, icon: '/images/favorite.png', title: 'CLIENTS & PARTNERS', value: 85},
  {id: 2, icon: '/images/location.png', title: 'LOCATIONS IN YEREVAN', value: 59},
  {id: 3, icon: '/images/cup.png', title: 'YEARS WORKING IN ARMENIA', value: 12},
];
const animatedValues = ref(facts.map(() => 0));
const images = [
  {
    id: 1,
    category: 'digital',
    src: '/images/work-1.jpg',
    alt: 'Image 1',
    caption: 'BRANDED PAYMENT STATION',
  },
  {
    id: 2,
    category: 'outdoor',
    src: '/images/work-2.jpg',
    alt: 'Image 2',
    caption: 'BRANDMAUER',
  },
  {
    id: 3,
    category: 'outdoor',
    src: '/images/work-3.jpg',
    alt: 'Image 3',
    caption: 'BRIDGE BILLBOARDS',
  },
  {
    id: 4,
    category: 'digital',
    src: '/images/work-4.jpg',
    alt: 'Image 4',
    caption: 'LED ADVERTISING MONITORS',
  },
  {
    id: 5,
    category: 'outdoor',
    src: '/images/work-5.jpg',
    alt: 'Image 5',
    caption: '3D LETTERS',
  },
  {
    id: 6,
    category: 'outdoor',
    src: '/images/work-6.jpg',
    alt: 'Image 6',
    caption: 'TRIANGLES',
  },
  {
    id: 7,
    category: 'outdoor',
    src: '/images/work-7.jpg',
    alt: 'Image 7',
    caption: 'CITY PHONES',
  },
  {
    id: 8,
    category: 'outdoor',
    src: '/images/work-8.jpg',
    alt: 'Image 8',
    caption: 'LED DISPLAYS',
  },
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

function animateCounter(index, start, end, duration) {
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1); // от 0 до 1
    animatedValues.value[index] = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

onMounted(() => {
  facts.forEach((fact, index) => {
    animateCounter(index, 0, fact.value, 4000);
  });
});
</script>