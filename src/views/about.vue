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
        <div class="culture" id="culture">
            <div class="big_title">
                <h1>企业文化</h1>
            </div>
            <div class="content">
                <div v-for="(item, index) in cultureList" :key="index" @click="toPlay(item, index)">
                    <img src="../assets/about/paly.png" class="play" />
                    <p>{{ item.title }}</p>
                    <img :src="item.imgSrc" class="bg" />
                </div>
            </div>
        </div>
        <!-- 社会责任 -->
        <div class="duty" id="duty">
            <div class="big_title">
                <h1>社会责任</h1>
                <ul>
                    <li
                        v-for="(item, index) in dutyList"
                        :key="index"
                        :class="{ active: index == current }"
                        @click="checkContent(item, index)"
                    >{{ item.title }}</li>
                </ul>
            </div>
            <div class="content" v-for="(item, index) in contentList" :key="index">
                <div class="left">
                    <p>{{ item.title }}</p>
                    <div class="desc">{{ item.desc }}</div>
                </div>
                <img :src="item.imgSrc" alt class="right" />
            </div>
        </div>
        <!-- join -->
        <div class="join" id="join">
            <div class="text">
                <p>和优秀的人，做有挑战的事</p>
                <p class="small">－JOIN DOUYIN－</p>
                <el-link
                    href="https://jobs.bytedance.com/"
                    target="_blank"
                    class="btn"
                    underline="false"
                >
                    <img src="../assets/about/douyin.png" alt class="douyin" />
                    <span class="joinUs">加入抖音</span>
                </el-link>
            </div>
            <video
                src="https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/joinus.4a001876.mp4"
                autoplay
                muted
                loop
            ></video>
        </div>
        <!-- 联系我们 -->
        <div class="contact" id="contact">
            <div class="big_title">
                <h1>联系我们</h1>
            </div>
            <div class="content">
                <div>
                    <span>官方邮箱</span>
                    <span>feedback@douyin.com</span>
                </div>
                <div>
                    <span>客服热线</span>
                    <span>95152</span>
                </div>
                <div>
                    <span>侵权举报</span>
                    <span>jubao@douyin.com / 400-140-2108</span>
                </div>
                <div>
                    <span>其他反馈</span>
                    <span>feedback@douyin.com / 400-140-2108</span>
                </div>
                <div>
                    <span>青少年守护专线</span>
                    <span>400-9922-556</span>
                </div>
                <div>
                    <span>广告投放</span>
                    <span>business@service.feishu.cn / 400-601-0918</span>
                </div>
                <div>
                    <span>市场合作</span>
                    <span>bd@douyin.com</span>
                </div>
                <div>
                    <span>音乐合作</span>
                    <span>musician@douyin.com</span>
                </div>
                <div>
                    <span>总部办公地址</span>
                    <span>北京市海淀区北三环西路27号方恒时尚中心</span>
                </div>
            </div>
        </div>

        <!-- 企业文化视频蒙版 -->
        <div id="mask" v-show="videoShow">
            <div class="culture_video" style="width: 960px;height: 540px;">
                <video :src="videoSrc" controls="controls" autoplay muted></video>
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
            isPay: false,
            dutyList: [
                {
                    title: '抗击疫情',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        },
                        {
                            title: '抖音所有用户共同记录：抗疫中有微光，美好终将到来',
                            desc: '抖音与人民日报新媒体合作，携手张一白导演及抖音音乐人，汇集抖音众多用户的真实故事，联合创作主题为《美好终将到来》的短片。用一个个真实动人的瞬间，还原着每一个普通却又不凡的“我们”面对疫情时的乐观和勇敢。视频上线2天内视频站外总播放量600w+，站内播放量800w+。',
                            imgSrc: 'https://sf3-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/696e72dc13fd3d17891e2b113f2159e4'
                        },
                        {
                            title: '春节抖音请全国人民免费看《囧妈》',
                            desc: '新型冠状肺炎的爆发，使得2020年春节档7部影片全部撤档。1月24日除夕，抖音平台宣布在大年初一零点以线上首映的形式播出《囧妈》，在特殊的时期丰富民众的假期生活，倡议并引导用户在家中观影，度过一个平安、健康的春节，发挥企业社会责任。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/9a43b799af7d128379138ec5ff4d99ca'
                        }
                    ]
                },
                {
                    title: '人群关怀',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        }
                    ]
                },
                {
                    title: '文旅公益',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        }
                    ]
                },
                {
                    title: '爱心公益',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        }
                    ]
                },
                {
                    title: '文化保护',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        }
                    ]
                },
                {
                    title: '环境保护',
                    contentList: [
                        {
                            title: '100亿流量、100场直播，抖音助力湖北复工复产',
                            desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                            imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'

                        }
                    ]
                }

            ],
            current: 0,
            contentList: [
                {
                    title: '100亿流量、100场直播，抖音助力湖北复工复产',
                    desc: '2020年4月8日，在商务部电子商务司的支持下，抖音联合湖北省互联网信息办公室、湖北省商务厅、湖北省农业农村厅发起“抖音援鄂复苏计划”。投入百亿流量、发起百场直播，多项举措支持湖北高效复工复产。截至2020年5月20日，累计帮助销售湖北产品金额超2.34亿元。',
                    imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/ddfeee97019c8080a0d3183c8791df7f'
                },
                {
                    title: '抖音所有用户共同记录：抗疫中有微光，美好终将到来',
                    desc: '抖音与人民日报新媒体合作，携手张一白导演及抖音音乐人，汇集抖音众多用户的真实故事，联合创作主题为《美好终将到来》的短片。用一个个真实动人的瞬间，还原着每一个普通却又不凡的“我们”面对疫情时的乐观和勇敢。视频上线2天内视频站外总播放量600w+，站内播放量800w+。',
                    imgSrc: 'https://sf3-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/696e72dc13fd3d17891e2b113f2159e4'
                },
                {
                    title: '春节抖音请全国人民免费看《囧妈》',
                    desc: '新型冠状肺炎的爆发，使得2020年春节档7部影片全部撤档。1月24日除夕，抖音平台宣布在大年初一零点以线上首映的形式播出《囧妈》，在特殊的时期丰富民众的假期生活，倡议并引导用户在家中观影，度过一个平安、健康的春节，发挥企业社会责任。',
                    imgSrc: 'https://sf1-draftcdn-tos.pstatp.com/obj/ies-hotsoon-draft/9a43b799af7d128379138ec5ff4d99ca'
                }
            ]
        }
    },
    created() {
        this.$nextTick(() => { this.toLocal() })
    },
    mounted() {
        const _this = this
        _this.$nextTick(function () {
            window.addEventListener('scroll', _this.handleScroll)
        })
    },
    methods: {
        toPlay(item) {
            this.videoShow = true
            this.videoSrc = item.videoSrc
        },
        closeVieo() {
            this.videoShow = false
        },
        // 点击li标签切换下面内容
        checkContent(item, index) {
            this.current = index
            this.contentList = item.contentList
        },
        toLocal() {
            // 查找存储的锚点id
            const Id = localStorage.getItem('toId')
            const toElement = document.getElementById(Id)
            // 锚点存在跳转
            if (Id) {
                toElement.scrollIntoView(true)
                window.scrollBy(0, -120)
            }
        }

    },
    // 用完后记得将存储的锚点置空，否则会影响其他页面跳转到当前页面
    onUnmounted() {
        localStorage.setItem('toId', '')
    }
}
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
}

.head {
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}
.big_title {
    height: 80px;
    margin: 30px 0;
}
.big_title > h1 {
    display: inline-block;
    line-height: 80px;
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
    margin: 30px auto;
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
.duty {
    width: 1200px;
    margin: 30px auto;
}
.duty > .big_title > ul {
    float: right;
    display: inline-block;
    line-height: 80px;
}
.duty > .big_title > ul > li {
    border: 1px solid #f3f3f5;
    border-radius: 72px;
    margin-left: 20px;
    color: #777e87;
    width: 105px;
    height: 35px;
    line-height: 35px;
    text-align: center;
}
/* 点击Li标签使背景变换 */
.active {
    background-color: #f4f4f6;
}
.duty > .content {
    height: 270px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}
.duty > .content > .left {
    width: 670px;
}
.duty > .content > .left > p {
    margin-top: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 1px;
    color: #000;
}
.duty > .content > .left > .desc {
    margin-top: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    text-align: justify;
    letter-spacing: 2px;
    color: #777e87;
}
.duty > .content > .right {
    width: 480px;
    border-radius: 20px;
}
.join {
    width: 100%;
    min-width: 1200px;
    margin-top: 90px;
    overflow: hidden;
    position: relative;
}
.join > video {
    width: 100%;
}
.join > .text {
    position: absolute;
    font-style: normal;
    font-weight: bold;
    color: #fff;
    width: 456px;
    z-index: 100;
    left: 50%;
    margin-left: -228px;
    margin-top: 28vh;
}
.join > .text > p:first-child {
    font-size: 36px;
    line-height: 47px;
    text-align: center;
}
.join > .text > .small {
    margin-top: -8px;
    margin-left: 15px;
    width: 370px;
    text-align: center;
    letter-spacing: 10px;
}
.join > .text > .btn {
    margin: auto;
    margin-top: 29px;
    border: 2px solid #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    width: 144px;
    font-size: 14px;
    height: 42px;
    line-height: 42px;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 1;
    z-index: 200;
    cursor: pointer;
}
.douyin {
    width: 15px;
}
.joinUs {
    margin-left: 7px;
    color: #fff;
    font-weight: bold;
}
.contact {
    width: 1200px;
    margin: 50px 0;
}
.contact > .content > div > span:first-child {
    font-size: 20px;
    line-height: 68px;
    letter-spacing: 1px;
    color: #777e87;
}
.contact > .content > div > span:last-child {
    font-size: 20px;
    line-height: 36px;
    text-align: justify;
    font-weight: bold;
    color: #383e46;
    margin-left: 37px;
}
</style>
