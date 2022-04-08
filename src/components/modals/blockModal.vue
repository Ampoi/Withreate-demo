<template>
    <div
        :class="{hide:!data.opend}"
        class="fixed bg-black/30 h-screen w-screen top-0 left-0 z-modal transiton">
        <div class="h-[800px] w-[600px] bg-white rounded-md shadow-lg mx-auto mt-20
                    dark:bg-slate-800">
            <div class="w-full h-60 bg-cover bg-center rounded-t-md"
                 :style="`background-image: url(${projectData.bgimage})`">
            <div class="w-full h-full bg-black/40 rounded-t-md">
                <!--×ボタン-->
                <button
                    class="float-right mt-4 mr-5" @click="$emit('closeModal')"
                ><i class="fa-solid fa-xmark text-3xl text-white"></i></button>

                <div class="flex flex-row h-56 pt-16 pl-4">
                    <div class="basis-40 border-r-2">
                        <!--アイコン-->
                        <div class="m-6 w-28 h-28 bg-cover bg-center rounded-2xl shadow-lg"
                             :style="`background-image: url(${projectData.icon})`"></div>
                    </div>
                    <!--文字とか-->
                    <div class="grow px-6 py-1">
                        <h1 class="text-white text-4xl font-bold"
                        >{{ projectData.name }}</h1>
                        <p class="text-white mt-1">{{ projectData.description }}</p>
                        <p class="text-sm text-slate-300 flex items-center">
                            <i class="fa-solid fa-user-large text-xs mr-1"></i>リーダー: {{ leaderData.name }}
                        </p>
                        <div class="w-full h-9 mt-2">
                            <!--ハートボタン-->
                            <button :class="{'bg-pink-200 text-pink-500': goodClicked}"
                                    class="bg-gray-50 text-gray-300 py-1 px-2 text-lg rounded-lg transition-all
                                           hover:text-2xl hover:mt-[-2px] hover:ml-[-3px] float-left">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <!--参加ボタン-->
                            <button class="ml-4 py-1 px-2 text-md text-white rounded-lg transition-all border-white border-2 bg-transparent
                                           hover:text-lg hover:mt-[-2px] hover:ml-[calc(1rem-3px)] hover:bg-white/30">
                                開発チームに参加する
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="h-[560px] w-full overflow-y-auto">
                <div class="bg-slate-100 w-[560px] mx-auto mt-[20px] rounded-lg border-2 p-4">
                    <h1 class="text-xl font-bold"
                    >特徴</h1>
                    <p class="pb-2">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <h1 class="text-xl font-bold"
                    >ターゲット</h1>
                    <p class="pb-2">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <h1 class="text-xl font-bold"
                    >対応デバイス</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFirestore, doc, getDoc } from "firebase/firestore"

const db = getFirestore();

export default {
    props: ["data"],
    emits: ["closeModal"],
    data(){return{
        projectData: {},
        goodClicked: true,
        leaderData: {}
    }},
    methods: {
        //モーダルが開かれた時
        async openReload(){
            const projectRef = doc(db, "projects", this.data.id);
            const projectSnap = await getDoc(projectRef);
            this.projectData = projectSnap.data()
            console.log(this.projectData)

            const leaderRef = doc(db, "users", this.projectData.leaderid);
            const leaderSnap = await getDoc(leaderRef);
            this.leaderData = leaderSnap.data()
        }
    }
}
</script>

<style>
.hide{
    display: none;
}
</style>