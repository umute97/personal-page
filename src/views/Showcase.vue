<template>
    <TabPane :tabs="tabs" @selectTab="selectTab" :selectedIndex="selectedIndex" :activeClass="activeClass">
        <Tab v-for="tab in tabs" :key="tab.title" :isActive="tab.isActive">
            {{ tab.content }}
            <ShowcaseItem v-for="item in tab.items" :key="item.title" :title="item.title" :desc="item.desc"
                :img="item.img" :link="item.link" :action-text="item.actionText" />
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
        content: "Whenever I had some time during research I tried to expand my tech knowledge building some apps and trying out different \
        frameworks. Vue really stuck with me so most of them I built using that but I always try something new for each project I take on. \
        I did a ton of data analysis but those analyses aren't as flashy as the projects here.", items: [
            {
                title: "irradiation interface",
                desc: "In order to irradiate the test structures I investigated during my time in the field \
                I built an interface to control the x-ray irradiation setup. It's built with Vue2 on top of \
                the Vuetify framework.",
                img: "https://i.imgur.com/Mg9BfMj.png",
                link: "https://gitlab.kit.edu/kit/etp/cms-hardware/software/it/x-ray/irradiation-interface",
                actionText: "Check it out"
            },
            {
                title: "mcgui",
                desc: "Someone at my institute built a GUI for the measurements we do in the lab. I took it and made it better first, \
                solving a bunch of problems with it but it wasn't enough. So I built a new one from scratch, trying to keep the old \
                format as best as possible since people in the lab were used to it. Vue3 + TypeScript, Naive UI Framework, a CI/CD that \
                actually works and a lot of testing.",
                img: "https://i.imgur.com/O3Hrn14.png",
                link: "https://gitlab.cern.ch/kit-cms/measurementcontrol/MeasurementControl-GUI",
                actionText: "Check it out"
            },
            {
                title: "siri",
                desc: "A quick little interface I built to control the Iterative Irradiation Setup I built for my master's (see Research). \
                Works quite well even though it was one of my first frontend projects. It's built with Vue3 + TypeScript and vanilla CSS.",
                img: "https://i.imgur.com/LAqmud6.png",
                link: "https://github.com/umute97/siri-gui",
                actionText: "Check it out"
            },
            {
                title: "personal page",
                desc: "The page you are looking at right now. I built it with Vue3 + vanilla CSS.",
                img: "https://i.imgur.com/YcGOKEb.png",
                link: "https://github.com/umute97/personal-page",
                actionText: "Check it out"
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
                actionText: "Read"
            },
            {
                title: "Development of an Iterative Irradiation Setup and Online Beam Monitor for Silicon Sensor Irradiation Studies",
                desc: "In the first part, a setup was built to carry out iterative irradiations on silicon strip sensors and \
                characterize them in situ. In the second part, an ionization chamber for online beam monitoring has been designed and built. To read out \
                the generated ion current, a two-staged transimpedance amplifier circuit has been designed. X-ray irradiation and \
                proton irradiations were used to characterize the setup.",
                img: "https://i.imgur.com/w7KzGfX.png",
                link: "https://publish.etp.kit.edu/record/22080",
                actionText: "Read"
            },
        ]
    },
    {
        title: "Skills", isActive: false,
        content: "I have a good grasp on tech stuff in general and am a quick learner but here are some of the technologies I am \
        particularly experienced with.", items: [
            {
                title: "frontend",
                desc: "The usual suspects: HTML, CSS, TypeScript. I am quite comfortable with Vue3 (started out with Vue2) and I am \
                currently learning more about UX/UI design. Learned figma for that. You know what they say: If you can't design it, \
                you can't build it.",
                img: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
                link: "none",
                actionText: "none"
            },
            {
                title: "backend and data analysis",
                desc: "I am more than proficient in Python, especially in the scientific stack. I did a lot of data analysis during my \
                days in research and have built many different full stack applications with Flask, Django and my frontend framework of \
                choice. I am more concerned with getting it right rather than getting it fast but usually, I manage to do both.",
                img: "https://images.unsplash.com/photo-1599658880436-c61792e70672",
                link: "none",
                actionText: "none"
            },
            {
                title: "docker",
                desc: "I have used docker for almost all of my projects and administrated the swarm cluster at my old institute. I am \
                very comfortable with it, even though it can be a pain sometimes. Containerize all the things!",
                img: "https://wallpapercave.com/wp/wp7718117.jpg",
                link: "none",
                actionText: "none"
            },
            {
                title: "silicon technology",
                desc: "Well, I got a bachelor's, master's and soon a PhD in it. Got a question? I probably have an answer. I have worked \
                with silicon detectors for 6 years now. I gained a lot of knowledge about hardware, electronics and the physics behind it all.",
                img: "https://bregnery.github.io/images/RSD_umut.png",
                link: "none",
                actionText: "none"
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