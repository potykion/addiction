<template>
    <div>
        <v-rect :config="configCircle"></v-rect>
        <v-text :config="configText"></v-text>
    </div>
</template>

<script>
    export default {
        name: "Module",
        props: ["x", "y", "text"],
        data() {
            return {
                configCircle: {
                    // x, y - center of circle
                    x: this.x - 150 / 2,
                    y: this.y - 50 / 2,
                    width: 150,
                    height: 50,
                    stroke: "black",
                    strokeWidth: 2,
                    cornerRadius: 2
                },
                configText: {
                    // 70 = width
                    x: this.x - 150 / 2,
                    // 20 = fontSize
                    y: this.y - 10 / 2,
                    width: 150,
                    fontSize: 10,
                    text: this.text,
                    align: "center"
                }

            }
        }
    }
</script>

<style scoped>

</style>