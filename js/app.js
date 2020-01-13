// VUE APPLICATION

// Component: Project
Vue.component('project', {
    props: ['project'],
    methods: {
        closeProject: function () {
            this.$parent.closeProject();
        }
    },
    template: `
        <div class="wrap">
            <header>
                <p>
                    <a class="btn" v-on:click="closeProject">
                        <i class="fal fa-long-arrow-left"></i><span>Go <strong>Back</strong></span>
                    </a>
                </p>
                <h2>{{project.name}}</h2>
                <img v-bind:src="project.media.cover" v-bind:style="{ backgroundColor: project.color }">
                <p v-if="project.url" style="margin-top: -50px">
                    <a class="btn btnYellow" v-bind:href="project.url" target="_blank">
                        <span>Launch <strong>This</strong></span>
                    </a>
                </p>
            </header>
            <p>{{project.desc}}</p>
            <div id="video" v-if="project.media.video">
                <iframe
                    width="560"
                    height="315"
                    v-bind:src="project.media.video"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <ul id="gallery">
                <li v-for="img in project.media.gallery"><img v-bind:src="img"></li>
            </ul>
        </div>
    `
});

// Component: Works
Vue.component('works-grid', {
    data: function () {
        return { works: worksData }
    },
    methods: {
        selectProject: function (id) {
            this.$parent.setProject(id);
        }
    },
    template: `
        <nav id="grid">
            <a v-for="w in works" v-on:click="selectProject(w.id)" target="_blank">
                <img v-bind:src="w.media.cover" v-bind:style="{ backgroundColor: w.color }">
                <h4>{{w.name}}</h4>
                <p>{{w.desc.substring(0,120)+".."}}</p>
            </a>
        </nav>
    `
});

// Core App
var app = new Vue({
    el: '#app',
    data: {
        works: worksData,
        project: null
    },
    methods: {
        setProject: function (id) {
            this.project = this.works.find(w => w.id === id);
            setTimeout(() => { this.alignToProjects('auto'); }, 1);
        },
        closeProject: function () {
            this.project = null;
            this.alignToProjects('auto');
        },
        alignToProjects: function (behavior) {
            const elem = document.getElementById('top');
            elem.scrollIntoView({behavior: behavior, block: "start", inline: "start"});
        }
    }
});
