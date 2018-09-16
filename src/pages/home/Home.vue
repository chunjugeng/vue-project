<template>
  <div class="home">
    <nav-link />
    <div class="container">
      <div class="flex">
        <div class="left">
           <ul>
            <li v-for="(h, index) in home" :class="{active: index === currIndex}" @click="queryCurrDesc(h, index)">{{h.title}}</li>
           </ul>
        </div>
        <div class="right">
          <div v-html="currDesc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NavLink from '~/components/NavLink.vue';
  import homeData from './home.json';
  export default {
    data: function() {
      return {
        home: homeData,
        currDesc: '',
        currIndex: 0
      }
    },
    methods: {
      queryCurrDesc: function(v, index) {
        this.home.map((data)=> {
          if (data._id === v._id) {
            this.currIndex = index ? index : 0; 
            this.currDesc = data.desc;
          }
        })
      }
    },
    mounted() {
      this.queryCurrDesc(this.home[0]);
    },
    components: {
      NavLink
    }
  }
</script>

<style lang="less">
  @green: #00bc8d;
  .home {
    .flex {
      display: flex;
      div {
        flex-direction: column;//排列方式
        flex-wrap: nowrap;//是否换行
        justify-content: space-between; //对齐方式
        align-items: flex-start;//align-items属性定义项目在交叉轴上如何对齐
        &.left {
          padding: 30px 0;
          order: 0;//排列位置，越小越在前
          // flex-grow: 0.37;//项目的占比空间
          width: 20%;
          background: white;
          ul {
            li {
              margin: 0 0 20px;
              padding: 0 12px;
              &:hover {
                color: @green;
              }
              &.active {
                border-left: 2px solid @green;
                color: @green;
              }
            }
          }
        }
        &.right {
          margin: 50px 0 0 50px;
          order: 1;
          // flex-grow: 2;
          width: 80%;
          background: white;
          border: 1px solid #d0c9c9;
          div {padding: 10px 20px;}
          p {
              
              line-height: 24px;
          }
        }
      }
    }
  }
  
</style>