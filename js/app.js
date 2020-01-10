// VUE APP

// Component
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
})

var app = new Vue({
    el: '#app',
    data: {
        works: worksData,
        project: null
    },
    methods: {
        setProject: function (id) {
            this.project = this.works.find(w => w.id === id);
            setTimeout(() => {
                this.alignToProjects('auto');
            }, 50);
        },
        closeProject: function () {
            this.project = null;
        },
        alignToProjects: function (behavior) {
            const elem = document.getElementById('top');
            elem.scrollIntoView({behavior: behavior, block: "start", inline: "start"});
        }
    }
});
