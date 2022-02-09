<template>
    <div class="head">
        <img src="../../assets/logo.png" alt class="logo" />
        <ul>
            <li>
                <span>首页</span>
            </li>
            <router-link :to="{ name: 'about' }">
                <li @mouseenter="aboutListShow = true" @mouseleave="aboutListShow = false">
                    <span>
                        关于我们
                        <img
                            src="../../assets/xiangshang.png"
                            alt
                            class="icon"
                            v-if="aboutListShow"
                        />
                        <img src="../../assets/xiangxia.png" alt class="icon" v-else />
                    </span>
                    <div class="about_list list" v-show="aboutListShow">
                        <div>
                            <span>企业文化</span>
                        </div>
                        <div>
                            <span>社会责任</span>
                        </div>
                        <div>
                            <span>加入我们</span>
                        </div>
                        <div>
                            <span>联系我们</span>
                        </div>
                        <div>
                            <span>透明度报告</span>
                        </div>
                    </div>
                </li>
            </router-link>

            <li>
                <span>新闻动态</span>
            </li>
            <li>
                <a href="https://creator.douyin.com/">
                    <span>创作服务平台</span>
                </a>
            </li>
            <li>
                <a href="https://open.douyin.com/platform">
                    <span>开放平台</span>
                </a>
            </li>
            <li @mouseenter="productListShow = true" @mouseleave="productListShow = false">
                <span>
                    相关业务
                    <img
                        src="../../assets/xiangshang.png"
                        alt
                        class="icon"
                        v-if="aboutListShow"
                    />
                    <img src="../../assets/xiangxia.png" alt class="icon" v-else />
                </span>

                <div class="product_list list" v-show="productListShow">
                    <div>
                        <span>抖音直播</span>
                    </div>
                    <div>
                        <span>系列产品</span>
                    </div>
                </div>
            </li>
            <li @mouseenter="businessListShow = true" @mouseleave="businessListShow = false">
                <span>
                    认证与合作
                    <img src="../../assets/xiangshang.png" class="icon" v-if="aboutListShow" />
                    <img src="../../assets/xiangxia.png" class="icon" v-else />
                </span>
                <div class="business_list list" v-show="businessListShow">
                    <div>
                        <a href="https://creator.douyin.com/">
                            <span>身份认证</span>
                        </a>
                    </div>
                    <div>
                        <span>机构入驻</span>
                    </div>
                    <div>
                        <span>企业合作</span>
                    </div>
                    <div>
                        <a href="https://fxg.jinritemai.com/?source=mkt.dygw">
                            <span>电商入驻</span>
                        </a>
                    </div>
                </div>
            </li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aboutListShow: false,
            productListShow: false,
            businessListShow: false
        }
    }
}
</script>

<style>
.head {
    padding: 0;
    height: 120px;
    border: 1px solid #f0f0f0;
}
.logo {
    height: 60px;
    margin: 30px 100px;
    float: left;
}
.nav {
    height: 120px;
    margin-left: 200px;
    left: 500px;
    font-size: 20px;
}
ul {
    height: 100px;
    float: right;
}
li {
    padding: 0;
    line-height: 120px;
    padding-left: 48px;
    display: inline-block;
    list-style: none;
    color: #000;
    position: relative;
}
span:hover {
    font-weight: bold;
    cursor: pointer;
}
.list {
    display: block;
    position: absolute;
    top: 100px;
    line-height: 40px;
    color: #60656b;
    background: #fff;
    z-index: 9;
}
.list > div > a {
    color: #60656b;
}
.icon {
    width: 15px;
}
</style>
