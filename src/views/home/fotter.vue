<template>
    <div class="fotter">
        <div class="top">
            <div><a href="">广告投放</a></div>
            <div><a href="">用户服务协议</a></div>
            <div><a href="">隐私政策</a></div>
            <div><a href="">帐号找回</a></div>
            <div><a href="">联系我们</a></div>
            <div><a href="">加入我们</a></div>
            <div><a href="">营业执照</a></div>
        </div>
        <div class="middle">
            <a href="https://www.piyao.org.cn/yybgt/index.htm">网络谣言曝光台</a>
            <a  href="https://www.12377.cn">网上有害信息举报 &nbsp;</a>
            ｜ 违法和不良信息举报：400-140-2108 ｜ 青少年守护专线：400-9922-556 ｜ 网络内容从业人员违法违规行为举报：feedback@douyin.com
        </div>
        <div class="foot">
            2022
             © 抖音 ｜&nbsp;
             <a href="https://beian.miit.gov.cn">京ICP备16016397号-3</a>
             &nbsp; ｜ 北京微播视界科技有限公司 ｜
             <a  href="https://lf3-static.bytednsdoc.com/obj/eden-cn/5201eh7bvoguloz/douyin_web/zhizuojingying.pdf" target="_blank">广播电视节目制作经营许可证</a>
            ｜
            <a href="https://lf3-static.bytednsdoc.com/obj/eden-cn/5201eh7bvoguloz/douyin_web/wangluowenhuajingying.jpg" target="_blank" rel="noopener noreferrer">网络文化许可证-京网文-（2016）2282-264号</a>
            ｜ &nbsp;
            <img class="zf--22ePP" src="data:image/png;base64,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">
            <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002046">京公网安备 11000002002046号</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fotter {
    height: 200px;
    widows: 100%;
    min-width: 1200px;
    position: relative;
    font-size: 14px;
    background-color: #000;
}
.top{
    margin:  auto;
    width: 800px;
}
.top>div{
    display: inline-block;
    margin:50px 20px 30px;
}
.top>div>a{
    color: #999999;
    text-decoration: none;
}
.top>div>a:hover{
color: #ccc;
}
.middle{
    font-size: 12px;
    color: #666666;
    margin: auto;
    width: 1000px;
}
.middle>a{
    font-size: 12px;
    color: #666666;
}
.foot{
    font-size: 12px;
    color: #666666;
    margin: 20px auto;
    width: 1100px;
}
.foot>a{
    font-size: 12px;
    color: #666666;
}
.foot>img{
    width: 10px;
}
</style>
