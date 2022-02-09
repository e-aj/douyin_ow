<template>
    <div class="about">
        <div class="head">
            <div class="text">
                <p class="small">我们的使命</p>
                <hr />
                <div class="big">Inspire creativity, enrich life.</div>
                <div class="big">激发创造，丰富生活</div>
            </div>
            <img src="../assets/about/header.2d2ae366.png" alt />
        </div>
        <!-- 企业文化 -->
        <div class="culture">
            <div class="title">
                <h1>企业文化</h1>
            </div>
            <div class="content">
                <div v-for="(item, index) in cultureList" :key="index" @click="toPlay(item)">
                    <img src="../assets/about/paly.png" class="play"  />
                    <p>{{ item.title }}</p>
                    <img :src="item.imgSrc" class="bg"  />
                </div>
            </div>
        </div>
        <!-- 社会责任 -->
        <div class="duty">
            <div class="title">
                <h1>社会责任</h1>
            </div>

        </div>

        <div id="mask" v-show="videoShow">
            <div class="culture_video" style="width: 960px;height: 540px;">
                <video
                    :src="videoSrc"
                    controls="controls"
                    preload
                ></video>
            </div>
            <img src="../assets/about/close.png" class="close" @click="closeVieo" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cultureList: [
                {
                    title: '校招新人的飞速成长',
                    imgSrc: require('../assets/about/cultureimage1.9b1e4485.png'),
                    videoSrc: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/cul-1.21af0aee.mp4'
                },
                {
                    title: '兴趣使然的技术人',
                    imgSrc: require('../assets/about/cultureimage2.247074d3.png'),
                    videoSrc: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/cul-2.1281312f.mp4'
                },
                {
                    title: '在抖音做设计有什么不同',
                    imgSrc: require('../assets/about/cultureimage3.f68fc1bf.png'),
                    videoSrc: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/cul-3.be345881.mp4'
                },
                {
                    title: '活动背后的故事',
                    imgSrc: require('../assets/about/cultureimage4.da1975c1.png'),
                    videoSrc: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/cul-4.2b0a5a93.mp4'
                }

            ],
            videoShow: false,
            videoSrc: '',
            isPay: false
        }
    },
    methods: {
        toPlay(item) {
            this.videoShow = true
            this.videoSrc = item.videoSrc
        },
        closeVieo() {
            this.videoShow = false
        }

    }
}
</script>

<style scoped>

.about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.head {
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}
.head > .text {
    position: absolute;
    margin-left: -300px;
    color: #fff;
}
.head > .text > .small {
    color: #e5e8ee;
}
.head > .text > .big {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
}
.head > img {
    border-radius: 20px;
    float: left;
}
.culture {
    width: 1200px;
    margin:30px auto;
}
.culture > .content > div {
    display: inline-block;
    width: 300px;
    cursor: pointer;
}
.culture > .content > div > .play {
    position: absolute;
    margin-left: 110px;
    margin-top: 120px;
}
.culture > .content > div > p {
    position: absolute;
    margin-top: 250px;
    margin-left: 80px;
    color: #fff;
    font-weight: bold;
}
.culture > .content > div > .bg {
    border-radius: 20px;
}
.culture_video {
    width: 960px;
    height: 540px;
    margin: 100px auto 5px;
}
#mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}
.culture_video > video {
    width: 960px;
    height: 540px;
}
.close {
    display: block;
    margin: auto;
    width: 36px;
    cursor: pointer;
}
.duty{
    width: 1200px;
    margin: 30px auto;
}
</style>
