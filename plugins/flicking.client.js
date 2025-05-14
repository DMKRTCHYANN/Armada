import { defineNuxtPlugin } from '#app';
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
// import {Stack, StackItem} from "vue-stack-grid";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component("Flicking", Flicking);
    // nuxtApp.vueApp.component('Stack', Stack);
    // nuxtApp.vueApp.component('StackItem', StackItem);
});
