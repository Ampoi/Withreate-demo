<template>
  <div id="letsStart" class="hidden">
    <div class="fixed w-full p-2 bg-sky-500 top-0 left-0 text-white flex flex-row items-center">
      <div class="text-center grow">
        ログインすることでWithreateを最大限に活用できます！  
        <router-link to="login" class="underline">ログイン</router-link>
      </div>
      <button @click="closeThis">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeThis(){
      document.getElementById("letsStart").style.display = "none";
    }
  }
}
</script>