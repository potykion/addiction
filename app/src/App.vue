<template>
    <div id="app">
        <v-stage :config="configKonva">
            <v-layer>
                <v-circle :config="configCircle"></v-circle>
                <v-text :config="configText"></v-text>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                configKonva: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                configCircle: {
                    // x, y - center of circle
                    x: 100,
                    y: 100,
                    radius: 70,
                    stroke: "black",
                    strokeWidth: 2
                },
                configText: {
                    // 70 = width
                    x: 100 - 70 / 2,
                    // 20 = fontSize
                    y: 100 - 20 / 2,
                    width: 70,
                    fontSize: 20,
                    text: "saas",
                    align: "center"
                }
            };
        },
        name: 'app',
        components: {}
    }
</script>

<style>
</style>
