<template>
    <div class="h-60 rounded-md bg-slate-50 text-left shadow-lg
                dark:bg-slate-800">
        <!-- image-->
        <div class="h-36 rounded-md bg-center bg-cover"
                :style="`background-image: url(${data.icon})`"></div>
        <div class="h-36 pt-4 backdrop-blur rounded-md mt-[-9rem]">
            <component :is="data.type" class="float-right mt-[-10px] mr-[4px]"/>
            <!--icon-->
            <div class="h-28 w-28 mx-auto rounded-2xl bg-cover bg-center shadow-lg"
                    :style="`background-image: url(${data.icon})`"></div>
        </div>
        <div class="p-2">
            <h1 class="font-bold text-2xl
                        dark:text-white">{{data.name}}</h1>
            <p class="text-xs text-slate-500">{{data.description}}</p>
            <button class="font-bold bg-slate-200 px-2 py-1 rounded-md float-right transition duration-300
                           hover:text-white hover:bg-sky-500
                           dark:text-white dark:bg-slate-700
                           dark:hover:bg-sky-600"
                    @click="$emit('openModal', data.id)">
                もっと詳しく
            </button>
        </div>
    </div>
</template>

<script>
import Idea from "../components/icons/idea.vue";
import Developing from "../components/icons/developing.vue";
import Launched from "../components/icons/launched.vue";

export default {
    components:{
        Idea,
        Developing,
        Launched
    },
    props:["data"],
    emits:["openModal"]
}
</script>