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
  <div
      class="h-screen bg-cover bg-center "
      style="background-image: url('/images/services-img.jpg'); ">
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>
