<template>
    <Header></Header>
    <div class="text-center mt-5">
        <h1 class="text-5xl font-bold
                dark:text-white">
                Create best.<br>
                With your best 
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">
            team</span>.</h1>
        <button class="mt-5 p-2 dark:bg-sky-600 dark:text-white rounded-lg shadow-md">始める</button>
    </div>
</template>
<script>
import Header from "../components/header.vue"

export default {
    components: {
        Header
    }
}
</script>