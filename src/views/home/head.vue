<template>
    <div class="head">
        <img src="../../assets/logo.png" alt class="logo" />
        <ul>
            <li>
                <el-link href target="_blank" class="btn" :underline="false">
                    <span>首页</span>
                </el-link>
            </li>
            <router-link :to="{ name: 'about' }">
                <li @mouseenter="aboutListShow = true" @mouseleave="aboutListShow = false">
                    <el-link target="_blank" class="btn" :underline="false">
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
                    </el-link>
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
                <el-link href target="_blank" class="btn" :underline="false">
                    <router-link to="news">
                        <span>新闻动态</span>
                    </router-link>
                </el-link>
            </li>
            <li>
                <el-link
                    href="https://creator.douyin.com/"
                    target="_blank"
                    class="btn"
                    :underline="false"
                >
                    <span>创作服务平台</span>
                </el-link>
            </li>
            <li>
                <el-link
                    href="https://open.douyin.com/platform"
                    target="_blank"
                    class="btn"
                    :underline="false"
                >
                    <span>开放平台</span>
                </el-link>
            </li>
            <li @mouseenter="productListShow = true" @mouseleave="productListShow = false">
                <el-link href target="_blank" class="btn" :underline="false">
                    <router-link to="business">
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
                    </router-link>

                    <div class="product_list list" v-show="productListShow">
                        <div>
                            <span>抖音直播</span>
                        </div>
                        <div>
                            <span>系列产品</span>
                        </div>
                    </div>
                </el-link>
            </li>
            <li @mouseenter="businessListShow = true" @mouseleave="businessListShow = false">
                <el-link href target="_blank" class="btn" :underline="false">
                    <span>
                        认证与合作
                        <img
                            src="../../assets/xiangshang.png"
                            class="icon"
                            v-if="aboutListShow"
                        />
                        <img src="../../assets/xiangxia.png" class="icon" v-else />
                    </span>
                    <div class="business_list list" v-show="businessListShow">
                        <div>
                            <el-link
                                href="https://creator.douyin.com/"
                                target="_blank"
                                class="btn"
                                :underline="false"
                            >
                                <span>身份认证</span>
                            </el-link>
                        </div>
                        <div>
                            <span>机构入驻</span>
                        </div>
                        <div>
                            <span>企业合作</span>
                        </div>
                        <div>
                            <el-link
                                href="https://fxg.jinritemai.com/?source=mkt.dygw"
                                target="_blank"
                                class="btn"
                                :underline="false"
                            >
                                <span>电商入驻</span>
                            </el-link>
                        </div>
                    </div>
                </el-link>
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

<style scoped>
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
.el-link.el-link--default {
    color: #000;
}
.el-link {
    --el-link-font-size: 16px;
    --el-link-font-weight: normal;
    --el-link-default-text-color: #000;
    --el-link-default-active-color: #000;
    --el-link-disabled-text-color: #000;
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
.icon {
    width: 15px;
}
</style>
