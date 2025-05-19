<template>
  <div id="wrapper" class="overflow-x-hidden">
    <div id="home" class="bg-[#18191b] text-white">
      <div class="block items-center lg:py-[10px]">
        <div class="max-w-[1200px] w-full px-[20px] mx-auto  justify-between items-center lg:flex hidden">
          <div class="flex gap-10 text-sm">
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
          </div>
        </div>
      </div>
      <div
          :class="[
           'flex border-t border-[rgba(255,255,255,0.2)] text-sm w-full bg-[#18191b] z-50 px-[15px] transition-all duration-300 fixed left-0',
           scroll ? 'top-0' : 'lg:top-10'
         ] "
      >
        <nav class="max-w-[1200px] w-full px-[20px] mx-auto py-[10px]">
          <nav class="max-w-[1200px] w-full px-[20px] mx-auto py-[3px]">
            <div class="flex items-center justify-between">
              <NuxtLink to="/#home">
                <img src="/images/armada.png" alt="Armada Logo" class="w-[152px] h-[72px]"/>
              </NuxtLink>
              <button
                  class="block lg:hidden text-white hover:text-[#169bb2] text-2xl focus:outline-none"
                  @click="toggleMenu"
              >
                <i class="fa-solid fa-bars"></i>
              </button>
              <div
                  :class="[
        'fixed top-0 left-0 w-full bg-[#18191b] text-white overflow-hidden transition-all duration-700',
        menuOpen ? 'max-h-screen' : 'max-h-0'
      ]"
              >
                <button
                    class="absolute top-4 right-4 text-2xl  focus:outline-none"
                    @click="toggleMenu"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="flex flex-col items-center space-y-5 mt-[10px] py-3">
                  <a href="/#home" class="text-white transition-colors hover:text-[#169bb2]">Home</a>
                  <div class="h-[1px] max-w-[700px] w-full bg-[#333]"></div>
                  <a href="/#about-us" class="text-white transition-colors hover:text-[#169bb2]">ABOUT US</a>
                  <div class="h-[1px] max-w-[700px] w-full bg-[#333]"></div>
                  <a href="/#our-services" class="text-white transition-colors hover:text-[#169bb2]">OUR SERVICES</a>
                  <div class="h-[1px] max-w-[700px] w-full bg-[#333]"></div>
                  <a href="/#clients-partners" class="text-white transition-colors hover:text-[#169bb2]">Clients &
                    Partners</a>
                  <div class="h-[1px] max-w-[700px] w-full bg-[#333]"></div>
                  <a href="/#contact-us" class="text-white transition-colors hover:text-[#169bb2]">CONTACT US</a>
                </div>
              </div>
              <div class="hidden lg:flex  space-x-8 text-sm">
                <div class="flex items-center gap-[10px]">
                  <a href="/#home" class="text-white transition-colors hover:text-[#169bb2]">Home</a>
                  <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <a href="/#about-us" class="text-white transition-colors hover:text-[#169bb2]">ABOUT US</a>
                  <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <a href="/#our-services" class="text-white transition-colors hover:text-[#169bb2]">OUR SERVICES</a>
                  <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <a href="/#clients-partners" class="text-white transition-colors hover:text-[#169bb2]">Clients &
                    Partners</a>
                  <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
                </div>
                <div class="flex items-center gap-[10px]">
                  <a href="/#contact-us" class="text-white transition-colors hover:text-[#169bb2]">CONTACT US</a>
                  <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full"></div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </div>
      <div>
        <div class="h-[890px]">
          <client-only>
            <Image-Scroller/>
          </client-only>
        </div>
      </div>
    </div>
    <div id="about-us" class="pt-[90px] pb-[60px]" data-aos="fade-up">
      <div class="max-w-[1170px] w-full mx-auto px-[15px] lg:px-[30px]">
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
      <div class="max-w-[1170px] w-full mx-auto px-[15px] lg:px-[30px] lg:flex lg:flex-col">
        <div data-aos="fade-up">
          <h2 class="text-center text-3xl text-black">Our Vision</h2>
          <div class="my-[30px] flex items-center justify-center">
            <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
            <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
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
              In ARMADA teamwork creates synergy. Each one of our team members is appreciated and essential to our
              agency.
              Respect for people, safety, and health constitute the core of our company values.
            </p>
            <img src="/images/vision-img-2.jpg" alt="Social Priority" class="w-full h-auto">
          </div>
          <div class="p-[15px] text-start" data-aos="fade-left">
            <h3 class="text-sm text-[#169bb2] mb-2"><b>LISTENING TO OUR STAKEHOLDERS</b></h3>
            <p class="text-gray-600 mb-4">
              We support our stakeholders by providing innovative solutions that incorporate sustainable development.
              This
              allows us to better serve the needs of our clients, partners and users in Armenia.
            </p>
            <img src="/images/vision-img-3.jpg" alt="Stakeholders" class="w-full h-auto">
          </div>
        </div>
      </div>
    </div>

    <div
        class="parallax bg-fixed bg-center bg-no-repeat bg-cover py-[90px] min-h-[500px] bg-[url('/path-to-your-image.jpg')]">
      <div class="mx-auto max-w-[1140px] w-full">
        <div data-aos="fade-up">
          <h2 class="text-center text-3xl text-white">Our Process</h2>
          <div class="my-[30px] flex items-center justify-center">
            <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
            <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-[20px] lg:gap-[40px]">
          <div
              v-for="(text, id) in steps"
              :key="id"
              :class="[
          'relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full flex items-center justify-center cursor-pointer',
          'hover:bg-black hover:bg-opacity-40 hover:text-white transition-all duration-300',
          activeId === id
            ? 'bg-transparent border-2 border-white text-white'
            : 'bg-[#169bb2] bg-opacity-60 text-[#222222]'
        ]"
              @click="updateText(text, id)"
          >
            <span class="font-bold text-base lg:text-lg text-center">{{ id }}</span>
          </div>
        </div>
        <div>
          <p class="text-sm lg:text-base text-gray-300 mt-[30px] text-center">
            {{ dynamicText }}
          </p>
        </div>
      </div>
    </div>
    <div id="our-services">
      <div class="pt-[90px]">
        <h2 class="text-center text-3xl text-black">Our Service</h2>
        <div class="my-[30px] flex items-center justify-center">
          <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
          <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
          <div class="w-[200px] lg:w-[400px] h-[1px] bg-gray-400"></div>
        </div>
        <div
            class="text-center flex  sm:flex-row justify-center gap-[10px] my-[40px] lg:flex flex-col"
            data-aos="fade-up"
        >
          <button
              @click="filterImages('outdoor')"
              :class="{
          'bg-[#169bb2] text-white': currentCategory === 'outdoor',
          'text-gray-600': currentCategory !== 'outdoor'
        }"
              class="py-[10px] px-[6px] max-w-full sm:max-w-[270px] w-full cursor-pointer hover:bg-black hover:text-white transition-all"
          >
            OUTDOOR ADVERTISING
          </button>
          <button
              @click="filterImages('digital')"
              :class="{
          'bg-[#169bb2] text-white': currentCategory === 'digital',
          'text-gray-600': currentCategory !== 'digital'
        }"
              class="py-[10px] px-[6px] max-w-full sm:max-w-[270px] w-full cursor-pointer hover:bg-black hover:text-white transition-all"
          >
            DIGITAL MARKETING
          </button>
        </div>
      </div>
      <div>
        <transition-group name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full ">
          <div
              v-for="(image, index) in filteredImages.slice(0, 8)"
              :key="image.id"
              class="relative group overflow-hidden"
              @click="openPopup(image)"
          >
            <img
                :src="image.src"
                :alt="image.alt"
                class="transition-transform duration-300 group-hover:scale-110"
            />
            <div
                class="absolute inset-0 bg-white bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-[#169bb2] text-center text-sm sm:text-2xl font-bold">
                {{ image.caption }}
              </p>
            </div>
          </div>
        </transition-group>
        <div
            v-if="isOpen"
            class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
            :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"
            @click.self="closePopup"
        >
          <div
              class="relative bg-black max-w-full sm:max-w-5xl lg:max-w-4xl w-full mx-4 rounded-2xl shadow-2xl transform transition-transform duration-300 max-h-[90vh] overflow-hidden"
              :class="{ 'scale-100': isOpen, 'scale-95': !isOpen }"
          >
            <ServiceScroller
                :images="filteredImages"
                :initial-index="currentIndex"
            />
            <button
                @click="closePopup"
                class="fixed top-4 right-4 text-white z-50 hover:text-gray-300 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-200 font-bold"
                aria-label="Close popup"
            >
              ✖
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center py-[60px] bg-[#169bb2]">
        <NuxtLink
            to="/works"
            class="py-[10px] px-[6px] max-w-[270px]  w-full border border-black rounded-2 cursor-pointer hover:text-white hover:bg-black transition-all duration-500 text-center"
        >
          VIEW ALL SERVICES
          <i class="fa-solid fa-chevron-right ml-[10px]"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="py-[90px]">
      <div data-aos="fade-up">
        <h2 class="text-center text-3xl md:text-4xl text-black font-bold mb-2">Facts</h2>
        <div class="my-[30px] flex items-center justify-center">
          <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
          <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
          <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
        </div>
      </div>
      <div id="facts-section"
           class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] w-full px-[20px] mx-auto py-[30px]">
        <div v-for="fact in facts" :key="fact.id" class="flex flex-col items-center text-center">
          <img :src="fact.icon" :alt="fact.title" class="mb-4 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"/>
          <div v-if="animatedValues[fact.id]" class="text-3xl sm:text-5xl font-bold mb-2">{{
              animatedValues[fact.id]
            }}
          </div>
          <div class="text-[#169bb2] uppercase text-xs sm:text-sm tracking-wider">{{ fact.title }}</div>
        </div>
      </div>
    </div>

    <div id="clients-partners">
      <div class="py-[60px] bg-[#b2b2b2]">
        <h2 class="text-center text-3xl text-black">Clients & Partners</h2>
        <div class="my-[30px] flex items-center justify-center">
          <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
          <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
          <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
        </div>
        <div class="max-w-[1140px] w-full mx-auto flex justify-center">
          <partner-scroller/>
        </div>
      </div>
    </div>
    <div id="contact-us">
      <div class="max-w-[1170px] w-full py-12 md:py-[90px] mx-auto px-[15px]">
        <div data-aos="fade-up">
          <h2 class="text-center text-2xl md:text-3xl text-black">Contact Us</h2>
          <div class="my-[30px] flex items-center justify-center">
            <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
            <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
            <div class="w-[200px] md:w-[400px] h-[1px] bg-gray-400"></div>
          </div>
        </div>
        <div class="max-w-[1200px] pt-6 md:pt-[30px] w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
          <div data-aos="fade-right" class="flex">
            <form @submit.prevent="sendForm" class="flex flex-col space-y-4 md:space-y-5 w-full">
              <input
                  v-model="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  class="w-full border border-gray-300 p-3 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-[#169bb2] text-sm md:text-base md:max-w-[7 00px] max-w-full"
                  required
              />
              <input
                  v-model="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  class="w-full border border-gray-300 p-3 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-[#169bb2] text-sm md:text-base md:max-w-[700px] max-w-full"
                  required
              />
              <input
                  v-model="phone"
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  class="w-full border border-gray-300 p-3 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-[#169bb2] text-sm md:text-base md:max-w-[700px] max-w-full"
              />
              <textarea
                  v-model="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  class="w-full border border-gray-300 p-3 focus:outline-none bg-gray-100  focus:ring-2 focus:ring-[#169bb2] text-sm  md:text-base lg:hidden flex md:max-w-[700px] max-w-full"
                  required
              ></textarea>
              <button
                  type="submit"
                  class="max-w-[170px] w-full bg-white text-black text-sm py-2 px-4 border border-black hover:bg-black hover:text-white transition-all duration-300  md:w-auto"
              >
                SUBMIT FORM
              </button>

              <p v-if="successMessage" class="mt-2 text-green-600 font-semibold text-sm md:text-base">{{
                  successMessage
                }}</p>
              <p v-if="errorMessage" class="mt-2 text-red-600 font-semibold text-sm md:text-base">{{ errorMessage }}</p>
            </form>
          </div>
          <div class="max-w-[390px] w-full lg:flex hidden">
            <textarea
                v-model="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                class="w-full border border-gray-300 p-3 focus:outline-none bg-gray-100  focus:ring-2 focus:ring-[#169bb2] text-sm md:text-base lg:flex hidden"
                required
            ></textarea>
          </div>
          <div class="w-full md:max-w-[471px]" data-aos="fade-left">
            <p class="text-base md:text-lg font-bold text-black mb-2">CONTACT INFO</p>
            <p class="text-xs md:text-sm text-[#169bb2]">
              Armenia, 0026, Yerevan. Garegin Nzhdeh Sr. 3a Building<br/>
              (in the building of "Business Center 34")<br/>
              (Shengavit adm. district)
            </p>
            <div class="w-full h-[1px] bg-gray-200 my-2"></div>
            <p class="text-xs">
              <span class="font-semibold text-[#169bb2] pr-4 md:pr-[20px]">Phone:</span> (374) 98 709769
            </p>
            <div class="w-full h-[1px] bg-gray-200 my-2"></div>
            <p class="text-xs">
              <span class="font-semibold text-[#169bb2] pr-4 md:pr-[20px]">Phone:</span> (374) 12 709709
            </p>
            <div class="w-full h-[1px] bg-gray-200 my-2"></div>
            <p class="text-xs">
              <span class="font-semibold text-[#169bb2] pr-3 md:pr-[19px]">Email:</span>
              armada.co.are@gmail.com
            </p>
            <div class="w-full h-[1px] bg-gray-200 my-2"></div>
            <p class="text-xs">
              <span class="font-semibold text-[#169bb2] pr-6 md:pr-[36px]">Web:</span>
              <a href="http://armada-co.com" class="hover:underline">http://armada-co.com</a>
            </p>
            <div class="w-full h-[1px] bg-gray-200 my-2"></div>
            <p class="text-xs">
              <span class="font-semibold text-[#169bb2] pr-4 md:pr-[27px]">Open:</span> Monday - Friday 09:30 - 16:00
            </p>
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
        <div class="max-w-[1200px] w-full px-[20px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-xl  mb-[20px]">About us</h2>
            <h1 class="text-sm text-gray-300">
              We are known for our top-notch customer service and our years of experience in the advertising industry.
              Combining our experience and know-how, we can do great things for you and your business. We love
              developing
              fruitful relationships with our clients and partners by using our excellent communication, special
              approach
              and time-tested business processes.
            </h1>
          </div>
          <div>
            <h2 class="text-xl  mb-4">Contact Us</h2>
            <p class="leading-relaxed text-sm text-gray-300">
              Armenia, 0026, Yerevan Garegin Nzhdehi St., 34 Building (in the building of "Business Center 34")
              (Shengavit
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
                                                                                  class="hover:underline">http://armada-co.com</a>
              </li>
              <div class="w-full h-[1px] bg-gray-500"></div>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div
            class="max-w-[1170px] w-full mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white pt-5 pb-4 px-4 sm:px-6 lg:px-8">
          <h1 class="text-center md:text-left">
            © Copyright 2025 - ARMADA advertising by
            <a
                class="text-[#169bb2] hover:underline"
                href="https://www.x-tech.am/"
                target="_blank"
                rel="noopener noreferrer"
            >
              X-TECH Creative Studio
            </a>
          </h1>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook text-white text-lg hover:text-[#169bb2] transition-colors"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter text-white text-lg hover:text-[#169bb2] transition-colors"></i>
            </a>
          </div>
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
</style>
<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import PartnerScroller from '~/component/Partner-Scroller.vue';
import ImageScroller from '~/component/Image-Scroller.vue';
import ServiceScroller from '~/component/Service-Scroller.vue';

const currentCategory = ref('all');
const isOpen = ref(false);
const currentIndex = ref(0);
const currentImage = ref(null);
const activeSection = ref('home');
const scroll = ref(false);
const animatedValues = ref([0, 0, 0, 0]);
const dynamicText = ref("Understanding Clients needs is definitely the most important part of our product creation. On this stage ARMADA team along with the Client defines Project goals, requirements, and main deliverables.");
const activeId = ref(null);


const name = ref('');
const phone = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const sendForm = async () => {
  try {
    const {data, error} = await useFetch('/api/contact', {
      method: 'POST',
      headers: {Accept: 'application/json'},
      body: {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
      },
    });
    if (error.value) {
      throw error.value;
    }
    successMessage.value = data.value?.message || 'Сообщение успешно отправлено!';
    errorMessage.value = '';
    name.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';
  } catch (err) {
    errorMessage.value = err.response?._data?.message || 'Произошла ошибка. Попробуйте снова.';
    successMessage.value = '';
  }
};

const facts = [
  {id: 0, icon: '/images/portfolio.svg', title: 'PROJECTS IMPLEMENTED', value: 450},
  {id: 1, icon: '/images/favorite.png', title: 'CLIENTS & PARTNERS', value: 85},
  {id: 2, icon: '/images/location.svg', title: 'LOCATIONS IN YEREVAN', value: 59},
  {id: 3, icon: '/images/cup.svg', title: 'YEARS WORKING IN ARMENIA', value: 12},
];

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

const steps = {
  "Meet & Agree": "Understanding Clients needs is definitely the most important part of our product creation. On this stage ARMADA team along with the Client defines Project goals, requirements, and main deliverables.",
  "Idea & Concept": "How to generate creative ideas? Concept development is a process of creative and collaborative work where the main actors are ARMADA team and the Client.",
  "Design & Create": "When the main idea and the final concept are ready it’s time to develop product design. Design details are agreed with the Client and the process of creation starts.",
  "Build & Install": "The next step of designing and creating the product is its final installation. This step requires thorough and responsible approach. The success comes when the whole process and final result meets the expectations of the Clients and make them happier."
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

const openPopup = (image) => {
  currentIndex.value = filteredImages.value.findIndex(img => img.id === image.id);
  isOpen.value = true;
};

const closePopup = () => {
  isOpen.value = false;
  currentIndex.value = 0;
};

const filterImages = (category) => {
  currentCategory.value = category;
};

const updateText = (text, id) => {
  dynamicText.value = text;
  activeId.value = id;
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

function handleScroll() {
  scroll.value = window.scrollY > 0;
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      if (id === 'facts-section') {
        facts.forEach((fact, index) => {
          animateCounter(index, 0, fact.value, 3000);
        });
      }
      if (id && id !== 'facts-section') {
        activeSection.value = id;
      } else if (!id) {
        activeSection.value = 'home';
      }
    }
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const factsSection = document.querySelector('#facts-section');
  if (factsSection) {
    observer.observe(factsSection);
  }
  const sections = ['home', 'about-us', 'our-services', 'clients-partners', 'contact-us'];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
