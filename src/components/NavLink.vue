<template>
    <nav>
        <div class="list">
            <v-link title="home" to="/" />
            <v-link title="about" to="/about" />
        </div>
    </nav>    
</template>
<script>
    import  VLink from './VLink.vue';
    export default {
        components: {
            VLink
        }
    }
</script>

<style lang="less" type="text/less">
    @green: #00bc8d;
    nav {
        margin: 0 auto;
        padding: 20px 0;
        width: 100%;
        background: #4c4b4b;
        box-shadow: 1px 2px 3px #c7c7c7;
        .list {
            margin: 0 auto;
            width: 90%;
            span {
                margin: 0 15px;
                padding: 0 6px 5px;
                a {
                    color: white;
                }

                &.active {
                    border-bottom: 2px solid @green;
                    a {
                        color: @green;
                    }
                }
            }
            
        }
        
    }
</style>