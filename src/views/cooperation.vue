<template>
    <div class="cooperation">
        <div>
            <div class="big_title">
                <h1>身份认证</h1>
            </div>
            <div class="content">
                <div
                    class="identityList"
                    v-for="(item, index) in identityList"
                    :key="index"
                    :style="{ 'background': 'url(' + item.bacg + ')' }"
                >
                    <div class="title">{{ item.title }}</div>
                    <div class="desc">{{ item.desc }}</div>
                    <div class="check">{{ item.check }}</div>
                    <div class="auth">{{ item.auth }}</div>
                </div>
            </div>
        </div>
        <div class="organization">
            <div class="big_title">
                <h1>机构入驻</h1>
            </div>
            <div class="content">
                <div class="organizationList">
                    <div class="top">
                        <div>MCN机构 · 入驻条件</div>
                        <div>申请入驻</div>
                    </div>
                    <div class="line"></div>
                    <ul>
                        <li>
                            <span class="dot"></span>登录帐号状态正常，并且登录帐号已绑定手机号
                        </li>
                        <li>
                            <span class="dot"></span>达人数量至少5个，并已与MCN签订盖章合同
                        </li>
                        <li>
                            <span class="dot"></span>MCN过往无违规行为，旗下达人总粉丝量不小于1万
                        </li>
                        <li>
                            <span class="dot"></span>同一营业执照下，只允许一个MCN主体入驻
                        </li>
                        <div class="more1">查看详情 ></div>
                    </ul>
                </div>
                <div class="organizationList">
                    <div class="top">
                        <div>社会机构 · 入驻条件</div>
                        <div>申请入驻</div>
                    </div>
                    <div class="line"></div>
                    <ul>
                        <li>
                            <span class="dot"></span>媒体机构-适合报纸\电视\电台\通讯社或其它以生产内容为主的组织机构
                        </li>
                        <li>
                            <span class="dot"></span>国家机构-中央直属机构\党群机关\参照公务员法管理的事业单位
                        </li>
                        <li>
                            <span class="dot"></span>其它组织-适合学校以及易被混淆的自媒体\工作室\社会组织等知名机构团体
                        </li>
                        <div class="more2">查看详情 ></div>
                    </ul>
                </div>
            </div>
        </div>
        <div class="company">
            <div class="big_title">
                <h1>企业合作</h1>
            </div>
            <div class="content">
                <div class="companyList">
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                    <div class="more">
                        <div>查看详情</div>
                        <div>企业服务平台</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            identityList: [
                {
                    title: '抖音音乐人',
                    desc: '亿元补贴计划面向所有抖音音乐人开放啦',
                    check: '查看详情 ',
                    auth: '立即认证',
                    checkUrl: 'https://music.douyin.com/',
                    authUrl: 'https://sso.douyin.com/?service=https%3A%2F%2Fwww.douyin.com%2Flogin%3Fredirect_url%3Dhttps%3A%2F%2Fmusic.douyin.com%2Fconsole%2Fprofile%3Fclick%3Dmvt&theme=light',
                    bacg: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/music.0ec63165.png'
                },
                {
                    title: '抖音特效师',
                    desc: '做6亿人喜爱的道具，赢千万奖励+官方流量扶持',
                    check: '查看详情 ',
                    auth: '创作特效',
                    checkUrl: 'https://music.douyin.com/',
                    authUrl: 'https://sso.douyin.com/?service=https%3A%2F%2Fwww.douyin.com%2Flogin%3Fredirect_url%3Dhttps%3A%2F%2Fmusic.douyin.com%2Fconsole%2Fprofile%3Fclick%3Dmvt&theme=light',
                    bacg: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/special-effects.436992c4.png'
                },
                {
                    title: '企业认证',
                    desc: '开通企业号，是在抖音做生意的第一步',
                    check: '查看详情 ',
                    auth: '立即认证',
                    checkUrl: 'https://music.douyin.com/',
                    authUrl: 'https://sso.douyin.com/?service=https%3A%2F%2Fwww.douyin.com%2Flogin%3Fredirect_url%3Dhttps%3A%2F%2Fmusic.douyin.com%2Fconsole%2Fprofile%3Fclick%3Dmvt&theme=light',
                    bacg: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/enterprise.6c50d30e.png'
                }
            ],
            organizationList: [

            ]

        }
    }

}
</script>

<style>
.cooperation {
    width: 1200px;
    margin: auto;
    margin-top: 120px;
}
.content {
    display: flex;

    margin: 30px 0;
}
.identityList {
    width: 384px;
    height: 360px;
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    transition: top 0.2s ease-in-out;
    padding: 0;
    margin: 50px 0;
    margin: 0 8px;
}
.identityList:hover {
    top: -10px;
    transition: 0.1s;
}
.identityList > .title {
    font-weight: bold;
    margin-bottom: 6px;
    padding-top: 20px;
    font-size: 36px;
    line-height: 47px;
    color: #fff;
    text-shadow: 0 0 12px rgba(240, 0, 101, 0.1);
}
.identityList > .desc {
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 12px;
    font-weight: normal;
}
.identityList > .check {
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 25px;
    -webkit-transition: -webkit-transform 0.2s linear;
    transition: -webkit-transform 0.2s linear;
    -moz-transition: transform 0.2s linear, -moz-transform 0.2s linear;
    transition: transform 0.2s linear;
    transition: transform 0.2s linear, -webkit-transform 0.2s linear,
        -moz-transform 0.2s linear;
    cursor: pointer;
}
.identityList > .auth {
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
    font-weight: bold;
}
.organization > .content {
    display: flex;
    margin-bottom: 80px;
}
.organizationList {
    width: 588px;
    height: 348px;
    border: 1px solid #efeff2;
    border-radius: 20px;
    border-radius: var(--border-radius);
    padding: 0 32px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: 24px;
}
.organizationList > .top {
    height: 116px;
    position: relative;
    margin-right: 3px;
}
.organizationList > .top > div:first-child {
    font-weight: bold;
    font-size: 26px;
    line-height: 116px;
    color: #000;
    opacity: 0.9;
}
.organizationList > .top > div:last-child {
    cursor: pointer;
    background: #ff0050;
    border-radius: 8px;
    width: 110px;
    height: 42px;
    position: absolute;
    right: 0;
    top: 37px;
    color: #fff;
    text-align: center;
    line-height: 42px;
}
.organizationList > .line {
    margin-bottom: 32px;
    width: 524px;
    height: 1px;
    background: #efeff2;
}
.organizationList > ul {
    list-style: none;
    font-size: 15px;
    line-height: 42px;
    color: #777e87;
    position: relative;
}
.organizationList > ul > li > .dot {
    width: 5px;
    height: 5px;
    background: #cbced4;
    display: inline-block;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    top: -2px;
}
.organizationList > ul > .more1 {
    font-size: 15px;
    line-height: 20px;
    color: #afb6be;
    opacity: 0.9;
    position: absolute;
    right: 0;
    bottom: 10px;
    cursor: pointer;
}
.organizationList > ul > .more2 {
    font-size: 15px;
    line-height: 20px;
    color: #afb6be;
    opacity: 0.9;
    position: absolute;
    right: 0;
    bottom: -32px;
    padding-right: 3px;
    cursor: pointer;
}
.company > .content {
}
.companyList {
    border-radius: 20px;
    width: 1188px;
    height: 320px;
    background: url(https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/imgs/1.4bec87ca.png)
        no-repeat;
    margin-bottom: 24px;
    text-align: center;
}
.companyList > .first {
    height: 68px;
    width: 100%;
    visibility: hidden;
}
.companyList > .second {
    width: 318px;
    height: 78px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAABOCAMAAACOs4p3AAAAQlBMV…z6nz6ESosH5oHp+3meyhaxa/wzfd+KxI2DY/21rAbsnP0G8vh5Y2SpptQAAAAASUVORK5CYII=) no-repeat;
    margin: 0 auto;
}
.companyList > .third{
    font-size: 16px;
    line-height: 21px;
    color: #fff;
    opacity: .7;
    margin-top: 8px;
    margin-bottom: 27px;
}
.companyList >.more>div:first-child{
    width: 110px;
    height: 42px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    color: #000;
    line-height: 42px;
    display: inline-block;
    margin-right: 16px;
    font-weight: bold;
    cursor: pointer;
}
.companyList >.more>div:last-child{
        width: 110px;
    height: 42px;
    border: 2px solid rgba(255,255,255,0.6);
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    line-height: 42px;
    display: inline-block;
    margin-right: 16px;
    cursor: pointer;
}
</style>
