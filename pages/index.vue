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
        <div class="flex space-x-4 gap-[3px]">
          <i class="fab fa-facebook text-white text-sm"></i>
          <i class="fab fa-twitter text-white text-sm"></i>
          <i class="fab fa-google-plus text-white text-sm"></i>
          <i class="fab fa-dribbble text-white text-sm"></i>
          <i class="fab fa-skype text-white text-sm"></i>
          <i class="fas fa-wifi text-white"></i>
        </div>
      </div>
    </div>

    <div
        :class="[
      'flex border-t border-[rgba(255,255,255,0.2)] text-sm w-full bg-[#18191b] z-50 px-[15px] transition-all duration-300 fixed left-0',
      scroll ? 'top-0' : 'top-10'
    ]"
    >
      <nav class="container mx-auto py-[3px]">
        <div class="flex items-center justify-between">
          <img
              src="/images/armada.png"
              alt="Armada Logo"
              class="w-[152px] h-[72px]"
          />
          <div class="hidden md:flex space-x-8 text-sm">
            <div class="flex items-center gap-[10px]">
              <NuxtLink
                  to="#home"
                  :class="{
                'text-[#169bb2]': route.hash === '#home',
                'text-gray-300 hover:text-[#169bb2]': route.hash !== '#home',
              }"
                  class="transition-colors"
              >
                HOME
              </NuxtLink>
              <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
            </div>
            <div class="flex items-center gap-[10px]">
              <NuxtLink
                  to="#about-us"
                  :class="{
                'text-[#169bb2]': route.hash === '#about-us',
                'text-gray-300 hover:text-[#169bb2]': route.hash !== '#about-us',
              }"
                  class="transition-colors"
              >
                ABOUT US
              </NuxtLink>
              <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
            </div>
            <div class="flex items-center gap-[10px]">
              <NuxtLink
                  to="#our-services"
                  :class="{
                'text-[#169bb2]': route.hash === '#our-services',
                'text-gray-300 hover:text-[#169bb2]': route.hash !== '#our-services',
              }"
                  class="transition-colors"
              >
                OUR SERVICES
              </NuxtLink>
              <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
            </div>
            <div class="flex items-center gap-[10px]">
              <NuxtLink
                  to="#clients-partners"
                  :class="{
                'text-[#169bb2]': route.hash === '#clients-partners',
                'text-gray-300 hover:text-[#169bb2]': route.hash !== '#clients-partners',
              }"
                  class="transition-colors"
              >
                Clients & Partners
              </NuxtLink>
              <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
            </div>
            <div class="flex items-center gap-[10px]">
              <NuxtLink
                  to="#contact-us"
                  :class="{
                'text-[#169bb2]': route.hash === '#contact-us',
                'text-gray-300 hover:text-[#169bb2]': route.hash !== '#contact-us',
              }"
                  class="transition-colors"
              >
                CONTACT US
              </NuxtLink>
              <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <client-only>
      <Image-Scroller/>
    </client-only>
  </header>
  <div id="about-us" class="pt-[90px] pb-[60px]" data-aos="fade-up">
    <div class="max-w-[1170px] w-full mx-auto px-[15px]">
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
    <div class="max-w-[1170px] w-full mx-auto px-[15px]">
      <div data-aos="fade-up">
        <h2 class="text-center text-3xl text-black">Our Vision</h2>
        <div class="my-[30px] flex items-center justify-center">
          <div class="w-[400px] h-[1px] bg-gray-400"></div>
          <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
          <div class="w-[400px] h-[1px] bg-gray-400"></div>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="p-[15px] text-start" data-aos="fade-right">
          <h3 class="text-sm text-[#169bb2] mb-2"><b>ENVIRONMENTAL PRIORITIES</b></h3>
          <p class="text-gray-600 mb-4">
            ARMADA's activities are implemented at the heart of Yerevan, closest to users and economic activity. This
            presence means we have a key responsibility: limiting our environmental footprint.
          </p>
          <img src="/images/vision-img-1.jpg" alt="Environmental Priority" class="w-full h-auto">
        </div>
        <div class="p-[15px] text-start" data-aos="fade-up">
          <h3 class="text-sm text-[#169bb2] mb-2"><b>SOCIAL PRIORITIES</b></h3>
          <p class="text-gray-600 mb-4">
            In ARMADA teamwork creates synergy. Each one of our team members is appreciated and essential to our agency.
            Respect for people, safety, and health constitute the core of our company values.
          </p>
          <img src="/images/vision-img-2.jpg" alt="Social Priority" class="w-full h-auto">
        </div>
        <div class="p-[15px] text-start" data-aos="fade-left">
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
  <div class="parallax bg-fixed bg-center bg-no-repeat bg-cover py-[90px] min-h-[500px]">
    <div class="mx-auto max-w-[1140px] w-full">
      <div data-aos="fade-up">
      <h2 class="text-center text-3xl text-white">Our Vision</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
      </div>
      </div>
      <div class="flex justify-center gap-[40px]">
        <div
            v-for="(text, id) in steps"
            :key="id"
            :class="[
          'relative w-[200px] h-[200px] rounded-full flex items-center justify-center cursor-pointer',
          'hover:bg-black hover:bg-opacity-40 hover:text-white',
          activeId === id
            ? 'bg-transparent border-2 border-white text-white'
            : 'bg-[#169bb2] bg-opacity-60 text-[#222222]'
        ]"
            @click="updateText(text, id)"
            :data-aos="'fade-right'"
            :data-aos-delay="id * 200"
        >
          <span class="font-bold text-lg text-center">{{ id }}</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-gray-300 mt-[30px]">
          {{ dynamicText }}
        </p>
      </div>
    </div>
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
    <div class="flex justify-center py-[60px] bg-[#169bb2]">
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
    <div class="grid grid-cols-4 gap-8 container mx-auto py-[30px] facts-section">
      <div v-for="fact in facts" :key="fact.id" class="flex flex-col items-center text-center">
        <img :src="fact.icon" :alt="fact.title" class="mb-4 w-12 h-12"/>
        <div v-if="animatedValues[fact.id]" class="text-5xl font-bold mb-2">{{ animatedValues[fact.id] }}</div>
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
      <div class="max-w-[1140px] w-full mx-auto flex justify-center">
        <partner-scroller/>
      </div>
    </div>
  </div>
  <div id="contact-us">
    <div class="max-w-[1170px] w-full py-[90px] mx-auto px-[15px]">
      <h2 class="text-center text-3xl text-black">Contact Us</h2>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-black"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-black"></div>
      </div>
      <div class="max-w-[1200px] pt-[30px] w-full mx-auto flex  gap-8">
        <div>
          <form class="flex flex-col space-y-5" action="/submit-form" method="POST">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="max-w-[229px] w-full border border-gray-300 p-3 focus:outline-none bg-gray-100  focus:ring-2 focus:ring-[#169bb2]"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="max-w-[229px] w-full border border-gray-300 p-3 focus:outline-none bg-gray-100   focus:ring-2 focus:ring-[#169bb2]"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                class="max-w-[229px] mb-[30px] w-full border border-gray-300 p-3 focus:outline-none bg-gray-100  focus:ring-2 focus:ring-[#169bb2]"
            />
            <button
                type="submit"
                class="bg-white text-black  border border-gray-300 text-sm  py-[5px] hover:bg-black hover:text-white"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
        <div class="max-w-[471px] w-full">
        <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none bg-gray-100  focus:ring-2 focus:ring-[#169bb2]"
            required
        ></textarea>
        </div>
        <div class="px-[15px] mt-4 space-y-2 rounded-md ">
          <p class="text-lg  text-black">CONTACT INFO</p>
          <p class="text-xl font-semibold text-[#169bb2]">
            Armenia, 0026, Yerevan. Garegin Nzhdeh Sr. 3a Building<br>
            (in the building of "Business Center 34")<br>
            (Shengavit adm. district)
          </p>
          <div class="w-full h-[0.1px] bg-gray-200"></div>
          <p class="text-xs">
            <span class="font-semibold text-[#169bb2] pr-[20px]">Phone:</span> (374) 98 709769
          </p>
          <div class="w-full h-[0.1px] bg-gray-200"></div>
          <p class="text-xs">
            <span class="font-semibold text-[#169bb2] pr-[20px]">Phone:</span> (374) 12 709709
          </p>
          <div class="w-full h-[0.1px] bg-gray-200"></div>
          <p class="text-sm">
            <span class="font-semibold text-[#169bb2] pr-[19px]">Email:</span> armada.co.are@gmail.com
          </p>
          <div class="w-full h-[0.1px] bg-gray-200"></div>
          <p class="text-xs">
            <span class="font-semibold text-[#169bb2] pr-[36px]">Web:</span>
            <a href="http://armada-co.com" class="hover:underline">http://armada-co.com</a>
          </p>
          <div class="w-full h-[1px] bg-gray-200"></div>
          <p class="text-xs mt-[5px]">
            <span class="font-semibold text-[#169bb2] pr-[27px]">Open:</span> Monday - Friday 09:30 - 16:00
          </p>
          <div class="w-full h-[0.1px] bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.559564820944!2d44.49504801570068!3d40.152093479614926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc10c3a8f709%3A0x8edb90d0c15b786!2zR2FyZWdpbiBOemhkZWggU3QsIFllcmV2YW4sINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1582202274387!5m2!1sru!2s"
        class="w-full h-[450px]"
    >
    </iframe>
  </div>
  <div>
    <div class="bg-[#111] text-white py-12">
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
<style>
.numbers {
  font-weight: bold;
  font-size: 13px;
  color: #169bb2;
}


.container {
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
<script setup>
import PartnerScroller from "~/component/Partner-Scroller.vue";
import ImageScroller from "~/component/Image-Scroller.vue";

const currentCategory = ref('all');
const facts = [
  {id: 0, icon: '/images/portfolio.png', title: 'PROJECTS IMPLEMENTED', value: 450},
  {id: 1, icon: '/images/favorite.png', title: 'CLIENTS & PARTNERS', value: 85},
  {id: 2, icon: '/images/location.png', title: 'LOCATIONS IN YEREVAN', value: 59},
  {id: 3, icon: '/images/cup.png', title: 'YEARS WORKING IN ARMENIA', value: 12},
];
const scroll = ref(false)
const route = useRoute();
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

const steps = {
  "Meet & Agree": "Understanding Clients needs is definitely the most important part of our product creation. On this stage ARMADA team along with the Client defines Project goals, requirements, and main deliverables.",
  "Idea & Concept": "How to generate creative ideas? Concept development is a process of creative and collaborative work where the main actors are ARMADA team and the Client.",
  "Design & Create": "When the main idea and the final concept are ready it’s time to develop product design. Design details are agreed with the Client and the process of creation starts.",
  "Build & Install": "The next step of designing and creating the product is its final installation. This step requires thorough and responsible approach. The success comes when the whole process and final result meets the expectations of the Clients and make them happier."
};
const dynamicText = ref(
    "Understanding Clients' needs is definitely the most important part of our product creation. On this stage, our team along with the Client defines project goals, requirements, and main deliverables."
);
const activeId = ref(null);

const updateText = (text, id) => {
  dynamicText.value = text;
  activeId.value = id;
};

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
    const progress = Math.min((currentTime - startTime) / duration, 1);
    animatedValues.value[index] = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      facts.forEach((fact, index) => {
        animateCounter(index, 0, fact.value, 4000);
      });
    }
  });
}

function handleScroll() {
  scroll.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.1,
  });
  const factsSection = document.querySelector('.facts-section');
  if (factsSection) {
    observer.observe(factsSection);
  }
});
</script>