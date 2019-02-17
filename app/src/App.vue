<template>
    <div id="app">
        <v-stage :config="configKonva">
            <v-layer>
                <Module v-for="(module, index) in dependencies"
                        :x="100 + 200 * (index % 8)"
                        :y="100 + 100 * Math.floor(index / 8)"
                        :text="module.name">
                </Module>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>

    import Module from "./components/Module";
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                configKonva: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
            };
        },
        name: 'app',
        components: {Module},
        computed: mapState(["dependencies"])
    }
</script>

<style>
</style>
