<template>
    <div class='news'>
        <el-carousel indicator-position='none' class='nav' height='500'>
            <el-carousel-item v-for='item in navList' :key='item'>
                <img :src='item.imgSrc' alt class='navImg' />
            </el-carousel-item>
        </el-carousel>
        <div class='company_news'>
            <div class='big_title'>
                <h1>企业新闻</h1>
            </div>
            <div class='content'>
                <div class='contentList' v-for='(item, index) in contentList' :key='index'>
                    <img :src='item.imgSrc' alt />
                    <p class='title'>{{ item.title }}</p>
                    <p class='desc'>{{ item.desc }}</p>
                    <p class='time'>{{ item.time }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    imgSrc: require('../assets/news/1.png'),
                    content: ''
                },
                {
                    imgSrc: require('../assets/news/2.png'),
                    content: ''
                },
                {
                    imgSrc: require('../assets/news/3.png'),
                    content: ''
                },
                {
                    imgSrc: require('../assets/news/4.png'),
                    content: ''
                }
            ],
            contentList: [
                {
                    imgSrc: 'https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/d27245bc590d674e06a6ea118d82dbae',
                    title: '生活总该迎着光亮：2021抖音美好奇妙夜背后的十个故事',
                    desc: '10月16日，在线上线下千人齐声合唱中，「2021抖音美好奇妙夜」结束了。南京进入秋雨时节...',
                    time: '2021.12.28'
                },
                {
                    imgSrc: 'https://lf9-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/7efa9b780513eb6980055fbd0e8ae1b0',
                    title: '《夺冠2021》：在抖音，和6亿人一起为冠军天团点赞。',
                    desc: '10月16日，在线上线下东京奥运闭幕式落下帷幕，中国体育代表团以38金32银18铜的成绩追平在伦敦奥运会取得的境外...千人齐声合唱中，「2021抖音美好奇妙夜」结束了。南京进入秋雨时节...',
                    time: '2021.12.29'
                },
                {
                    imgSrc: 'https://lf26-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/87c7e86e1ea627c6b84ad88439133d53',
                    title: '抖音支颖：创作让生活更美好',
                    desc: '10月15日，抖音在南京举办第三届创作者大会。抖音副总裁支颖发表致辞，未来将加大知识、文化...',
                    time: '2021.11.18'
                },
                {
                    imgSrc: 'https://lf26-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/c0adf48bd0e758d321f39b13d8365e2b',
                    title: '抖音2022跨年主题曲《好好生活就是美好生活》温暖上线',
                    desc: '跨年将至，抖音推出了2022跨年主题曲《好好生活就是美好生活》，这首歌由周深倾情献唱，唱响...',
                    time: '2021.12.29'
                }

            ]

        }
    }

}
</script>

<style scoped>
.news {
    width: 1200px;
    margin: auto;
}
.nav {
    margin: 50px 0;
}
.el-carousel__container {
    height: 375px;
}
.navImg {
    width: 1200px;
    border-radius: 5px;
}
.company_news > .big_title {
    height: 80px;
    margin: 30px 0;
}
.company_news > .content {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.company_news > .content > .contentList {
    width: 384px;
    position: relative;
    margin: 48px 6px 0;
    position: relative;
    top: 0;
    -webkit-transition: top 0.2s ease-in-out;
    -moz-transition: top 0.2s ease-in-out;
    transition: top 0.2s ease-in-out;
    padding: 0;
}
.company_news > .content > .contentList > img {
    border-radius: 20px;
    width: 384px;
    height: 200px;
}
.company_news > .content > .contentList > .title {
    margin-top: 20px;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.company_news > .content > .contentList > .desc {
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    letter-spacing: 0.02em;
    color: #777e87;
    overflow: hidden;
    font-weight: normal !important;
}
.company_news > .content > .contentList > .time {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.06em;
    color: #afb6be;
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: normal !important;
}
</style>
