<template>
    <div class="business">
        <div class="live">
            <div class="big_title">
                <h1>抖音直播</h1>
            </div>
            <div class="content">
                <div class="platform">
                    <div>直播开放平台</div>
                    <div>助力创作者和机构成长 互利共建直播创作生态</div>
                    <div @click="readMore1">了解更多</div>
                </div>
                <div class="partner">
                    <div>直播伴侣</div>
                    <div>一键开播，清晰展现信息、礼物记录</div>
                    <div @click="readMore2">了解更多</div>
                </div>
                <div class="recharge">
                    <div>抖币充值</div>
                    <div>快速充值，不收取任何服务费用</div>
                    <div @click="readMore3">立即充值</div>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="big_title">
                <h1>系列产品</h1>
            </div>
            <div class="content">
                <div class="productList" v-for="(item, index) in productList" :key="index">
                    <img :src="item.img" alt />
                    <div class="title">{{ item.title }}</div>
                    <div class="bottom">
                        <div>{{ item.des1 }}</div>
                        <div>{{ item.des2 }}</div>
                        <div class="other" @click="viewDetails(item)">{{ item.other }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 抖音直播二维码 -->
        <el-dialog v-model="douyinLiveShow" >
            <img src="../assets/business/cpde.png" alt class="douyinLive" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productList: [
                {
                    img: require('../assets/business/img1.png'),
                    title: '抖音极速版',
                    des1: '内存更小，更省流量，使用流畅',
                    des2: '为你提供多样有趣的短视频内容但更轻量',
                    other: '点击下载',
                    link: ''
                },
                {
                    img: require('../assets/business/img2.png'),
                    title: '抖音火山版',
                    des1: '原创生活小视频社区',
                    des2: ' 15秒做出你专属的小视频',
                    other: '查看详情',
                    link: 'https://www.huoshanzhibo.com/'
                },
                {
                    img: require('../assets/business/img3.png'),
                    title: '剪映',
                    des1: '全能好用的视频编辑工具，',
                    des2: '帮你剪出美好生活，帮你搞定视频编辑',
                    other: '查看详情',
                    link: 'https://lv.ulikecam.com/'
                },
                {
                    img: require('../assets/business/img4.png'),
                    title: '多闪',
                    des1: '在多闪里，你可以分享生活片段',
                    des2: '视频短信滤镜特效，体验新的小视频社交',
                    other: '查看详情',
                    link: 'https://www.duoshan.com/'
                }
            ],
            douyinLiveShow: false
        }
    },
    methods: {
        readMore1() {
            window.open('https://union.bytedance.com/open/')
        },
        readMore2() {
            window.open('https://www.douyin.com/falcon/webcast_openpc/pages/streamingtool_download/index.html')
        },
        readMore3() {
            window.open('https://www.douyin.com/falcon/webcast_openpc/pages/douyin_recharge/index.html')
        },
        viewDetails(item) {
            console.log(item.link)
            if (item.link === '') {
                this.douyinLiveShow = true
            } else {
                window.open(item.link)
            }
        }
    }
}
</script>

<style>
.business {
    width: 1200px;
    margin: auto;
    margin-top: 150px;
}
.business > div {
    margin: 50px 0;
}
.live > .content {
    display: flex;
    margin: 40px 0 80px;
}

.platform {
    width: 588px;
    height: 282px;
    background: url(https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/1.6d2faefe.png)
        no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: var(--border-radius);
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #6270e9;
    position: relative;
    top: 0;
    -webkit-transition: top 0.2s ease-in-out;
    -moz-transition: top 0.2s ease-in-out;
    transition: top 0.2s ease-in-out;
    padding: 0;
}
.partner {
    width: 282px;
    height: 282px;
    border-radius: 20px;
    border-radius: var(--border-radius);
    background: url(https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/2.91e30465.png);
    background-size: cover;
    margin-right: 24px;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #0e0f14;
    position: relative;
    top: 0;
    -webkit-transition: top 0.2s ease-in-out;
    -moz-transition: top 0.2s ease-in-out;
    transition: top 0.2s ease-in-out;
    padding: 0;
}
.recharge {
    width: 282px;
    height: 282px;
    border-radius: 20px;
    border-radius: var(--border-radius);
    background: url(https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/3.4deb8a24.png);
    background-size: cover;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #e07f26;
    position: relative;
    top: 0;
    -webkit-transition: top 0.2s ease-in-out;
    -moz-transition: top 0.2s ease-in-out;
    transition: top 0.2s ease-in-out;
    padding: 0;
}
.live > .content > div {
    border-radius: 20px;
}
.live > .content > div:hover {
    top: -10px;
    transition: 0.1s;
}
.live > .content > div > div:first-child {
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 6px;
    padding-top: 20px;
}
.live > .content > div > div:nth-child(2) {
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    opacity: 0.4;
    margin-bottom: 33px;
}
.live > .content > div > div:last-child {
    font-weight: bold;
    cursor: pointer;
    width: 110px;
    height: 42px;
    background: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    line-height: 42px;
    text-align: center;
}
.live > .content > div > div:last-child:hover {
    background: #e7e7e7;
}
.product > .content {
    display: flex;
    margin: 50px 0 90px;
}
.productList {
    width: 282px;
    height: 282px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #efeff2;
    border-radius: 20px;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
    position: relative;
    top: 0;
    -webkit-transition: top 0.2s ease-in-out;
    -moz-transition: top 0.2s ease-in-out;
    transition: top 0.2s ease-in-out;
    padding: 0;
}
.productList:hover {
    top: -10px;
    transition: 0.1s;
}
.productList > img {
    border-radius: 20px;
    margin-bottom: 16px;
}
.productList > .title {
    font-size: 24px;
    line-height: 32px;
    color: #000;
    opacity: 0.9;
    font-weight: bold;
    margin-bottom: 8px;
}
.productList > .bottom {
    font-size: 13px;
    line-height: 21px;
    text-align: center;
    color: var(--color-text-2);
    text-align: center;
    margin-bottom: 8px;
}
.productList > .bottom > .other {
    padding-top: 16px;
    font-size: 15px;
    line-height: 20px;
    color: var(--color-text-2);
    opacity: 0.9;
}
.productList > .bottom > .other:hover {
    color: #ff1a62;
}
.douyinLive {
    width: 350px;
    display: block;
    margin: auto;
}
</style>
