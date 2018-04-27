<template>
    <footer class="footer">
        <ul>
            <router-link tag="li"  :to="`/${company}`" exact>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouyexin"></use>
                </svg>
                首页
            </router-link>
            <router-link tag="li" :to="`/${company}/sell`">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenleixin"></use>
                </svg>
                分类
            </router-link>
            <router-link tag="li" :to="`/${company}/set`">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wodegouwuchexin"></use>
                </svg>
                购物车
            </router-link>
            <router-link tag="li" :to="`/${company}/usercenter`">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gerenzhongxinxin"></use>
                </svg>
                个人中心
            </router-link>
        </ul>
    </footer>
</template>
<script>
import store from '@/mobile/store';
export default {
    store,
    name: 'v-Footer',
    data(){
        return {
            company: store.state.company
        }
    }
};

</script>
<style lang="scss">

</style>

<style lang="scss" scoped>
// @import '~common/dpr.scss';
@import '~@/assets/common/dpr.scss';
.footer {
    background-color: #fff;
    border-top: 1px solid #ccc;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;

        li {
            width: 25vw;
            height:(100rem/75);
            flex-direction: column;
            @include dpr-fz(24px);
            @include flex-center();
            justify-content: space-evenly;
            @include dpr-fz(24px);
            color: #999999;
            font-family:HiraginoSansGB-W3;
            svg.icon {
                @include dpr-fz(48px);
                margin-top: (7rem/75);
            }

            &.active {
                color:#B84747;
            }
        }
    }
}
</style>
