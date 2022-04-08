<template>
  <BlockModal
    :data="blockModal"
    @closeModal="closeBlockModal"
    ref="blockmodal"/>
  <LetsStart/>
  <div class="h-full">
    <Header></Header>
    <main class="flex flex-row mt-2 h-[calc(100vh-88px)]">
      <ul class="basis-40 text-lg pt-3 font-bold pl-2">
        <Leftbar
          v-for="content in leftbar"
          :key="content.key"
          :content="content"
          @setAT="setAT"
        />
      </ul>
      <div class="border-2 border-slate-200 rounded-lg bg-slate-100 h-full p-4 flex-auto
                  dark:border-slate-900 dark:bg-slate-900 dark:shadow-md dark:shadow-slate-700 overflow-y-auto">
        <component
          :is="activeTab"
          @openModal="openBlockModal"/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/header.vue"
import BlockModal from "../components/modals/blockModal.vue"
import Leftbar from "../components/leftbar.vue"
import LetsStart from "../components/letsStart.vue"

import Discover from "../components/tabs/discover.vue"
import MyPage from "../components/tabs/myPage.vue"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const db = getFirestore();

export default {
  components: {
    Header,
    Discover,
    MyPage,
    BlockModal,
    Leftbar,
    LetsStart
  },
  data(){return {
      activeTab: "Discover",
      leftbar: [
          {
              text: "探索",
              icon: "fa-map",
              to: "Discover"
          },
          {
              text: "マイページ",
              icon: "fa-circle-user",
              to: "MyPage"
          }
      ],
      blockModal:{
        opend:false,
        id:""
      }
  }},
  methods: {
      setAT(tab){this.activeTab = tab},
      openBlockModal(id){
        this.blockModal.opend = true
        this.blockModal.id = id
        this.$refs.blockmodal.openReload()
      },
      closeBlockModal(){this.blockModal.opend = false}
  },
  mounted(){
    //Authencation
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        this.myId = uid;

        const usersRef = doc(db, "users", uid);
        const usersSnap = getDoc(usersRef);

        usersSnap.then(docSnap => {
          if (docSnap.exists()) {
            //すでにアカウント登録済み
            console.log("もう登録してるね^ ^")
          } else {
            //新規の人
            console.log("まだかい");
          }
        })
       console.log("login")
      } else {
        // User is signed out
        document.getElementById("letsStart").style.display = "inherit"
      }
    });
  }
}
</script>