<template>
    <TabPane :tabs="tabs" @selectTab="selectTab" :selectedIndex="selectedIndex" :activeClass="activeClass">
        <Tab v-for="tab in tabs" :key="tab.title" :isActive="tab.isActive">
            {{ tab.content }}
            <ShowcaseItem v-for="item in tab.items" :key="item.title" :title="item.title" :desc="item.desc"
                :img="item.img" />
        </Tab>
    </TabPane>
</template>

<script lang="ts" setup>
import ShowcaseItem from "@/components/ShowcaseItem.vue";
import Tab from "@/components/Tab.vue";
import TabPane from "@/components/TabPane.vue";
import { computed, ref } from "vue";

export interface ActiveClass {
    [key: string]: string;
}

const selectedIndex = ref(0)

const tabs = ref([
    {
        title: "Projects", isActive: true,
        content: "These are some projects I have worked on in the past:", items: [
            {
                title: "Project 1",
                desc: "Description 1",
                img: "https://via.placeholder.com/16x9",
            },
            {
                title: "Project 2",
                desc: "Description 2",
                img: "https://via.placeholder.com/16x9",
            },
        ]
    },
    {
        title: "Research", isActive: false,
        content: "Here you can find the research I did during my time in the field:", items: [
            {
                title: "Research 1",
                desc: "Description 1",
                img: "https://via.placeholder.com/16x9",
            },
            {
                title: "Research 2",
                desc: "Description 2",
                img: "https://via.placeholder.com/16x9",
            },
        ]
    },
    {
        title: "Skills", isActive: false,
        content: "Technologies I am familiar with:", items: [
            {
                title: "Skill 1",
                desc: "Description 1",
                img: "https://via.placeholder.com/16x9",
            },
            {
                title: "Skill 2",
                desc: "Description 2",
                img: "https://via.placeholder.com/16x9",
            },
        ]
    },
]);

function selectTab(index: number) {
    selectedIndex.value = index;

    tabs.value.forEach((tab, idx) => {
        tab.isActive = (idx === index)
    })
}

const activeClass = computed(() => {
    let cl: ActiveClass = {}
    tabs.value.forEach((tab) => {
        cl[tab.title] = tab.isActive ? 'active' : ''
    })

    return cl
})
</script>