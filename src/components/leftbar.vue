<template>
    <li
        class="mr-2 transition-all rounded-xl text-slate-500
                hover:bg-slate-100 hover:text-slate-700 hover:text-lg
                dark:text-slate-400
                dark:hover:bg-slate-900 dark:hover:text-slate-200 dark:hover:shadow-md dark:hover:shadow-slate-700"
    >
        <button @click="$emit('setAT', content.to)" class="flex items-center p-2 w-full">
            <i class="text-sm mr-1 fa-solid" :class="content.icon"></i>{{ content.text }}
        </button>
    </li>
</template>

<script>
export default {
    props: ["content"],
    emits: ["setAT"]
}
</script>