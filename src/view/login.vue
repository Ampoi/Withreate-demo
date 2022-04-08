<template>
  <h1 class="font-bold text-5xl text-center mt-12
             dark:text-white">Withreateにログイン</h1>
  <p class="text-center mt-2
            dark:text-white">ログインすることでプロジェクトの投稿や返信、いいね などができます</p>
  <div class="w-80 h-32 mx-auto mt-4">
    <button class="uppercase h-12 mt-3 text-white w-full rounded bg-slate-700 transition-all
                   hover:bg-slate-600 hover:text-lg"
            @click="googleLogin">
      <i class="fa fa-google mr-2"></i>Googleでログイン
    </button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { createRouter, createWebHistory } from 'vue-router'
import Console from "../view/console.vue";

//router関連
const routes = [
  {
    path:"/",
    name:"app",
    component:Console
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  methods: {
    googleLogin(){
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(() => {
          console.log(`ログインしました！`)
          this.$router.push({name: "app"});
        })/*.catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          
          console.log();
        });*/
      }
    }
}
</script>