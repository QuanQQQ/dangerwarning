<template>
    <div>
        <div :class="{Home, fadeIn: fadein, fadeOut: fadeout}" :style='{backgroundImage: homepage}' @mousemove="handlemousemove">
        </div>
        <div id='main' :class="{Layout, zoomIn: zoomin, zoomOut: zoomout}" @mousemove="handlemousemove">
            <div class="wrapper">
                <ElRow :gutter="24">
                    <ElCol :span="6">
                        <ElCard class='box-card' :style="{'visibility':cardvisibility}">
                            <div slot="header">
                                <span>a title</span>
                            </div>
                            <div :style="{backgroundImage: thumbnail}"></div>
                        </ElCard>
                    </ElCol>
                    <ElCol :span="6">
                        <ElCard class='box-card' :style="{'visibility':cardvisibility}">
                            <div slot="header">
                                <span>a title</span>
                            </div>
                            <ElInput v-model="test" placeholder="试试"></ElInput>
                        </ElCard>
                    </ElCol>
                    <ElCol :span="6">
                        <ElCard class='box-card' :style="{'visibility':cardvisibility}">
                            <div slot="header">
                                <span>a title</span>
                            </div>
                            <ElInput v-model="test" placeholder="试试"></ElInput>
                        </ElCard>
                    </ElCol>
                    <ElCol :span="6">
                        <ElCard class='box-card' :style="{'visibility':cardvisibility}">
                            <div slot="header">
                                <span>a title</span>
                            </div>
                            <ElInput v-model="test" placeholder="试试"></ElInput>
                        </ElCard>
                    </ElCol>
                </ElRow>    
            </div>
            
            
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss';
</style>

<script>


export default {
    name: 'Home',
    data() {
        return {
            homepage: 'url(' + require('../../assets/background.jpeg') + ')',
            thumbnail: 'url(' + require('../../assets/logo.png') +')',
            Home: require('./index.scss'),
            Layout: require('./index.scss'),
            fadeIn: require('./index.scss'),
            fadeOut: require('./index.scss'),
            zoomIn: require('./index.scss'),
            zoomOut: require('./index.scss'),
            fadein: false,
            fadeout: false,
            zoomin:false,
            zoomout:false,
            cardvisibility:'hidden',
            cardvisTimer: null,
            fadeoutTimer: null,
            fadeinTimer: null,
            test:'',
        };
    },
    
    methods: {
        handlemousemove(e){
            console.log(e)
            this.fadeout = false
            this.fadein = true
            this.zoomout = false
            this.zoomin = true
            if(!this.cardvisTimer){
                this.cardvisTimer = window.setTimeout(()=>{
                    this.cardvisibility = 'visible'
                },500)
            }
                
            window.clearTimeout(this.fadeoutTimer)
            this.fadeoutTimer = null
            this.fadeoutTimer = window.setTimeout(()=>{
                this.fadein = false
                this.fadeout = true
                this.zoomin = false
                this.zoomout = true
                this.cardvisibility = 'hidden'
                this.cardvisTimer = null
            }, 5000)
        }
    },
    mounted() {
    },
};
</script>
