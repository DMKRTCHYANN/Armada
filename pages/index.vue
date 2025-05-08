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
                to="/our-services"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              OUR SERVICES
            </NuxtLink>
            <NuxtLink
                to="/clients-partners"
                class="text-gray-300 hover:text-[#169bb2] transition-colors"
            >
              CLIENTS & PARTNERS
            </NuxtLink>
            <NuxtLink
                to="/contact-us"
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
    <div class="mx-[334.5px] px-[15px]">
      <h1 class="text-center text-4xl text-[#606060]">About Us</h1>
      <div class="my-[30px] flex items-center justify-center">
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
        <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
        <div class="w-[400px] h-[1px] bg-gray-400"></div>
      </div>
      <div>
        <p class="text-sm text-[#606060]">
          Since 2006 ARMADA’s team has constantly been improving and diversifying company’s products
          and services to offer relevant solutions to our clients’ and partners’ needs, to the inhabitants
          and passengers in urban environment. For the efforts made in this sphere our company was awarded
          BEST ADVERTISING MEANS PROJECT by Yerevan Outdoor Advertising Festival (YOAF) 2017.
          <img src="" alt="">
        </p>
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
          <span class="text-sm text-[#606060] font-bold mt-6">Our Audiences:</span>   Today’s urban audiences
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
      <div class="mt-[60px]">
        <h2 class="text-center text-3xl text-[#606060]">Our Vision</h2>
        <div class="my-[30px] flex items-center justify-center">
          <div class="w-[400px] h-[1px] bg-gray-400"></div>
          <div class="w-[6px] h-[6px] bg-[#169bb2] rounded-full mx-[10px]"></div>
          <div class="w-[400px] h-[1px] bg-gray-400"></div>
        </div>
        <div class="flex justify-center gap-6 px-4">
          <div class="w-1/3 p-4 text-center">
            <h3 class="text-xl text-[#169bb2] mb-2">ENVIRONMENTAL PRIORITIES</h3>
            <p class="text-gray-600 mb-4">
              ARMADA's activities are implemented at the heart of Yerevan, closest to users and economic activity. This presence means we have a key responsibility: limiting our environmental footprint.
            </p>
            <img src="/images/new_911.jpg" alt="Environmental Priority" class="w-full h-auto">
          </div>
          <div class="w-1/3 p-4 text-center">
            <h3 class="text-xl text-[#169bb2] mb-2">SOCIAL PRIORITIES</h3>
            <p class="text-gray-600 mb-4">
              In ARMADA teamwork creates synergy. Each one of our team members is appreciated and essential to our agency. Respect for people, safety, and health constitute the core of our company values.
            </p>
            <img src="/images/new_911.jpg" alt="Social Priority" class="w-full h-auto">
          </div>
          <div class="w-1/3 p-4 text-center">
            <h3 class="text-xl text-[#169bb2] mb-2">LISTENING TO OUR STAKEHOLDERS</h3>
            <p class="text-gray-600 mb-4">
              We support our stakeholders by providing innovative solutions that incorporate sustainable development. This allows us to better serve the needs of our clients, partners and users in Armenia.
            </p>
            <img src="/images/new_911.jpg" alt="Stakeholders" class="w-full h-auto">
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

</script>