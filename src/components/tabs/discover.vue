<template>
    <div class="grid gap-4
                sm:grid-cols-2
                md:grid-cols-3">
        <Block
            v-for="block in blocks"
            :key="block.key"
            :data="block"
            @openModal="openModal"
        ></Block>
    </div>
</template>

<script>
import Block from "../Block.vue"
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore"

const db = getFirestore();
const projectQ = query(collection(db, "projects"));

export default{
    components: {
        Block
    },
    params: [
        "openModal"
    ],
    methods: {
        openModal(id){this.$emit("openModal", id)}
    },
    mounted: async function(){
        const projectsSnapshot = await getDocs(projectQ, where("name", "description", "icon", "type"));
        let newBlocks = []
        projectsSnapshot.forEach((doc) => {
            let newBlock = doc.data()
            newBlock.id = doc.id
            console.log(newBlock)
            newBlocks.unshift(newBlock)
        })
        this.blocks = newBlocks
        console.log(this.blocks)
    },
    data(){return{
        blocks:[]
    }}
}
</script>