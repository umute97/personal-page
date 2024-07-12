<template>
    <TabPane :tabs="tabs" @selectTab="selectTab" :selectedIndex="selectedIndex" :activeClass="activeClass">
        <Tab v-for="tab in tabs" :key="tab.title" :isActive="tab.isActive">
            {{ tab.content }}
            <ShowcaseItem v-for="item in tab.items" :key="item.title" :title="item.title" :desc="item.desc"
                :img="item.img" :link="item.link" :action-text="tab.actionText" />
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
        title: "Projects", isActive: true, actionText: "Check it out",
        content: "Whenever I had some time during research I tried to expand my tech knowledge building some apps and trying out different \
        frameworks. Vue really stuck with me so most of them I built using that but I always try something new for each project I take on. \
        I did a ton of data analysis but those analyses aren't as flashy as the projects here.", items: [
            {
                title: "siri",
                desc: "A quick little interface I built to control the Iterative Irradiation Setup I built for my master's (see Research). \
                Works quite well even though it was one of my first frontend projects. It's built with Vue3 + TypeScript and vanilla CSS.",
                img: "https://i.imgur.com/LAqmud6.png",
                link: "https://github.com/umute97/siri-gui",
            },
            {
                title: "mcgui",
                desc: "Someone at my institute built a GUI for the measurements we do in the lab. I took it and made it better first, \
                solving a bunch of problems with it but it wasn't enough. So I built a new one from scratch, trying to keep the old \
                format as best as possible since people in the lab were used to it. Vue3 + TypeScript, Naive UI Framework, a CI/CD that \
                actually works and a lot of testing.",
                img: "https://i.imgur.com/O3Hrn14.png",
                link: "https://gitlab.cern.ch/kit-cms/measurementcontrol/MeasurementControl-GUI",
            },
            {
                title: "personal page",
                desc: "The page you are looking at right now. I built it with Vue3 + vanilla CSS.",
                img: "https://i.imgur.com/YcGOKEb.png",
                link: "https://github.com/umute97/personal-page",
            },
        ]
    },
    {
        title: "Research", isActive: false, actionText: "Read",
        content: "Here you can find the research I did during my time in the field. I specialized in silicon detector physics, so I know \
        my way around a silicon lab, hardware in general and overcoming frustration. Mastered the last one.", items: [
            {
                title: "Characterization of Silicon Float Zone Material for the CMS Phase-2 Upgrade",
                desc: "Silicon float zone material with a thickness of 290 µm was characterized in terms of its electrical properties. \
                In addition, charge collection properties and annealing behavior were investigated.",
                img: "https://i.imgur.com/Jo9iQKk.png",
                link: "https://publish.etp.kit.edu/record/21760",
            },
            {
                title: "Development of an Iterative Irradiation Setup and Online Beam Monitor for Silicon Sensor Irradiation Studies",
                desc: "In the first part, a setup was built to carry out iterative irradiations on silicon strip sensors and \
                characterize them in situ. In the second part, an ionization chamber for online beam monitoring has been designed and built. To read out \
                the generated ion current, a two-staged transimpedance amplifier circuit has been designed. X-ray irradiation and \
                proton irradiations were used to characterize the setup.",
                img: "https://i.imgur.com/w7KzGfX.png",
                link: "https://publish.etp.kit.edu/record/22080",
            },
        ]
    },
    {
        title: "Skills", isActive: false, actionText: "Learn more",
        content: "Technologies I am familiar with:", items: [
            {
                title: "Skill 1",
                desc: "Description 1",
                img: "https://via.placeholder.com/16x9",
                link: "https://via.placeholder.com/16x9",
            },
            {
                title: "Skill 2",
                desc: "Description 2",
                img: "https://via.placeholder.com/16x9",
                link: "https://via.placeholder.com/16x9",
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