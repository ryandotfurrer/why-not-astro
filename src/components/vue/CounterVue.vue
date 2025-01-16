<script setup>
import { ref } from "vue";
import PlusIconVue from "./PlusIconVue.vue";
import MinusIconVue from "./MinusIconVue.vue";

const count = ref(0);

const increment = () => {
 count.value++;
};

const decrement = () => {
 count.value--;
};
</script>

<template>
 <div>
  <p class="text-lg text-green-50">Counter: {{ count }}</p>
  <div class="flex gap-2">
   <button class="bg-success text-success-foreground px-4 py-2 rounded-sm" @click="increment">
    <PlusIconVue>
     <span class="sr-only">Increment</span>
    </PlusIconVue>
   </button>
   <button
    class="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm"
    @click="decrement"
   >
    <MinusIconVue>
     <span class="sr-only">Decrement</span>
    </MinusIconVue>
   </button>
  </div>
 </div>
</template>
